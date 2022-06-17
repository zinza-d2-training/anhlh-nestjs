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
    const wards = await this.wardRepository.find();
    const districts = await this.districtRepository.find();
    const provinces = await this.provinceRepository.find();
    return { provinces, districts, wards };
  }
}
