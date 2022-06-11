import { Controller, Post, Get, Body } from '@nestjs/common';
import { UserRegisterDto } from './user-register.dto';
import { UserRegisterService } from './user-register.service';

@Controller('/user')
export class UserRegisterController {
  constructor(private userRegisterService: UserRegisterService) {}

  @Post('register')
  async register(@Body() user: UserRegisterDto) {
    return this.userRegisterService.registerUser(user);
  }
}
