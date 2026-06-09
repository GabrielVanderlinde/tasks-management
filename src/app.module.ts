import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProjectsModule } from './modules/projects/projects.module'
import { PrismaService } from './prisma.service'

@Module({
  imports: [ProjectsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
