import { IsDateString, IsString, isString, Length } from "class-validator"
export class PlanListDto{
@IsString()
@Length(4,255,{message:"this name must be more than 4 charters"})
planName:string
@IsString()
@Length(10,255,{message:"This description is to short"})
description:string
@IsString()
planExceedMan:string
@IsString()
when:Date
}