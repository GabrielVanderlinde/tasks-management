import { Injectable } from '@nestjs/common'
import { ProjectsRequestDto } from './projects.dto'

@Injectable()
export class ProjectsService {
  findAll() {
    return ['teste 1', 'teste 2', 'teste 3']
  }

  findById(id: string) {
    return 'teste 1'
  }

  create(data: ProjectsRequestDto) {
    return 'create teste 1'
  }

  update(id: string, data: ProjectsRequestDto) {
    return 'update teste 1'
  }

  remove(id: string) {
    return 'remove teste 1'
  }
}
