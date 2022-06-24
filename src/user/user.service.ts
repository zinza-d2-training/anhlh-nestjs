import { Injectable, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './update_user.dto';
import User from 'src/entities/User';
import * as bcrypt from 'bcrypt';
import { ValidateUserException } from 'src/utils/validate.exception';
import { JwtAuthGuard } from 'src/utils/jwt-auth.guard';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOne(id: string) {
    return await this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ id });
    const { password } = updateUserDto;

    const saltRounds = 10;
    const hashPass = bcrypt.hashSync(password, saltRounds);

    return await this.userRepository.update(user, {
      ...updateUserDto,
      password: hashPass,
    });
  }
}
