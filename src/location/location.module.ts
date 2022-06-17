import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Province from 'src/entities/province';
import District from 'src/entities/district';
import Ward from 'src/entities/ward';
import { LocationController } from './location.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Province, District, Ward])],
  providers: [LocationService],
  controllers: [LocationController],
})
export class LocationModule {}
