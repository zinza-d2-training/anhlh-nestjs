import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import VaccineRegistration from 'src/entities/vaccine_registration';
import PriorityGroup from 'src/entities/priority_group';
import { UpdateUserRegisterInjectionDto } from './update_user_register_injection.dto';

@Injectable()
export class VaccineRegistrationService {
  constructor(
    @InjectRepository(VaccineRegistration)
    private readonly vaccineRegistrationRepository: Repository<VaccineRegistration>,
    @InjectRepository(PriorityGroup)
    private readonly priorityGroupRepository: Repository<PriorityGroup>,
  ) {}

  async createRegisterInjection(
    id: number,
    body: UpdateUserRegisterInjectionDto,
  ) {
    const {
      priority_group_id,
      session_id,
      address,
      health_insurance_number,
      expected_date,
      occupation,
      work_place,
    } = body;
    return await this.vaccineRegistrationRepository.save({
      priority_group_id,
      session_id,
      address,
      health_insurance_number,
      expected_date,
      occupation,
      work_place,
      user_id: id,
    });
  }

  async getAllUserRegisterInjection(id: string) {
    return await this.vaccineRegistrationRepository.findOne({
      where: { user_id: id },
    });
  }

  async getUserRegisterInjection(id: string) {
    return await this.vaccineRegistrationRepository.findOne({
      where: { id },
    });
  }
}
