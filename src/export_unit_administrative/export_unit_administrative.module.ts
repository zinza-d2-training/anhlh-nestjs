import { Module } from '@nestjs/common';
import { ExportUnitAdministrativeService } from './export_unit_administrative.service';
import { ExportUnitAdministrativeController } from './export_unit_administrative.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Province from 'src/entities/Province';
import District from 'src/entities/District';
import Ward from 'src/entities/Ward';
@Module({
  imports: [TypeOrmModule.forFeature([Province, District, Ward])],
  providers: [
    {
      provide: 'EXPORT_UNIT_ADMINISTRATIVE_SERVER',
      useClass: ExportUnitAdministrativeService,
    },
  ],
  controllers: [ExportUnitAdministrativeController],
})
export class ExportUnitAdministrativeModule {}
