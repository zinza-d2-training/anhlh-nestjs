import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
class District {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public provinces_id: number;

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
