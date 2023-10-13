import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Generated,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Placeholder {
  @Generated('increment')
  @PrimaryColumn({ type: 'int', default: 1 })
  id: number;

  @Column()
  userId: string;

  @Column({ nullable: true, length: 128 })
  title: string;

  @Column({ nullable: true, length: 256 })
  body: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
