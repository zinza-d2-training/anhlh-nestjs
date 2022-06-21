import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
} from 'typeorm';
import Province from './province';
import Ward from './ward';

@Entity('districts')
// @Tree('nested-set')
class District {
  @PrimaryGeneratedColumn()
  public id: number;

  // @TreeChildren()
  // children: District[];

  @Column()
  public name: string;
  @Column()
  public province_id: number;

  @ManyToOne(() => Province, (province) => province.district)
  @JoinColumn({ name: 'province_id' })
  province: Province;

  @OneToMany(() => Ward, (ward) => ward.districts)
  wards: Ward[];
  @Column({
    type: 'timestamp',
  })
  public created_at: Date;
  @Column({
    type: 'timestamp',
  })
  public updated_at: Date;
}

export default District;
