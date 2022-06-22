import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('documents')
class Document {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public link: string;

  @Column({
    type: 'timestamp',
  })
  public created_at: Date;
  @Column({
    type: 'timestamp',
  })
  public updated_at: Date;
}

export default Document;
