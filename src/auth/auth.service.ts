import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import User from 'src/entities/User';
import { Repository } from 'typeorm';
import { UserLoginInterface } from './user-login.interface';
import { UserRegisterDto } from './user-register.dto';
import Ward from 'src/entities/Ward';
import Province from 'src/entities/Province';
import District from 'src/entities/District';
import { ValidateUserException } from 'src/utils/validate.exception';

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
    const findEmail = await this.userRepository.findOne({ where: { email } });
    if (!findEmail) {
      throw new ValidateUserException({
        email: ['Email does not exist'],
      });
    }
    const comparePassword = await bcrypt.compare(pass, findEmail.password);
    if (comparePassword) {
      const { password, ...emailAndId } = findEmail;
      return emailAndId;
    } else {
      throw new ValidateUserException({
        password: ['password is not correct'],
      });
    }
    return null;
  }

  async login(user: UserLoginInterface) {
    const payload = { email: user.email, sub: user.id };
    return {
      email: user.email,
      access_token: this.jwtService.sign(payload),
    };
  }
  async getUnitAdministrative() {
    const wards = await this.wardRepository.find();
    const districts = await this.districtRepository.find();
    const provinces = await this.provinceRepository.find();
    return { provinces, districts, wards };
  }
  async registerUser(body: UserRegisterDto) {
    const {
      email,
      password,
      ward_id,
      identity_card_number,
      gender,
      fullname,
      birthday,
    } = body;
    const hasUser = await this.userRepository.findOne({ email });
    const hasIdentityCardNumber = await this.userRepository.findOne({
      identity_card_number,
    });
    const saltRounds = 10;
    if (hasIdentityCardNumber) {
      throw new ValidateUserException({
        identity_card_number: ['Identity Card Number does exist'],
      });
    }
    if (hasUser) {
      throw new ValidateUserException({
        email: ['Email does exist'],
      });
    }
    const hashPass = await bcrypt.hashSync(password, saltRounds);
    const user = await this.userRepository.save({
      email,
      password: hashPass,
      fullname,
      ward_id,
      gender,
      identity_card_number,
      role: 'user',
      birthday,
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
