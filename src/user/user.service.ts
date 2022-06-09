import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserInterface } from './type';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './update_user.dto';
import User from 'src/entities/User';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOne(email: string) {
    return await this.userRepository.findOne({ email });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ id });
    Object.assign(user, updateUserDto);
    return await this.userRepository.save(user);
  }

  async createUser(body: CreateUserDto) {
    const newUser = this.userRepository.create(body);
    return await this.userRepository.save(newUser);
  }

  async remove(id: number) {
    const user = await this.userRepository.findOne({ id });
    return await this.userRepository.remove(user);
  }
}
