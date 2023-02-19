import { type } from "os";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 50 })
  name: string;

  @Column({ type: "longtext" })
  image: string;

  @Column({ type: "int" })
  price: number;

  @Column({ type: "varchar", length: 50 })
  author: string;
}
