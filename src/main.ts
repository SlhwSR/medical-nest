import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,
  //   {
  //   logger:['error','warn','debug']
  // }
  );
  app.enableCors()
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3001);
}
bootstrap();
