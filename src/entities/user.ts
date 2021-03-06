import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Ward from './ward';

@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public email: string;

  @Column()
  public full_name: string;

  @Column()
  public password: string;

  @Column()
  public ward_id: number;

  @Column({ default: 'user' })
  public role: string;

  @Column()
  public gender: string;

  @Column({ unique: true })
  identity_card_number: number;

  @Column({})
  birthday: Date;

  @Column({})
  reset_link: string;

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

export default User;
