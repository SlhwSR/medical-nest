import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, MoreThan, Repository } from 'typeorm';
import { PlanEntity } from './entity/plan.entity';

@Injectable()
export class PlanlistService {
constructor(
    @InjectRepository(PlanEntity) private readonly  PlanRespority:Repository<PlanEntity>
){     
}
async Create(body){
   await  this.PlanRespority.create(body)
     delete body.id 
    return  await this.PlanRespority.save(body)
}
async DeleteOne(id){
    return await this.PlanRespority.delete({id})
}
async findOne(id){
    return await this.PlanRespority.findOne(id)
}
async updateOne(id,body){
    const target=await this.PlanRespority.findOne(id)
    return await this.PlanRespority.save({
        ...target,
        ...body,
    })
}
async findAll(){
   const res= await this.PlanRespority.findAndCount()
   console.log(res);
   
}
// async findExample(){
//     return await this.PlanRespority.find({
//         where:[{
//           id:MoreThan(3),
//           when:MoreThan(new Date('2022-07-21T:14:00:00'))  
//         },{
//             description:Like('%someDay%')
//         }],
//         take:3,
//         order: {
//            id:'DESC'
//          }
//     })
// }

}
