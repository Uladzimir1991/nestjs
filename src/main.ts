import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initSwagger } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  initSwagger(app);
  await app.listen(3000);
}
bootstrap();
