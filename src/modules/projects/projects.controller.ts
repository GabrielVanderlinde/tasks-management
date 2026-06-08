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
import { ProjectsListItemDTO, ProjectsRequestDto } from './projects.dto'
import { ProjectsService } from './projects.service'
import { ApiResponse } from '@nestjs/swagger'

@Controller({
  version: '1',
  path: 'projects',
})
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  @ApiResponse({ type: [ProjectsListItemDTO] })
  findAll() {
    return this.projectsService.findAll()
  }

  @Get(':id')
  @ApiResponse({ type: ProjectsListItemDTO })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.projectsService.findById(id)
  }

  @Post()
  @ApiResponse({ type: ProjectsListItemDTO })
  create(@Body() data: ProjectsRequestDto) {
    return this.projectsService.create(data)
  }

  @Put(':id')
  @ApiResponse({ type: ProjectsListItemDTO })
  update(@Param('id', ParseUUIDPipe) id: string, @Body() data: ProjectsRequestDto) {
    return this.projectsService.update(id, data)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.projectsService.remove(id)
  }
}
