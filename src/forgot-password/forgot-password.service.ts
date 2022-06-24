import { Injectable, UnauthorizedException } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from 'src/entities/User';

@Injectable()
export class ForgotPasswordService {
  constructor(
    private jwtService: JwtService,
    private mailerService: MailerService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async sendUserConfirmation(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
    });
    if (!user) {
      return {
        message: 'Email does not exist',
        status: 422,
      };
    }
    const payload = { email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);
    await this.userRepository.save({ ...user, reset_link: token });
    const url = `localhost:3000/forgot-password/confirm?token=${token}`;
    await this.mailerService.sendMail({
      to: user.email,
      from: process.env.MAIL_FROM,
      subject: 'Welcome to Nice App! Confirm your Email',
      html: `<b>${url}</b>`,
      context: {
        name: email,
        url,
      },
    });
    return {
      status: 200,
      message: 'success',
    };
  }
  async restPassword(token: string) {
    const hasToken = await this.userRepository.find({
      where: { reset_link: token },
    });
    if (hasToken) {
      var string_length = 8;
      var randomPassword = '';
      for (var i = 0; i < string_length; i++) {
        randomPassword = Math.random().toString(36).slice(-8);
      }
      return randomPassword;
    }
  }
}
