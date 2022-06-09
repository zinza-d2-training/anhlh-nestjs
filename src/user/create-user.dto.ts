import { IsNotEmpty, IsEmail, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  id: number;

  @IsEmail({ message: 'Email không phừ hợp' })
  @IsNotEmpty({ message: 'Email không được để trống' })
  email: string;

  @IsNotEmpty({ message: 'Password không được để trống' })
  password: string;

  created_at: Date;
  updated_at: Date;
}
