import { Module } from '@nestjs/common';
import { UserinfoService } from './userinfo.service';

@Module({
  providers: [UserinfoService]
})
export class UserinfoModule {}
