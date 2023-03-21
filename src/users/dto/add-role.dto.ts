import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'Значение роли пользователя' })
  @IsString({ message: 'Должно быть строкой' })
  readonly value: string;

  @ApiProperty({ example: 123, description: 'id пользователя' })
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly userId: number;
}
