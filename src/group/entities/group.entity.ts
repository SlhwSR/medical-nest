import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Group {
@PrimaryGeneratedColumn("uuid")
id:string
@Column()
name:string
@CreateDateColumn({type:"timestamp"})
date:Date
}
