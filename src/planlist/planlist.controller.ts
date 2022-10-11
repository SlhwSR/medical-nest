import { Body, Controller, Get, Inject, Logger, Param, ParseIntPipe, Post, Res, ValidationPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlanListDto } from './dto/planlist.dto';
import { PlanEntity } from './entity/plan.entity';
import { PlanlistService } from './planlist.service';
@Controller('planlist')
export class PlanlistController {
  private readonly logger=new Logger(PlanlistController.name)
      constructor(
          @Inject(PlanlistService) private readonly PlanlistService:PlanlistService   
        ){
      }
    @Get('/all')
    async getall(@Res() res){
       const result=  await this.PlanlistService.findAll()
         return result   
       }
    @Post('addone')
    async postone(@Body() body:PlanListDto){
       await this.PlanlistService.Create(body)
       return {message:"添加成功",code:200}
    }
    @Get("/searchOne/:id") 
     async  getOne(@Param('id',new ParseIntPipe()) id:number,@Res() res){
      const result= await this.PlanlistService.findOne(id)
      res.send(result)
    }
    //Pipe Demo
    @Post('/sure')  
    async DealSubmit(@Body() body){
       
    }
}
