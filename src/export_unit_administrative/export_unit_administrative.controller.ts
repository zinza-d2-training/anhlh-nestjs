import { ExportUnitAdministrativeService } from './export_unit_administrative.service';
import { Controller, Inject } from '@nestjs/common';

@Controller('export-unit-administrative')
export class ExportUnitAdministrativeController {
  constructor(
    @Inject('EXPORT_UNIT_ADMINISTRATIVE_SERVER')
    private readonly exportUnitAdministrativeService: ExportUnitAdministrativeService,
  ) {}
}
