import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from '../utils/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from '../entities/user';
import { AuthController } from './auth.controller';
import District from 'src/entities/District';
import Province from 'src/entities/Province';
import Ward from 'src/entities/Ward';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
    TypeOrmModule.forFeature([User, District, Province, Ward]),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
