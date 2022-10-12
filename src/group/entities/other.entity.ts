import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Machine {
@PrimaryGeneratedColumn("uuid")
id:string
@Column()
batchNo:string
@Column()
name:string
@Column()
planId:string
}
