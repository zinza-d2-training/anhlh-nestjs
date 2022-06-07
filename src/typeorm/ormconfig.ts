import { TypeOrmModuleOptions } from '@nestjs/typeorm';
const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'projectnestjs',
  migrationsRun: true,
  logging: Boolean(process.env.MYSQL_LOGGING),
  logger: 'advanced-console',
  autoLoadEntities: true,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  subscribers: [__dirname + '/subscribers/**/*{.ts,.js}'],
  entities: [`${__dirname}/../**/*.{js,ts}`],
  synchronize: true,
};

export = config;
