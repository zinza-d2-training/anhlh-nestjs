import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { RequestUser } from './request-user.interface';
import { jwtConstants } from 'src/utils/constants';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from 'src/entities/User';

@Injectable()
export class ForgotPasswordService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private mailerService: MailerService,
  ) {}

  async sendUserConfirmation(bearerToken: string, email: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      return new UnauthorizedException('Email does not exist', '404');
    }
    const token = bearerToken.replace('Bearer ', '');
    const url = `localhost:3000/forgot-password/confirm?token=${token}`;
    console.log(url);
    await this.mailerService.sendMail({
      to: email,
      from: 'anh.lh@zinza.vn.com',
      subject: 'Welcome to Nice App! Confirm your Email',
      html: `<b>${url}</b>`,
      context: {
        name: email,
        url,
      },
    });
  }
  async restPassword(token) {
    // jwt.verify(token, jwtConstants, function (err, decoded) {
    //   console.log(decoded.foo); // bar
    // });
  }
}
