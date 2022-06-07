"use strict";
var config = {
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
    entities: ["".concat(__dirname, "/../**/*.{js,ts}")],
    synchronize: true,
};
module.exports = config;
//# sourceMappingURL=ormconfig.js.map