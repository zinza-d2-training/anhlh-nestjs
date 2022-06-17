import { Module } from '@nestjs/common';
import { ForgotPasswordService } from './forgot-password.service';
import { JwtStrategy } from 'src/utils/jwt.strategy';
import { ForgotPasswordController } from './forgot-password.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from 'src/entities/User';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constants';
dotenv.config();

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: process.env.MAIL_HOST,
        port: 587,
        secure: false,
        auth: {
          user: 'anh.lh@zinza.com.vn',
          pass: '123123123',
        },
      },
      defaults: {
        from: 'No Reply',
      },
      preview: true,
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [ForgotPasswordService, JwtStrategy],
  controllers: [ForgotPasswordController],
  exports: [ForgotPasswordService],
})
export class ForgotPasswordModule {}
