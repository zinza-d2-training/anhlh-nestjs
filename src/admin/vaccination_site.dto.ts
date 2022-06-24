import { PartialType } from '@nestjs/mapped-types';
<<<<<<< HEAD
import { IsNotEmpty, MaxLength, Min } from 'class-validator';

export class CreateDataVaccinationSiteDto {
=======
import { IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';

export class CreateDataVaccinationSiteDto {
  @IsString()
>>>>>>> master
  @MaxLength(45)
  @IsNotEmpty({ message: 'street_name cannot be left blank' })
  street_name: string;

  @Min(1)
  @IsNotEmpty({ message: 'total_table cannot be left blank' })
  total_table: number;

<<<<<<< HEAD
=======
  @IsString()
>>>>>>> master
  @MaxLength(45)
  @IsNotEmpty({ message: 'manager cannot be left blank' })
  manager: string;

<<<<<<< HEAD
=======
  @IsString()
>>>>>>> master
  @MaxLength(45)
  @IsNotEmpty({ message: 'name cannot be left blank' })
  name: string;

<<<<<<< HEAD
=======
  @IsString()
>>>>>>> master
  @Min(1)
  @IsNotEmpty({ message: 'ward_id cannot be left blank' })
  ward_id: number;
}

export class UpdateDataVaccinationSiteDto extends PartialType(
  CreateDataVaccinationSiteDto,
) {}
