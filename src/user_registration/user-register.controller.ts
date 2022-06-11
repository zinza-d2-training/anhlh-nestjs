import { Controller, Post, Get, Body, Patch, Param } from '@nestjs/common';
import { UpdateUserDto } from './UpdateUserDto.dto';
import { UserRegisterDto } from './user-register.dto';
import { UserRegisterService } from './user-register.service';

@Controller('/user')
export class UserRegisterController {
  constructor(private userRegisterService: UserRegisterService) {}
  @Post('register')
  async register(@Body() body: UserRegisterDto) {
    return this.userRegisterService.registerUser(body);
  }
  @Patch('update/:id')
  async update(@Param('id') id: number, @Body() body: UpdateUserDto) {
    console.log(id);
    return this.userRegisterService.updateUser(id, body);
  }
}
