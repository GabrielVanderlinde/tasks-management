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
