import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './update_user.dto';
import User from 'src/entities/User';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOne(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      return {
        message: 'user does not exist',
        status: 422,
      };
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ id });
    if (!user) {
      return {
        message: 'user does not exist',
        status: 422,
      };
    }
    const { password } = updateUserDto;

    const saltRounds = 10;
    const hashPass = bcrypt.hashSync(password, saltRounds);

    return await this.userRepository.update(user, {
      ...updateUserDto,
      password: hashPass,
    });
  }
}
