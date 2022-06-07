"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var user_controller_1 = require("./user/user.controller");
var user_service_1 = require("./user/user.service");
var user_module_1 = require("./user/user.module");
var config_1 = require("@nestjs/config");
var typeorm_module_1 = require("./typeorm/typeorm.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                config_1.ConfigModule.forRoot({
                    isGlobal: true
                }),
                user_module_1.UserModule,
            ],
            imports: [config_1.ConfigModule.forRoot(), typeorm_module_1.TypeormModule.forRoot()],
            controllers: [app_controller_1.AppController, user_controller_1.UserController],
            providers: [app_service_1.AppService, user_service_1.UserService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
