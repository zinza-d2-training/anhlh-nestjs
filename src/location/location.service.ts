import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Ward from 'src/entities/ward';
import Province from 'src/entities/province';
import District from 'src/entities/district';

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

    districtsFromDB.map((district) => {
      district.wards = [];
      wardsFromDB.map((ward) => {
        if (district.id === ward['district_id']) {
          district.wards.push(ward);
        }
      });
      return district;
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
