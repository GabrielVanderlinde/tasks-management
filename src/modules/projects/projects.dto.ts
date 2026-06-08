import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class ProjectsRequestDto {
  @ApiProperty({ description: 'Project name', example: 'Project 1' })
  @IsString()
  @IsNotEmpty()
  name!: string

  @ApiProperty({
    description: 'Project description',
    example: 'This is a project',
    required: false,
  })
  @IsString()
  description!: string
}

export class ProjectsListItemDTO {
  @ApiProperty({ description: 'Project id', example: 'uuid' })
  id!: string
  @ApiProperty({ description: 'Project name', example: 'Project 1' })
  name!: string
  @ApiProperty({
    description: 'Project description',
    example: 'This is a project',
    required: false,
  })
  description!: string
  @ApiProperty({ description: 'Project created at', example: '2023-01-01T00:00:00.000Z' })
  createdAt!: string
  @ApiProperty({ description: 'Project updated at', example: '2023-01-01T00:00:00.000Z' })
  updatedAt!: string
}
