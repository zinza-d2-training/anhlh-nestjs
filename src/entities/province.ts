import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
class Province {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;
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
