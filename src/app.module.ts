import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeormModule } from './typeorm/typeorm.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ConsoleModule } from '@squareboat/nest-console';
import { ExportUnitAdministrativeModule } from './export_unit_administrative/export_unit_administrative.module';
import { AuthController } from './auth/auth.controller';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeormModule.forRoot(),
    UserModule,
    AuthModule,
    ConsoleModule,
    ExportUnitAdministrativeModule,
  ],
  controllers: [AppController, UserController, AuthController],
  providers: [AppService, UserService, AuthController],
})
export class AppModule {}
