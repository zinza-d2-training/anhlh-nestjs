import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User as UserInterface } from './regiter.interface';
import { InjectRepository } from '@nestjs/typeorm';
import User from 'src/entities/User';
import { Repository } from 'typeorm';
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
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async registerUser(body: UserInterface) {
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
    return `Authentication=; HttpOnly; Path=/; Max-Age=0`;
  }
}
