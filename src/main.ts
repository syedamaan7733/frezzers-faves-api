import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './logging/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for all URLs
  app.enableCors({
    origin: '*', // Allows all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Note: This is ineffective with 'origin: *'
  });

  // Enable validation
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));

  // Cookie Parser middleware
  app.use(cookieParser());

  // Logging Interceptor
  app.useGlobalInterceptors(new LoggingInterceptor());

  // Enable application shutdown hooks
  app.enableShutdownHooks();

  // Start server
  const port = process.env.PORT || 3001;
  await app.listen(port);

  console.log(`Application is running on: http://localhost:${port}`);
  console.log(`CORS is enabled for all origins.`);
}

bootstrap();
