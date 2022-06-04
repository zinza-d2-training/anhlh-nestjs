import { Injectable } from '@nestjs/common';
import User from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './update_user.dto';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async list() {
    console.log('oks');
    return await this.userRepository.find();
  }
  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOneBy({ id });
    Object.assign(user, updateUserDto);
    return await this.userRepository.save(user);
  }
  async createUser(user: User) {
    const newUser = this.userRepository.create(user);
    return await this.userRepository.save(newUser);
  }
  async remove(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    return await this.userRepository.remove(user);
  }
}
