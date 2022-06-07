import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeormModule } from './typeorm/typeorm.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { ExportUnitAdministrativeModule } from './export_unit_administrative/export_unit_administrative.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeormModule.forRoot(),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '',
    //   database: 'projectnestjs',
    //   migrations: [
    //     '/*.ts',
    //     'src/typeorm/migrations/*.ts',
    //     'dist/typeorm/migrations/*{.ts,.js}',
    //   ],
    //   entities: [`${__dirname}/../**/*.{js,ts}`],
    //   synchronize: true,
    // }),
    UserModule,
    ExportUnitAdministrativeModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
