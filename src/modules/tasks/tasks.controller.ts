import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common'
import { TasksService } from './tasks.service'
import { TaskDto } from './tasks.dto'

@Controller({
  version: '1',
  path: 'projects/:projectId/tasks',
})
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAllByProject(@Param('projectId', ParseUUIDPipe) projectId: string) {
    return this.tasksService.findAllProject(projectId)
  }

  @Post()
  create(@Param('projectId', ParseUUIDPipe) projectId: string, @Body() data: TaskDto) {
    return this.tasksService.create(projectId, data)
  }

  @Get(':taskId')
  findOne(
    @Param('projectId', ParseUUIDPipe) projectId: string,
    @Param('taskId', ParseUUIDPipe) taskId: string,
  ) {
    return this.tasksService.findById(projectId, taskId)
  }

  @Put(':taskId')
  update(
    @Param('projectId', ParseUUIDPipe) projectId: string,
    @Param('taskId', ParseUUIDPipe) taskId: string,
    @Body() data: TaskDto,
  ) {
    return this.tasksService.update(projectId, taskId, data)
  }

  @Delete(':taskId')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(
    @Param('projectId', ParseUUIDPipe) projectId: string,
    @Param('taskId', ParseUUIDPipe) taskId: string,
  ) {
    return this.tasksService.delete(projectId, taskId)
  }
}
