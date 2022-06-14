import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import District from './district';
import User from './user';

@Entity('wards')
class Ward {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public district_id: number;

  @ManyToOne(() => District, (district) => district.ward)
  @JoinColumn({ name: 'district_id' })
  district: District;

  @OneToOne(() => User)
  user: User;

  @Column({
    type: 'timestamp',
  })
  public created_at: Date;
  @Column({
    type: 'timestamp',
  })
  public updated_at: Date;
}

export default Ward;
