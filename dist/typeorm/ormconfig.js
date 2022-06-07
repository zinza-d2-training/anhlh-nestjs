"use strict";
const config = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'projectnestjs',
    entities: [__dirname + '/entities/**/*{.ts,.js}'],
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    synchronize: true,
};
module.exports = config;
//# sourceMappingURL=ormconfig.js.map