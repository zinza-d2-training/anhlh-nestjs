import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Command, CommandArguments, _cli } from '@squareboat/nest-console';
import Ward from 'src/entities/Ward';
import Province from 'src/entities/Province';
import District from 'src/entities/District';
import { Repository } from 'typeorm';
import * as XLSX from 'xlsx';
@Injectable()
export class ExportUnitAdministrativeService {
  constructor(
    @InjectRepository(Ward)
    private readonly wardRepository: Repository<Ward>,
    @InjectRepository(District)
    private readonly districtRepository: Repository<District>,
    @InjectRepository(Province)
    private readonly provinceRepository: Repository<Province>,
  ) {}
  @Command('export', {
    desc: 'Export data from excel to mysql server',
    args: { name: { req: false } },
  })
  async exportFile() {
    const provinces = [];
    const districts = [];
    const wards = [];
    _cli.info(`export file`);
    const dataUnitAdministrative = XLSX.readFile(
      'src/utils/Danh sách cấp tỉnh kèm theo quận huyện, phường xã ___04_06_2022.xls',
    ).Sheets;
    const listRecords = XLSX.utils.sheet_to_json(
      dataUnitAdministrative['Sheet1'],
    );
    for (const record of listRecords) {
      const isExistListProvince: boolean = provinces.some(
        (province) => province.name == record['Tỉnh Thành Phố'],
      );
      if (!isExistListProvince) {
        provinces.push({ name: record['Tỉnh Thành Phố'] });
      }
    }
    await this.provinceRepository.insert(provinces);

    const listProvinceFromDB = await this.provinceRepository.find();
    for (const record of listRecords) {
      for (const province of listProvinceFromDB) {
        if (province.name === record['Tỉnh Thành Phố']) {
          const isExistedDistrict = districts.some(
            (district) => district.name === record['Quận Huyện'],
          );
          if (!isExistedDistrict) {
            districts.push({
              name: record['Quận Huyện'],
              provinces_id: province.id,
            });
          }
        }
      }
    }
    await this.districtRepository.insert(districts);

    const listDistrictFromDB = await this.districtRepository.find();
    for (const record of listRecords) {
      for (const district of listDistrictFromDB) {
        if (district.name === record['Quận Huyện']) {
          wards.push({
            name: record['Phường Xã'] || 'Undefined data',
            districts_id: district.id,
          });
        }
      }
    }
    await this.wardRepository.insert(wards);
    return;
  }
}
