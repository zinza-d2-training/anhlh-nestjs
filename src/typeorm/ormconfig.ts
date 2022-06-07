import { TypeOrmModuleOptions } from '@nestjs/typeorm';
const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'projectnestjs',
  migrations: [
    'src/typeorm/migrations/*.ts',
    'dist/typeorm/migrations/*{.ts,.js}',
  ],
  entities: [`${__dirname}/../**/*.{js,ts}`],
  synchronize: true,
};

export = config;
