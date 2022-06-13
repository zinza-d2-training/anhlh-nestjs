import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('wards')
class Ward {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public district_id: number;
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
