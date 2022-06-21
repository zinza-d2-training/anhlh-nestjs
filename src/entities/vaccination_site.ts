import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Ward from './ward';

@Entity('vaccination_sites')
class VaccinationSite {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public total_table: number;

  @Column()
  public manager: string;

  @Column()
  public street_name: string;

  @Column()
  public ward_id: number;

  @Column()
  public name: string;

  @OneToOne(() => Ward)
  ward: Ward;

  @Column({
    type: 'timestamp',
  })
  public created_at: Date;

  @Column({
    type: 'timestamp',
  })
  public updated_at: Date;
}

export default VaccinationSite;
