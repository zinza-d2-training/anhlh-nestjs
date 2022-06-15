"use strict";
var dotenv = require("dotenv");
dotenv.config();
var config = {
    type: 'mysql',
    host: process.env.MYSQL_HOST || 'localhost',
    port: Number(process.env.MYSQL_PORT) || 3306,
    username: process.env.MYSQL_USERNAME || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE,
    synchronize: false,
    migrationsRun: true,
    logger: 'advanced-console',
    autoLoadEntities: true,
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    entities: [__dirname + '/entities/**/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/typeorm/migrations'
    }
};
module.exports = config;
