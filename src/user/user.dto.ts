import {
  IsNotEmpty,
  IsEmail,
  IsString,
  IsOptional,
  IsNumber,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateUserDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsEmail({ message: 'Email không phừ hợp' })
  @IsNotEmpty({ message: 'Email không được để trống' })
  email: string;

  @IsNotEmpty({ message: 'Password không được để trống' })
  password: string;
}
