import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export function initSwagger(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('Placeholder')
    .setDescription('Placeholder API description')
    .setVersion('1.0')
    .addTag('placeholder')
    .addServer('/api')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    ignoreGlobalPrefix: true,
  });
  SwaggerModule.setup('api/swagger', app, document);
}
