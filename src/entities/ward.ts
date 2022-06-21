import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
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

  @OneToOne(() => User)
  user: User;

  @ManyToOne(() => District, (district) => district.wards)
  @JoinColumn({ name: 'district_id' })
  districts: District;

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
