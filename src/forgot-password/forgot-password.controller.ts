import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { ForgotPasswordService } from './forgot-password.service';

@Controller('/forgot-passwords')
export class ForgotPasswordController {
  constructor(private forgotPasswordService: ForgotPasswordService) {}
  @Post('/')
  async sendMail(@Body('email') email: string) {
    return await this.forgotPasswordService.sendUserConfirmation(email);
  }

  @Get('/confirms')
  async restPassword(@Query('token') token: string) {
    return await this.forgotPasswordService.restPassword(token);
  }
}
