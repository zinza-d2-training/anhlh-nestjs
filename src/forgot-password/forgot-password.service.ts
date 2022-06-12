import { HttpException, Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { RequestUser } from './request-user.interface';
import { jwtConstants } from 'src/utils/constants';

@Injectable()
export class ForgotPasswordService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(
    bearerToken: string,
    email: string,
    user: RequestUser,
  ) {
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
