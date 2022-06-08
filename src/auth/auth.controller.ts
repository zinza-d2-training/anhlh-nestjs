import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.AuthService.login(req.user);
  }
}
