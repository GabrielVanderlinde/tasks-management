import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ProjectsRequestDto } from './projects.dto'
import { ProjectsService } from './projects.service'

@Controller({
  version: '1',
  path: 'projects',
})
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  findAll() {
    return this.projectsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findById(id)
  }

  @Post()
  create(@Body() data: ProjectsRequestDto) {
    return this.projectsService.create(data)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: ProjectsRequestDto) {
    return this.projectsService.update(id, data)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsService.remove(id)
  }
}
