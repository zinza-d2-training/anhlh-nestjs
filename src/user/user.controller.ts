import { Controller, Body, Param, Patch, Get } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UserService } from './user.service';
import { UpdateUserDto } from './update_user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.UserService.findOne(id);
  }
  @Get('/infor')
  findAll() {
    return this.UserService.findAll();
  }
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.UserService.update(+id, updateUserDto);
  }
}
