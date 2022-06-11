import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from 'src/entities/user';
import Ward from 'src/entities/ward';
import Province from 'src/entities/province';
import District from 'src/entities/district';
import { UserRegisterController } from './user-register.controller';
import { UserRegisterService } from './user-register.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Ward, District, Province])],
  providers: [UserRegisterService],
  controllers: [UserRegisterController],
})
export class UserRegisterModule {}
