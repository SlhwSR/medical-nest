import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from 'nestjs-config';
import  * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserinfoController } from './userinfo/userinfo.controller';
import { UserinfoModule } from './userinfo/userinfo.module';
import { AuthService } from './logical/auth/auth.service';
import { AuthModule } from './logical/auth/auth.module';
import { GroupModule } from './group/group.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql", //数据库类型
      username: "root", //账号
      password: "root", //密码
      host: "localhost", //host
      port: 3307, //
      database: "nest_respority", //库名
      entities: [__dirname + '/**/*.entity{.ts,.js}'], //实体文件
      //synchronize:true, //synchronize字段代表是否自动将实体类同步到数据库
      retryDelay:500, //重试连接数据库间隔
      retryAttempts:10,//重试连接数据库的次数
      autoLoadEntities:true, //如果为true,将自动加载实体 forFeature()方法注册的每个实体都将自动添加到配置对象的实体数组中
    }),
  UserinfoModule,
  AuthModule,
  GroupModule],
  controllers: [AppController, UserinfoController],
  providers: [AppService, AuthService],
})
export class AppModule {}
