import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('wards')
class Ward {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public districts_id: number;

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
