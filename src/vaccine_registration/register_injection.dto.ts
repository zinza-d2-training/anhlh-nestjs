import { IsNotEmpty, MaxLength } from 'class-validator';

export class RegisterInjectionDto {
  @IsNotEmpty({ message: 'priority group cannot be left blank' })
  priority_group_id: number;

  @IsNotEmpty({ message: 'health insurance number cannot be left blank' })
  health_insurance_number: number;

  @IsNotEmpty({ message: 'expected date cannot be left blank' })
  expected_date: Date;

  @MaxLength(45)
  @IsNotEmpty({ message: 'occupation cannot be left blank' })
  occupation: string;

  @MaxLength(45)
  @IsNotEmpty({ message: 'work place cannot be left blank' })
  work_place: string;

  @MaxLength(45)
  @IsNotEmpty({ message: 'address cannot be left blank' })
  address: string;

  @IsNotEmpty({ message: 'session cannot be left blank' })
  session_id: string;

  @MaxLength(45)
  @IsNotEmpty({ message: 'status cannot be left blank' })
  status: string;

  created_at?: Date;

  updated_at?: Date;
}
