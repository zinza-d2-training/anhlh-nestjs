import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { User } from './type';
import { CreateUserDto } from './user.dto';
import { UserService } from './user.service';
import { UpdateUserDto } from './update_user.dto';
@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}
  @Get()
  async list(): Promise<User[]> {
    return this.UserService.list();
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    console.log('123', __dirname);
    return this.UserService.remove(+id);
  }
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.UserService.update(+id, updateUserDto);
  }
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const response = await this.UserService.createUser(createUserDto);
    return response;
  }
}
