import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeormModule } from './typeorm/typeorm.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ConsoleModule } from '@squareboat/nest-console';
import { ImportUnitAdministrativeModule } from './import_unit_administrative/import_unit_administrative.module';
import { UserRegisterModule } from './user_registration/user-register.module';

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
    UserRegisterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
