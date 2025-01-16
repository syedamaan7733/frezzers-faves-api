import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './logging/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for all URLs
  // app.enableCors({
  //   origin: '*', // Allows all origins
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   credentials: true, // Note: This is ineffective with 'origin: *'
  // });

  app.enableCors({
    origin: [
      'http://localhost:5173',
      'http://localhost:5174',
      'http://192.168.162.84:5173/',
      'http://172.18.128.1:5173/',
      'https://www.freezerfavess.com',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  });

  // Enable validation
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );

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
  // console.log(`CORS is enabled for all origins.`);
}

bootstrap();
