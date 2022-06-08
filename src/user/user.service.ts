import { Injectable } from '@nestjs/common';
import User from '../entities/User';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './update_user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ id });
    Object.assign(user, updateUserDto);
    return await this.userRepository.save(user);
  }
  async createUser(user: User) {
    const newUser = this.userRepository.create(user);
    return await this.userRepository.save(newUser);
  }
  async remove(id: number) {
    const user = await this.userRepository.findOne({ id });
    return await this.userRepository.remove(user);
  }
}
