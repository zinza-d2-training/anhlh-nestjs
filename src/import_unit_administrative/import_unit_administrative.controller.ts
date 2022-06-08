import { ImportUnitAdministrativeService } from './import_unit_administrative.service';
import { Controller, Inject } from '@nestjs/common';

@Controller('import-unit-administrative')
export class ImportUnitAdministrativeController {
  constructor(
    @Inject('Import_UNIT_ADMINISTRATIVE_SERVER')
    private readonly importUnitAdministrativeService: ImportUnitAdministrativeService,
  ) {}
}
