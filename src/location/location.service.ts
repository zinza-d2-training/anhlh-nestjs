import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Ward from 'src/entities/Ward';
import Province from 'src/entities/Province';
import District from 'src/entities/District';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Ward)
    private readonly wardRepository: Repository<Ward>,
    @InjectRepository(District)
    private readonly districtRepository: Repository<District>,
    @InjectRepository(Province)
    private readonly provinceRepository: Repository<Province>,
  ) {}

  async getUnitAdministrative() {
    const wardsFromDB = await this.wardRepository.find();
    const districtsFromDB = await this.districtRepository.find();
    const provincesFromDB = await this.provinceRepository.find();

    districtsFromDB.map((element: any) => {
      element.wards = [];
      wardsFromDB.map((ward) => {
        if (element.id === ward['district_id']) {
          element.wards.push(ward);
        }
      });
      return element;
    });
    provincesFromDB.map((province) => {
      province['districts'] = [];
      districtsFromDB.map((district) => {
        if (province.id === district['province_id']) {
          province['districts'].push(district);
        }
      });
      return province;
    });
    return provincesFromDB;
  }
}
