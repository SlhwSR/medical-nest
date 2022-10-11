import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanEntity } from './entity/plan.entity';
import { PlanlistService } from './planlist.service';

@Module({
  imports:[TypeOrmModule.forFeature([PlanEntity])],
  providers: [PlanlistService],
  exports:[PlanlistService]
})
export class PlanlistModule {}
