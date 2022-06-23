import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import VaccinationSite from 'src/entities/vaccination_site';
import { JwtStrategy } from '../utils/jwt.strategy';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import VaccineRegistration from 'src/entities/vaccine_registration';

@Module({
  imports: [TypeOrmModule.forFeature([VaccinationSite, VaccineRegistration])],
  controllers: [AdminController],
  providers: [AdminService, JwtStrategy],
})
export class AdminModule {}
