import {
  Controller,
  Post,
  Get,
  Body,
  Patch,
  Param,
  Query,
  Headers,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from 'src/auth/get-user.decorators';
import { JwtAuthGuard } from '../utils/jwt-auth.guard';
import { ForgotPasswordService } from './forgot-password.service';
import { RequestUser } from './request-user.interface';

@Controller('/forgot-password')
export class ForgotPasswordController {
  constructor(private forgotPassworService: ForgotPasswordService) {}
  @UseGuards(JwtAuthGuard)
  @Post('/')
  sendMail(
    @Body() email: string,
    @Headers('Authorization') token: string,
    @GetUser() user: RequestUser,
  ) {
    return this.forgotPassworService.sendUserConfirmation(token, email, user);
  }
  @Get('/confirm')
  restPassword(@Query() token: string) {}
}
