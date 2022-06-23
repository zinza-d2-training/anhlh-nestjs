import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, MaxLength, Min } from 'class-validator';

export class CreateDataVaccinationSiteDto {
  @MaxLength(45)
  @IsNotEmpty({ message: 'street_name cannot be left blank' })
  street_name: string;

  @Min(1)
  @IsNotEmpty({ message: 'total_table cannot be left blank' })
  total_table: number;

  @MaxLength(45)
  @IsNotEmpty({ message: 'manager cannot be left blank' })
  manager: string;

  @MaxLength(45)
  @IsNotEmpty({ message: 'name cannot be left blank' })
  name: string;

  @Min(1)
  @IsNotEmpty({ message: 'ward_id cannot be left blank' })
  ward_id: number;
}

export class UpdateDataVaccinationSiteDto extends PartialType(
  CreateDataVaccinationSiteDto,
) {}
