"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserRegisterDto = void 0;
var class_validator_1 = require("class-validator");
var customer_space_validation_1 = require("./customer-space.validation");
var customer_length_validation_1 = require("./customer-length.validation");
var UserRegisterDto = /** @class */ (function () {
    function UserRegisterDto() {
    }
    __decorate([
        class_validator_1.MaxLength(45),
        class_validator_1.IsEmail({ message: 'Email does not match' }),
        class_validator_1.IsNotEmpty({ message: 'Email cannot be left blank' })
    ], UserRegisterDto.prototype, "email");
    __decorate([
        class_validator_1.MinLength(8),
        class_validator_1.MaxLength(45),
        customer_space_validation_1.AllowNotSpace({ message: 'Password not allow space' }),
        class_validator_1.IsNotEmpty({ message: 'Password cannot be left blank' })
    ], UserRegisterDto.prototype, "password");
    __decorate([
        class_validator_1.MaxLength(45),
        class_validator_1.IsNotEmpty({ message: 'Fullname cannot be left blank' })
    ], UserRegisterDto.prototype, "fullname");
    __decorate([
        class_validator_1.Min(1),
        class_validator_1.IsNotEmpty({ message: 'Ward_id cannot be left blank' })
    ], UserRegisterDto.prototype, "ward_id");
    __decorate([
        class_validator_1.IsNotEmpty({ message: 'Gender cannot be left blank' })
    ], UserRegisterDto.prototype, "gender");
    __decorate([
        class_validator_1.IsNotEmpty({ message: 'Birthday cannot be left blank' })
    ], UserRegisterDto.prototype, "birthday");
    __decorate([
        customer_length_validation_1.CheckLength({ message: 'Identity Card Number equal 9 or equal 12' }),
        class_validator_1.IsNotEmpty({ message: 'Identity Card Number cannot be left blank' })
    ], UserRegisterDto.prototype, "identity_card_number");
    return UserRegisterDto;
}());
exports.UserRegisterDto = UserRegisterDto;
