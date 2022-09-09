import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'user@mail.ru', description: 'Почта'})
    readonly email: string;
    @ApiProperty({example: '1234567dfgr№', description: 'Пароль пользователя'})
    readonly password: string;
}
