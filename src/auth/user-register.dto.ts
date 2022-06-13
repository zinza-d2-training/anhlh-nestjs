import { IsNotEmpty, IsEmail, MinLength, Length } from 'class-validator';
import { NotSpace } from './customer-space.validation';
import { CheckLength } from './customer-length.validation';
export class UserRegisterDto {
  @IsEmail({ message: 'Email does not match' })
  @IsNotEmpty({ message: 'Email cannot be left blank' })
  email: string;

  @MinLength(8)
  @NotSpace({ message: 'Password not allow space' })
  @IsNotEmpty({ message: 'Password cannot be left blank' })
  password: string;

  @IsNotEmpty({ message: 'Fullname cannot be left blank' })
  fullname: string;

  @IsNotEmpty({ message: 'Ward cannot be left blank' })
  ward: string;

  @IsNotEmpty({ message: 'District cannot be left blank' })
  district: string;

  @IsNotEmpty({ message: 'Province cannot be left blank' })
  province: string;

  @IsNotEmpty({ message: 'Gender cannot be left blank' })
  gender: string;

  @CheckLength({ message: 'Identity Card Number equal 9 or equal 12' })
  @IsNotEmpty({ message: 'Identity Card Number cannot be left blank' })
  identity_card_number: number;
}
