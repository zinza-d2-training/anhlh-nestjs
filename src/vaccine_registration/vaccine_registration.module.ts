import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VaccineRegistrationService } from './vaccine_registration.service';
import { VaccineRegistrationController } from './vaccine_registration.controller';
import VaccineRegistration from 'src/entities/vaccine_registration';
import PriorityGroup from 'src/entities/priority_group';
import { JwtAuthGuard } from 'src/utils/jwt-auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([PriorityGroup, VaccineRegistration])],
  providers: [VaccineRegistrationService, JwtAuthGuard],
  controllers: [VaccineRegistrationController],
})
export class VaccineRegistrationModule {}
