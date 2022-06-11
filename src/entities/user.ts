import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public email: string;

  @Column()
  public fullname: string;

  @Column()
  public password: string;

  @Column()
  public ward: string;

  @Column()
  public district: string;

  @Column()
  public province: string;

  @Column({ default: 'user' })
  public role: string;

  @Column()
  public gender: string;

  @Column()
  identity_card_number: number;

  @Column({
    type: 'timestamp',
  })
  public created_at: Date;

  @Column({
    type: 'timestamp',
  })
  public updated_at: Date;
}

export default User;
