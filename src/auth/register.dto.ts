import { IsNotEmpty, IsEmail } from 'class-validator';

export class RegisterDto {
  @IsEmail({ message: 'Email không phừ hợp' })
  @IsNotEmpty({ message: 'Email không được để trống' })
  email: string;

  @IsNotEmpty({ message: 'Password không được để trống' })
  password: string;
}
