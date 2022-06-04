import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import fastifyHelmet from 'fastify-helmet';
import { RequestMethod, ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from './common/exception-filters/all-exception.filter';

const PORT = 3000;
const PREFIX = '/v1';
const origin = [];

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      logger: ['error', 'warn'],
      cors: {
        origin,
        credentials: true,
      },
    },
  );

  // set Fastify-Helmet
  await app.register(fastifyHelmet, {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [`'self'`],
        styleSrc: [
          `'self'`,
          `'unsafe-inline'`,
          'cdn.jsdelivr.net',
          'fonts.googleapis.com',
        ],
        fontSrc: [`'self'`, 'fonts.gstatic.com'],
        imgSrc: [`'self'`, 'data:', 'cdn.jsdelivr.net'],
        scriptSrc: [`'self'`, `https: 'unsafe-inline'`, `cdn.jsdelivr.net`],
      },
    },
  });

  // Global Validation Pipe
  app.useGlobalPipes(new ValidationPipe());

  // Prefix to API URL
  app.setGlobalPrefix(PREFIX, {
    exclude: [{ path: '/', method: RequestMethod.GET }],
  });

  // Global All Exception Filter
  const httpAdapterHost = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapterHost));

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Oh Good Project Server API')
    .setDescription('Oh Good Project API 명세서')
    .setVersion('Dev_1.0')
    .build();
  const swagger = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, swagger);

  await app.listen(PORT);
}
bootstrap();
