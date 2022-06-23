import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Ward from '../entities/ward';
import { Repository } from 'typeorm';
import VaccinationSite from 'src/entities/vaccination_site';
import District from 'src/entities/district';
import Province from 'src/entities/province';
import { DataVaccinationSite } from './type';

@Injectable()
export class VaccinationSiteService {
  constructor(
    @InjectRepository(Ward)
    private readonly wardRepository: Repository<Ward>,
    @InjectRepository(District)
    private readonly districtRepository: Repository<District>,
    @InjectRepository(Province)
    private readonly provinceRepository: Repository<Province>,
    @InjectRepository(VaccinationSite)
    private readonly vaccinationSite: Repository<VaccinationSite>,
  ) {}

  async getAllDataVaccinationSite() {
    const DataVaccinationSite: DataVaccinationSite[] = [];
    const vaccination_sites = await this.vaccinationSite.find();
    vaccination_sites.map((vaccinationSite) => {
      let { id, total_table, street_name, manager, name } = vaccinationSite;
      DataVaccinationSite.push({ id, total_table, manager, street_name, name });
    });
    for (let i = 0; i < vaccination_sites.length; i++) {
      const ward_id = vaccination_sites[i]['ward_id'];
      const ward = await this.wardRepository.findOne({
        where: { id: ward_id },
      });
      const district = await this.districtRepository.findOne({
        where: { id: ward['district_id'] },
      });
      const province = await this.provinceRepository.findOne({
        where: { id: district['province_id'] },
      });
      DataVaccinationSite[i]['ward'] = {
        id: ward.id,
        name: ward.name,
      };
      DataVaccinationSite[i]['district'] = {
        id: district.id,
        name: district.name,
      };
      DataVaccinationSite[i]['province'] = {
        id: province.id,
        name: province.name,
      };
    }
    return DataVaccinationSite;
  }
  async getDataVaccinationSite(id: string) {
    const vaccination_site = await this.vaccinationSite.findOne({
      where: { id },
    });
    const { total_table, manager, street_name, name } = vaccination_site;
    let DataVaccinationSite: DataVaccinationSite = null;
    DataVaccinationSite: DataVaccinationSite = {
      id: vaccination_site.id,
      total_table,
      manager,
      street_name,
      name,
    };
    const wardId = vaccination_site['ward_id'];
    const ward = await this.wardRepository.findOne({
      where: { id: wardId },
    });
    const district_id = ward['district_id'];
    const district = await this.districtRepository.findOne({
      where: { id: district_id },
    });
    const province_id = district['province_id'];
    const province = await this.provinceRepository.findOne({
      where: { id: province_id },
    });
    DataVaccinationSite['ward'] = {
      id: ward.id,
      name: ward.name,
    };
    DataVaccinationSite.district = null;
    DataVaccinationSite['district'] = {
      id: district.id,
      name: district.name,
    };
    DataVaccinationSite.province = null;
    DataVaccinationSite['province'] = {
      id: province.id,
      name: province.name,
    };
    return DataVaccinationSite;
  }
}
