import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';

export class RegisterInjectionDto {
  @Min(1)
  @IsNotEmpty({ message: 'priority group cannot be left blank' })
  priority_group_id: number;

  @Min(1)
  @IsNotEmpty({ message: 'health insurance number cannot be left blank' })
  health_insurance_number: number;

  @Type(() => Date)
  @IsDate({ message: 'birthday must be of type mm/dd/yyyy' })
  @IsNotEmpty({ message: 'expected date cannot be left blank' })
  expected_date: Date;

  @IsString()
  @MaxLength(45)
  @IsNotEmpty({ message: 'occupation cannot be left blank' })
  occupation: string;

  @IsString()
  @MaxLength(45)
  @IsNotEmpty({ message: 'work place cannot be left blank' })
  work_place: string;

  @IsString()
  @MaxLength(45)
  @IsNotEmpty({ message: 'address cannot be left blank' })
  address: string;

  @IsString()
  @IsNotEmpty({ message: 'session cannot be left blank' })
  session_id: string;

  @IsString()
  @MaxLength(45)
  @IsNotEmpty({ message: 'status cannot be left blank' })
  status: string;
}
