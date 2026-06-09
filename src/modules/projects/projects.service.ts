import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma.service'
import { ProjectsRequestDto } from './projects.dto'

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.project.findMany()
  }

  findById(id: string) {
    return this.prisma.project.findFirst({
      where: {
        id,
      },
    })
  }

  create(data: ProjectsRequestDto) {
    return this.prisma.project.create({
      data,
    })
  }

  update(id: string, data: ProjectsRequestDto) {
    return this.prisma.project.update({
      where: {
        id,
      },
      data,
    })
  }

  remove(id: string) {
    return this.prisma.project.delete({
      where: {
        id,
      },
    })
  }
}
