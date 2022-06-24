import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Ward from '../entities/ward';
import { createQueryBuilder, getRepository, In, Repository } from 'typeorm';
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
    let dataVaccinationSites = [];
    const vaccinationSites = await this.vaccinationSite.find();

    vaccinationSites.map((vaccinationSite) => {
      let { id, total_table, street_name, manager, name } = vaccinationSite;
      dataVaccinationSites.push({
        id,
        total_table,
        manager,
        street_name,
        name,
      });
    });
    let wardIds = [];
    vaccinationSites.map((vaccinationSite) => {
      wardIds.push(vaccinationSite['ward_id']);
    });
    const wardFormDBs = await this.wardRepository.find({
      where: { id: In([wardIds]) },
    });

    let districtIds = [];
    wardFormDBs.map((wardFormDB) => {
      districtIds.push(wardFormDB['district_id']);
    });

    const districtFromDBs = await this.districtRepository.find({
      where: { id: In([districtIds]) },
    });
    let provinceIds = [];
    districtFromDBs.map((districtsFromDB) => {
      provinceIds.push(districtsFromDB['province_id']);
    });

    const provinceFromDBs = await this.provinceRepository.find({
      where: { id: In([provinceIds]) },
    });
    districtFromDBs.map((district) => {
      district.wards = [];
      wardFormDBs.map((ward) => {
        if (district.id === ward['district_id']) {
          district.wards.push(ward);
        }
      });
      return district;
    });
    provinceFromDBs.map((province) => {
      province['districts'] = [];
      districtFromDBs.map((district) => {
        if (province.id === district['province_id']) {
          province['districts'].push(district);
        }
      });
      return province;
    });

    dataVaccinationSites.map((dataVaccinationSite) => {
      dataVaccinationSite.province = [];
      provinceFromDBs.map((province) => {
        dataVaccinationSite.province.push(province);
      });
      return dataVaccinationSite;
    });
    return dataVaccinationSites;
  }
  async getDataVaccinationSite(id: string) {
    const vaccination_site = await this.vaccinationSite.findOne({
      where: { id },
    });
    const { total_table, manager, street_name, name } = vaccination_site;
    let dataVaccinationSite: DataVaccinationSite = null;
    dataVaccinationSite = {
      id: vaccination_site.id,
      total_table,
      manager,
      street_name,
      name,
    };

    const district = await this.districtRepository.findOne({
      relations: ['province'],
    });
    let ward = await this.wardRepository.findOne({
      where: { id: vaccination_site.ward_id },
    });
    ward.district = district;
    dataVaccinationSite['ward'] = ward;
    return dataVaccinationSite;
  }
}
