import { Controller, Post, UseGuards, Get, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { GetUser } from './get-user.decorators';
import { UserLoginInterface } from './user-login.interface';
import { UserRegisterDto } from './user-register.dto';
import { IsAdmin } from 'src/utils/check_admin.guard';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@GetUser() user: UserLoginInterface) {
    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() body: UserRegisterDto) {
    return this.authService.registerUser(body);
  }

  @Post('logout')
  async logout() {
    return this.authService.logout();
  }

  @UseGuards(JwtAuthGuard, IsAdmin)
  @Get('profile')
  async getProfile(@GetUser('id') id: number) {
    return await this.authService.getProfile(id);
  }
}
