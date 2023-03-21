import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class BanUserDto {
  @ApiProperty({ example: 123, description: 'id пользователя' })
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly userId: number;
  @ApiProperty({ example: 'Хулиганил', description: 'Причина бана' })
  @IsString({ message: 'Должно быть строкой' })
  readonly banReason: string;
}
