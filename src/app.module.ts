import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { ConsoleModule } from '@squareboat/nest-console';
import { ExportUnitAdministrativeModule } from './export_unit_administrative/export_unit_administrative.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'projectnestjs',
      migrations: [
        '/*.ts',
        'src/typeorm/migrations/*.ts',
        'dist/typeorm/migrations/*{.ts,.js}',
      ],
      entities: [`${__dirname}/../**/*.{js,ts}`],
      synchronize: true,
    }),
    UserModule,
    ExportUnitAdministrativeModule,
    ConsoleModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
