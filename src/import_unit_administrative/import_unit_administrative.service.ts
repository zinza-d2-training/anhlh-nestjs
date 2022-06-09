import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Command, _cli } from '@squareboat/nest-console';
import Ward from 'src/entities/Ward';
import Province from 'src/entities/Province';
import District from 'src/entities/District';
import { Repository } from 'typeorm';
import * as XLSX from 'xlsx';

@Injectable()
export class ImportUnitAdministrativeService {
  constructor(
    @InjectRepository(Ward)
    private readonly wardRepository: Repository<Ward>,
    @InjectRepository(District)
    private readonly districtRepository: Repository<District>,
    @InjectRepository(Province)
    private readonly provinceRepository: Repository<Province>,
  ) {}
  @Command('import', {
    desc: 'import data from excel to mysql server',
    args: { name: { req: false } },
  })
  async importFile() {
    const provinces = [];
    const districts = [];
    const wards = [];
    _cli.info(`import file`);
    const dataUnitAdministrative = XLSX.readFile(
      'src/utils/Danh sách cấp tỉnh kèm theo quận huyện, phường xã ___04_06_2022.xls',
    ).Sheets;
    const unitAdministratives = XLSX.utils.sheet_to_json(
      dataUnitAdministrative['Sheet1'],
    );
    for (const province of unitAdministratives) {
      const isExistListProvince: boolean = provinces.some(
        (province) => province.name == province['Tỉnh Thành Phố'],
      );
      if (!isExistListProvince) {
        provinces.push({ name: province['Tỉnh Thành Phố'] });
      }
    }
    await this.provinceRepository.insert(provinces);

    const listProvinceFromDB = await this.provinceRepository.find();
    for (const district of unitAdministratives) {
      for (const province of listProvinceFromDB) {
        if (province.name === district['Tỉnh Thành Phố']) {
          const isExistedDistrict = districts.some(
            (district) => district.name === district['Quận Huyện'],
          );
          if (!isExistedDistrict) {
            districts.push({
              name: district['Quận Huyện'],
              province_id: province.id,
            });
          }
        }
      }
    }
    await this.districtRepository.insert(districts);

    const listDistrictFromDB = await this.districtRepository.find();
    for (const ward of unitAdministratives) {
      for (const district of listDistrictFromDB) {
        if (district.name === ward['Quận Huyện']) {
          wards.push({
            name: ward['Phường Xã'] || 'Undefined data',
            district_id: district.id,
          });
        }
      }
    }
    await this.wardRepository.insert(wards);
    return;
  }
}
