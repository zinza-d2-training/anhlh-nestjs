"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var typeorm_1 = require("@nestjs/typeorm");
var user_controller_1 = require("./user/user.controller");
var user_service_1 = require("./user/user.service");
var user_module_1 = require("./user/user.module");
var config_1 = require("@nestjs/config");
var nest_console_1 = require("@squareboat/nest-console");
var export_unit_administrative_module_1 = require("./export_unit_administrative/export_unit_administrative.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot({
                    isGlobal: true,
                }),
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'mysql',
                    host: 'localhost',
                    port: 3306,
                    username: 'root',
                    password: '',
                    database: 'projectnestjs',
                    migrations: [
                        '/src/typeorm/migrations/*.ts',
                        'dist/typeorm/migrations/*{.ts,.js}',
                    ],
                    entities: ["".concat(__dirname, "/../**/*.{js,ts}")],
                    synchronize: true,
                }),
                user_module_1.UserModule,
                export_unit_administrative_module_1.ExportUnitAdministrativeModule,
                nest_console_1.ConsoleModule,
            ],
            controllers: [app_controller_1.AppController, user_controller_1.UserController],
            providers: [app_service_1.AppService, user_service_1.UserService],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map