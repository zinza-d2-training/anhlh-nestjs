import {
  IsNotEmpty,
  IsEmail,
  MinLength,
  MaxLength,
  IsString,
} from 'class-validator';
import { AllowNotSpace } from './customer-space.validation';

export class UserLoginDto {
  @IsString()
  @IsEmail({ message: 'Email does not match' })
  @MaxLength(45)
  @IsNotEmpty({ message: 'Email cannot be left blank' })
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(45)
  @AllowNotSpace({ message: 'Password not allow space' })
  @IsNotEmpty({ message: 'Password cannot be left blank' })
  password: string;
}
