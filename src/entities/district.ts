import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
class District {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public province_id: number;

  @Column()
  public created_at: Date;
  @Column()
  public updated_at: Date;
}

export default District;
