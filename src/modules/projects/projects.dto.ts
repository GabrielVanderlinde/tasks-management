import { ApiProperty } from '@nestjs/swagger'

export class ProjectsRequestDto {
  @ApiProperty({ description: 'Project name', example: 'Project 1' })
  name!: string

  @ApiProperty({
    description: 'Project description',
    example: 'This is a project',
    required: false,
  })
  description!: string
}
