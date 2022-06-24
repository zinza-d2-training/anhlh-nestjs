import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import VaccinationSite from 'src/entities/vaccination_site';
import {
  CreateDataVaccinationSiteDto,
  UpdateDataVaccinationSiteDto,
} from './vaccination_site.dto';
<<<<<<< HEAD
import VaccineRegistration from 'src/entities/vaccine_registration';
import { UpdateUserRegisterInjectionDto } from './update_user_register_injection.dto';
=======
>>>>>>> master

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(VaccinationSite)
    private readonly vaccinationSite: Repository<VaccinationSite>,
<<<<<<< HEAD
    @InjectRepository(VaccineRegistration)
    private readonly vaccineRegistrationRepository: Repository<VaccineRegistration>,
  ) {}

  async createDataVaccinationSite(body: CreateDataVaccinationSiteDto) {
    return await this.vaccinationSite.save(body);
  }

=======
  ) {}

  async getDataVaccinationSite() {}
  async createDataVaccinationSite(body: CreateDataVaccinationSiteDto) {
    return await this.vaccinationSite.save(body);
  }
>>>>>>> master
  async updateDataVaccinationSite(
    id: string,
    body: UpdateDataVaccinationSiteDto,
  ) {
    const vaccinationSite = await this.vaccinationSite.findOne({
      where: { id },
    });

    return await this.vaccinationSite.update(vaccinationSite, body);
  }
<<<<<<< HEAD

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
=======
>>>>>>> master
}
