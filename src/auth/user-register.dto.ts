import { IsNotEmpty, IsEmail } from 'class-validator';

export class UserRegisterDto {
  @IsEmail({ message: 'Email does not match' })
  @IsNotEmpty({ message: 'Email cannot be left blank' })
  email: string;

  @IsNotEmpty({ message: 'Password cannot be left blank' })
  password: string;
}
