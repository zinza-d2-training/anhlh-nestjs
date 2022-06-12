import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import User from 'src/entities/User';
import { Repository } from 'typeorm';
import { UserLoginInterface } from './user-login.interface';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('User does not exist', '404');
    }
    const comparePassword = bcrypt.compareSync(pass, user.password);
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
