import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
class Ward {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public district_id: number;

  @Column()
  public created_at: Date;
  @Column()
  public updated_at: Date;
}

export default Ward;
