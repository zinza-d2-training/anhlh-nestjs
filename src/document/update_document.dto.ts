import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';

export class CreateDocumentDto {
  @IsNotEmpty({ message: 'name cannot be left blank' })
  name: string;

  @IsNotEmpty({ message: 'link cannot be left blank' })
  link: string;
}

export class UpdateDocumentDto extends PartialType(CreateDocumentDto) {}
