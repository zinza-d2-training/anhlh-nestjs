import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Body,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RegisterDto } from './register.dto';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() user: RegisterDto) {
    return this.authService.login(user);
  }
  @Post('register')
  async register(@Body() user: RegisterDto) {
    return this.authService.registerUser(user);
  }
  @Post('logout')
  async logout(@Res() response: Response) {
    return response.sendStatus(200);
  }
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return this.authService.getProfile(req.user);
  }
}
