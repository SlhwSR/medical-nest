import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class PlanEntity{
@PrimaryGeneratedColumn('uuid')
id:number
@Column()
planName:string
@Column()
description:string
@Column()
planExceedMan:string
@Column()
when:string
}