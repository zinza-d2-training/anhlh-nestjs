import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import VaccinationSite from 'src/entities/vaccination_site';
import {
  CreateDataVaccinationSiteDto,
  UpdateDataVaccinationSiteDto,
} from './vaccination_site.dto';
import VaccineRegistration from 'src/entities/vaccine_registration';
import { UpdateUserRegisterInjectionDto } from './update_user_register_injection.dto';
import User from 'src/entities/User';
import { UpdateUserDto } from 'src/user/update_user.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(VaccinationSite)
    private readonly vaccinationSite: Repository<VaccinationSite>,
    @InjectRepository(VaccineRegistration)
    private readonly vaccineRegistrationRepository: Repository<VaccineRegistration>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createDataVaccinationSite(body: CreateDataVaccinationSiteDto) {
    return await this.vaccinationSite.save(body);
  }

  async updateDataVaccinationSite(
    id: string,
    body: UpdateDataVaccinationSiteDto,
  ) {
    const vaccinationSite = await this.vaccinationSite.findOne({
      where: { id },
    });

    return await this.vaccinationSite.update(vaccinationSite, body);
  }

  async getAllUserRegisterInjection() {
    return await this.vaccineRegistrationRepository.find();
  }

  async updateUserRegisterInjection(
    id: string,
    body: UpdateUserRegisterInjectionDto,
  ) {
    const userRegisterInjection =
      await this.vaccineRegistrationRepository.findOne({ where: { id } });
    return await this.vaccineRegistrationRepository.update(
      userRegisterInjection,
      body,
    );
  }

  async getAllUser() {
    return await this.userRepository.find();
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id } });
    return await this.userRepository.update(user, updateUserDto);
  }
}
