import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VaccinationSiteService } from './vaccination_site.service';
import { VaccinationSiteController } from './vaccination_sites.controller';
import Ward from '../entities/ward';
import District from 'src/entities/district';
import Province from 'src/entities/province';
import VaccinationSite from 'src/entities/vaccination_site';
import { JwtStrategy } from '../utils/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constants';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
    TypeOrmModule.forFeature([Ward, District, Province, VaccinationSite]),
  ],
  controllers: [VaccinationSiteController],
  providers: [VaccinationSiteService, JwtStrategy],
})
export class VaccinationSiteModule {}
