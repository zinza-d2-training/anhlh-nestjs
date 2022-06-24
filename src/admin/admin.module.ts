import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import VaccinationSite from 'src/entities/vaccination_site';
import { JwtStrategy } from '../utils/jwt.strategy';
<<<<<<< HEAD
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import VaccineRegistration from 'src/entities/vaccine_registration';

@Module({
  imports: [TypeOrmModule.forFeature([VaccinationSite, VaccineRegistration])],
=======
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constants';
import { PassportModule } from '@nestjs/passport';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
    TypeOrmModule.forFeature([VaccinationSite]),
  ],
>>>>>>> master
  controllers: [AdminController],
  providers: [AdminService, JwtStrategy],
})
export class AdminModule {}
