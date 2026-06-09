import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
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
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    const project = await this.projectsService.findById(id)

    if (!project) {
      throw new HttpException('Project not found', HttpStatus.NOT_FOUND)
    }

    return project
  }

  @Post()
  @ApiResponse({ type: ProjectsListItemDTO })
  create(@Body() data: ProjectsRequestDto) {
    return this.projectsService.create(data)
  }

  @Put(':id')
  @ApiResponse({ type: ProjectsListItemDTO })
  async update(@Param('id', ParseUUIDPipe) id: string, @Body() data: ProjectsRequestDto) {
    const project = await this.projectsService.findById(id)

    if (!project) {
      throw new HttpException('Project not found', HttpStatus.NOT_FOUND)
    }

    return this.projectsService.update(id, data)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    const project = await this.projectsService.findById(id)

    if (!project) {
      throw new HttpException('Project not found', HttpStatus.NOT_FOUND)
    }

    return this.projectsService.remove(id)
  }
}
