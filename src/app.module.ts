import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProjectsModule } from './modules/projects/projects.module'

@Module({
  imports: [ProjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
