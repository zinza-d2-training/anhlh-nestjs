import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vaccine_registrations')
class VaccineRegistration {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  priority_group_id: number;

  @Column()
  public user_id: number;

  @Column()
  public health_insurance_number: number;

  @Column()
  expected_date: Date;

  @Column()
  occupation: string;

  @Column()
  work_place: string;

  @Column()
  address: string;

  @Column()
  session_id: string;

  @Column()
  status: string;

  @Column({
    type: 'timestamp',
  })
  public created_at: Date;

  @Column({
    type: 'timestamp',
  })
  public updated_at: Date;
}

export default VaccineRegistration;
