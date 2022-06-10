import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserInterface } from '../user/type';
import { InjectRepository } from '@nestjs/typeorm';
import User from 'src/entities/User';
import { Repository } from 'typeorm';
import { UserRegisterDto } from './user-register.dto';
import { UserLoginInterface } from './user-login.interface';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
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

  async registerUser(body: UserRegisterDto) {
    const { email, password } = body;
    const hasUser = await this.userRepository.findOne({ email });
    const saltRounds = 10;
    if (hasUser) {
      return 'user already exists';
    }

    const hashPass = await bcrypt.hashSync(password, saltRounds);
    const user = await this.userRepository.create({
      email,
      password: hashPass,
    });
    return user;
  }

  async login(user: UserLoginInterface) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
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
