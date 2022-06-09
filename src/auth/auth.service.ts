import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
import { UserInterface } from '../user/type';
import { InjectRepository } from '@nestjs/typeorm';
import User from 'src/entities/User';
import { Repository } from 'typeorm';
import { RegisterDto } from './register.dto';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.userRepository.findOne({ email });
    const comparePassword = await bcrypt.compare(pass, user.password);
    if (comparePassword) {
      const { password, ...email_and_id } = user;
      return email_and_id;
    }
    return null;
  }

  async registerUser(body: RegisterDto) {
    const { email, password } = body;
    const hasUser = await this.userRepository.findOne({ email });
    const saltRounds = 10;
    if (hasUser) {
      return 'user da ton tai';
    }

    const hashPass = await bcrypt.hashSync(password, saltRounds);
    const user = await this.userRepository.create({
      email,
      password: hashPass,
    });
    await this.userRepository.save(user);
    return user;
  }

  async login(user: UserInterface) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  logout() {
    return {
      status: '200',
      message: 'Đăng xuất thành công',
    };
  }

  async getProfile(user: UserInterface) {
    const { id } = user;
    return this.userRepository.findOne({ id });
  }
}
