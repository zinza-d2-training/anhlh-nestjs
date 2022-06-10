import { IsNotEmpty, IsEmail } from 'class-validator';

export class UserRegisterDto {
  @IsEmail({ message: 'Email does not match' })
  @IsNotEmpty({ message: 'Email cannot be left blank' })
  email: string;

  @IsNotEmpty({ message: 'Password cannot be left blank' })
  password: string;

  @IsNotEmpty({ message: 'Ward cannot be left blank' })
  ward: string;

  @IsNotEmpty({ message: 'District cannot be left blank' })
  district: string;

  @IsNotEmpty({ message: 'Province cannot be left blank' })
  province: string;

  @IsNotEmpty({ message: 'Gender cannot be left blank' })
  gender: string;

  @IsNotEmpty({ message: 'Identity Card Number cannot be left blank' })
  identity_card_number: number;
}
