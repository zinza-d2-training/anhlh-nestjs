import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { CheckLength } from 'src/auth/customer-length.validation';
import { AllowNotSpace } from 'src/auth/customer-space.validation';

export class UpdateUserDto {
  @MaxLength(45)
  @IsEmail({ message: 'Email does not match' })
  @IsNotEmpty({ message: 'Email cannot be left blank' })
  email: string;

  @MinLength(8)
  @MaxLength(255)
  @AllowNotSpace({ message: 'Password not allow space' })
  @IsNotEmpty({ message: 'Password cannot be left blank' })
  password: string;

  @IsString()
  @MaxLength(45)
  @IsNotEmpty({ message: 'FullName cannot be left blank' })
  full_name: string;

  @Min(1)
  @IsNotEmpty({ message: 'Ward_id cannot be left blank' })
  ward_id: number;

  @IsString()
  @IsNotEmpty({ message: 'Gender cannot be left blank' })
  gender: string;

  @Type(() => Date)
  @IsDate({ message: 'birthday must be of type mm/dd/yyyy' })
  @IsNotEmpty({ message: 'Birthday cannot be left blank' })
  birthday: Date;

  @CheckLength({ message: 'Identity Card Number equal 9 or equal 12' })
  @IsNotEmpty({ message: 'Identity Card Number cannot be left blank' })
  identity_card_number: number;
}
