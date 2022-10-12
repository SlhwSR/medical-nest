import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupService {
  constructor(@InjectRepository(Group) private readonly groupEntity:Repository<Group>){}
  create(createGroupDto: CreateGroupDto) {
    return this.groupEntity.save(createGroupDto) ;
  }

  findAll() {
    return this.groupEntity.find();
  }

  findOne(id: number) {
    return this.groupEntity.findOne(id);
  }
 async  update(id: number, updateGroupDto: UpdateGroupDto) {
    const result= await this.groupEntity.update(id,updateGroupDto)
    return result
  }

  async remove(id: number) {
    const result=await this.groupEntity.delete(id)
    return {
      message:"删除成功！",
      status:200
    };
  }
}
