import { IsNotEmpty, IsEmail } from 'class-validator';

export class UpdateDocumentDto {
  @IsNotEmpty({ message: 'name cannot be left blank' })
  name: string;

  @IsNotEmpty({ message: 'link cannot be left blank' })
  link: string;
}
