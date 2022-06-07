import { Module } from '@nestjs/common';
import { ExportUnitAdministrativeService } from './export_unit_administrative.service';
import { ExportUnitAdministrativeController } from './export_unit_administrative.controller';

@Module({
  providers: [
    {
      provide: 'EXPORT_UNIT_ADMINISTRATIVE_SERVER',
      useClass: ExportUnitAdministrativeService,
    },
  ],
  controllers: [ExportUnitAdministrativeController],
})
export class ExportUnitAdministrativeModule {}
