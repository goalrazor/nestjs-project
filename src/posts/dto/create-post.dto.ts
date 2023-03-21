import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ example: 'Тайтл', description: 'Заголовок статьи' })
  @IsString({ message: 'Должно быть строкой' })
  readonly title: string;

  @ApiProperty({ example: 'Loren Ipsum.....', description: 'Контент статьи' })
  @IsString({ message: 'Должно быть строкой' })
  readonly content: string;

  @ApiProperty({ example: 123, description: 'id пользователя' })
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly userId: number;
}
