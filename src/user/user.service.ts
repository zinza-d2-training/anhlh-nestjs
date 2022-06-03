import { Injectable } from '@nestjs/common';
import User from './user.entity';
// import { CreateUserDto } from './user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async createUser(user: User) {
    const newUser = this.userRepository.create(user);
    return await this.userRepository.save(newUser);
  }
}
