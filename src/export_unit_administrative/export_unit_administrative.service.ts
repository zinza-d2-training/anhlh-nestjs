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
  async sayHello(args: CommandArguments) {
    const listProvince = [];
    const listDistrict = [];
    const listWard = [];
    _cli.info(`Hello ${args.name || 'world'}!`);
    const dataUnitAdministrative = XLSX.readFile(
      'src/utils/Danh sách cấp tỉnh kèm theo quận huyện, phường xã ___04_06_2022.xls',
    ).Sheets;
    const listRecords = XLSX.utils.sheet_to_json(
      dataUnitAdministrative['Sheet1'],
    );
    for (const record of listRecords) {
      const isExistListProvince: boolean = listProvince.some(
        (province) => province.name == record['Tỉnh Thành Phố'],
      );
      if (!isExistListProvince) {
        listProvince.push({ name: record['Tỉnh Thành Phố'] });
      }
    }
    await this.provinceRepository.insert(listProvince);

    const listProvinceFromDB = await this.provinceRepository.find();
    for (const record of listRecords) {
      for (const province of listProvinceFromDB) {
        if (province.name === record['Tỉnh Thành Phố']) {
          const isExistedDistrict = listDistrict.some(
            (district) => district.name === record['Quận Huyện'],
          );
          if (!isExistedDistrict) {
            listDistrict.push({
              name: record['Quận Huyện'],
              province_id: province.id,
            });
          }
        }
      }
    }
    await this.districtRepository.insert(listDistrict);

    const listDistrictFromDB = await this.districtRepository.find();
    for (const record of listRecords) {
      for (const district of listDistrictFromDB) {
        if (district.name === record['Quận Huyện']) {
          listWard.push({
            name: record['Phường Xã'] || 'Undefined data',
            district_id: district.id,
          });
        }
      }
    }
    await this.wardRepository.insert(listWard);
    return;
  }
}
