import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import VaccinationSite from 'src/entities/vaccination_site';
import { JwtStrategy } from '../utils/jwt.strategy';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import VaccineRegistration from 'src/entities/vaccine_registration';
import User from 'src/entities/User';
<<<<<<< HEAD
import Document from '../entities/document';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      VaccinationSite,
      VaccineRegistration,
      User,
      Document,
    ]),
=======

@Module({
  imports: [
    TypeOrmModule.forFeature([VaccinationSite, VaccineRegistration, User]),
>>>>>>> master
  ],
  controllers: [AdminController],
  providers: [AdminService, JwtStrategy],
})
export class AdminModule {}
