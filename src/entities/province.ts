import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  Tree,
} from 'typeorm';
import District from './district';

@Entity('provinces')
class Province {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @OneToMany(() => District, (district) => district.province)
  district: District[];

  @Column({
    type: 'timestamp',
  })
  public created_at: Date;

  @Column({
    type: 'timestamp',
  })
  public updated_at: Date;
}

export default Province;
