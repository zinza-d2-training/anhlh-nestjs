import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public created_at: Date;
  @Column()
  public updated_at: Date;
}

export default User;
