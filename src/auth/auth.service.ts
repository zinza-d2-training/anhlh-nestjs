import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import User from 'src/entities/User';
import { Repository } from 'typeorm';
import { UserLoginInterface } from './user-login.interface';
import { UserRegisterDto } from './user-register.dto';
import District from 'src/entities/District';
import Province from 'src/entities/Province';
import Ward from 'src/entities/Ward';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Ward)
    private readonly wardRepository: Repository<Ward>,
    @InjectRepository(District)
    private readonly districtRepository: Repository<District>,
    @InjectRepository(Province)
    private readonly provinceRepository: Repository<Province>,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.userRepository.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('User does not exist', '401');
    }
    const comparePassword = await bcrypt.compare(pass, user.password);
    if (comparePassword) {
      const { password, ...emailAndId } = user;
      return emailAndId;
    }
    return null;
  }

  async login(user: UserLoginInterface) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async registerUser(body: UserRegisterDto) {
    const { email, password, ward_id, identity_card_number, gender, fullname } =
      body;
    const hasUser = await this.userRepository.findOne({ email });
    const saltRounds = 10;
    if (hasUser) {
      return 'user already exists';
    }
    const hashPass = bcrypt.hashSync(password, saltRounds);
    const user = await this.userRepository.save({
      email,
      password: hashPass,
      fullname,
      ward_id,
      gender,
      identity_card_number,
      role: 'user',
    });
    return user;
  }

  logout() {
    return {
      status: '200',
      message: 'Logout successful',
    };
  }

  async getProfile(id: number) {
    const profileUser = await this.userRepository.findOne({ id });
    return profileUser;
  }
}
