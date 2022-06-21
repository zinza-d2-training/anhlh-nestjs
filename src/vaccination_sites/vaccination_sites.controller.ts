import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Ward from 'src/entities/ward';
import { Repository } from 'typeorm';

@Injectable()
export class VaccinationSite {
  constructor(
    @InjectRepository(Ward)
    private readonly wardRepository: Repository<Ward>,
  ) {}

   async getAllVaccinationSite () {
    const vaccination_sites = await this. 
   }
}
