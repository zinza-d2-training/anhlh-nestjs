import { Controller, Body, Post, Param, Patch, Delete } from '@nestjs/common';
import { User } from './type';
import { CreateUserDto } from './user.dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UserService } from './user.service';
import { UpdateUserDto } from './update_user.dto';
@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}
  @Delete(':id')
  remove(@Param('id') id: string) {
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
