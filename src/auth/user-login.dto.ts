import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class UserLoginDto {
  @IsEmail({ message: 'Email does not match' })
  @IsNotEmpty({ message: 'Email cannot be left blank' })
  email: string;
  @MinLength(8)
  @IsNotEmpty({ message: 'Password cannot be left blank' })
  password: string;
}
