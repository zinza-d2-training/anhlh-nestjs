import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeormModule } from './typeorm/typeorm.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ConsoleModule } from '@squareboat/nest-console';
import { ImportUnitAdministrativeModule } from './import_unit_administrative/import_unit_administrative.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { LocationModule } from './location/location.module';
import { VaccinationSiteModule } from './vaccination_sites/vaccination_site.module';
import { AdminModule } from './admin/admin.module';
import { DocumentModule } from './document/document.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeormModule.forRoot(),
    UserModule,
    AuthModule,
    ConsoleModule,
    ImportUnitAdministrativeModule,
    ForgotPasswordModule,
    LocationModule,
    VaccinationSiteModule,
    AdminModule,
    DocumentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
