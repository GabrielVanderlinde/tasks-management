import { ValidationPipe, VersioningType } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  //Versioning
  app.enableVersioning({
    type: VersioningType.URI,
  })

  //Swagger
  const config = new DocumentBuilder()
    .setTitle('Curso NestJS - Tasks API')
    .setDescription('API de tarefas desenvolvida durante o curso de NestJS')
    .setVersion('1.0')
    .build()

  const documentFactory = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, documentFactory)

  // Validation
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(process.env.PORT ?? 3005)
}
bootstrap()
