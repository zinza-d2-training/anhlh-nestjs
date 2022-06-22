import { IsNotEmpty } from 'class-validator';

export class RegisterInjectionDto {
  @IsNotEmpty({ message: 'priority group cannot be left blank' })
  priority_group_id: number;

  @IsNotEmpty({ message: 'user cannot be left blank' })
  user_id: number;

  @IsNotEmpty({ message: 'health insurance number cannot be left blank' })
  health_insurance_number: number;

  @IsNotEmpty({ message: 'expected date cannot be left blank' })
  expected_date: Date;

  @IsNotEmpty({ message: 'occupation cannot be left blank' })
  occupation: string;

  @IsNotEmpty({ message: 'work place cannot be left blank' })
  work_place: string;

  @IsNotEmpty({ message: 'address cannot be left blank' })
  address: string;

  @IsNotEmpty({ message: 'session cannot be left blank' })
  session_id: string;

  created_at?: Date;

  updated_at?: Date;
}
