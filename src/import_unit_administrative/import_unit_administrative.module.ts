import { Module } from '@nestjs/common';
import { ImportUnitAdministrativeService } from './import_unit_administrative.service';
import { ImportUnitAdministrativeController } from './import_unit_administrative.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Province from 'src/entities/Province';
import District from 'src/entities/District';
import Ward from 'src/entities/Ward';

@Module({
  imports: [TypeOrmModule.forFeature([Province, District, Ward])],
  providers: [
    {
      provide: 'IMPORT_UNIT_ADMINISTRATIVE_SERVER',
      useClass: ImportUnitAdministrativeService,
    },
  ],
  controllers: [ImportUnitAdministrativeController],
})
export class ImportUnitAdministrativeModule {}
