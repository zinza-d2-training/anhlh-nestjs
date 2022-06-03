import { Controller, Body, Post, Get } from '@nestjs/common';
import { User } from './type';
import { CreateUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}
  @Get()
  async findOne(): Promise<User> {
    return;
  }
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const response = await this.UserService.createUser(createUserDto);
    return response;
  }
}
