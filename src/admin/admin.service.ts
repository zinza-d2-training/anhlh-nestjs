import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import VaccinationSite from 'src/entities/vaccination_site';
import {
  CreateDataVaccinationSiteDto,
  UpdateDataVaccinationSiteDto,
} from './vaccination_site.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(VaccinationSite)
    private readonly vaccinationSite: Repository<VaccinationSite>,
  ) {}

  async getDataVaccinationSite() {}
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
}
