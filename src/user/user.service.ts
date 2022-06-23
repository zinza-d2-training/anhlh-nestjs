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

  async findOne(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }

  @UseGuards(JwtAuthGuard)
  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ id });
    const {
      email,
      password,
      ward_id,
      identity_card_number,
      gender,
      full_name,
      birthday,
    } = updateUserDto;
    const hasUser = await this.userRepository.findOne({ email });
    const hasIdentityCardNumber = await this.userRepository.findOne({
      identity_card_number,
    });
    const saltRounds = 10;
    const hashPass = bcrypt.hashSync(password, saltRounds);
    return await this.userRepository.update(user, updateUserDto);
  }
}
