"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var ward_1 = require("./ward");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], User.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "email");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "fullname");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "password");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "ward_id");
    __decorate([
        typeorm_1.Column({ "default": 'user' })
    ], User.prototype, "role");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "gender");
    __decorate([
        typeorm_1.Column({ unique: true })
    ], User.prototype, "identity_card_number");
    __decorate([
        typeorm_1.Column({})
    ], User.prototype, "birthday");
    __decorate([
        typeorm_1.OneToOne(function () { return ward_1["default"]; })
    ], User.prototype, "ward");
    __decorate([
        typeorm_1.Column({
            type: 'timestamp'
        })
    ], User.prototype, "created_at");
    __decorate([
        typeorm_1.Column({
            type: 'timestamp'
        })
    ], User.prototype, "updated_at");
    User = __decorate([
        typeorm_1.Entity('users')
    ], User);
    return User;
}());
exports["default"] = User;
