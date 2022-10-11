import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Auth {
@PrimaryGeneratedColumn("uuid")
id:number
@Column()
name:string
}
