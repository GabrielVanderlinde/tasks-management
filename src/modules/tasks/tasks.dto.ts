import { ApiProperty } from '@nestjs/swagger'
import { TaskPriority, TaskStatus } from '@prisma/client'
import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class TaskDto {
  @ApiProperty({ description: 'Title of the task' })

  @IsString()
  @IsNotEmpty()
  title!: string

  @ApiProperty({ description: 'Description of the task', required: false })
  @IsString()
  @IsOptional()
  description!: string

  @ApiProperty({
    description: 'Status of the task',
    enum: TaskStatus,
    default: TaskStatus.TODO,
    required: false,
  })
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus = TaskStatus.TODO

  @ApiProperty({
    description: 'Priority of the task',
    enum: TaskPriority,
    default: TaskPriority.MEDIUM,
    required: false,
  })
  @IsEnum(TaskPriority)
  @IsOptional()
  priority?: TaskPriority = TaskPriority.MEDIUM

  @ApiProperty({ description: 'Due date of the task', required: false })
  @IsDateString()
  @IsOptional()
  dueDate?: string
}
