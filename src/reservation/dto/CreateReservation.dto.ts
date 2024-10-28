import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateReservationDTO {
  @IsString({ message: 'O campo name deve ser uma string! Ex.: Diego' })
  @IsNotEmpty({ message: 'O campo name é obrigatório!' })
  name: string;
  @IsNumber(undefined, {
    message: 'O campo people_qty deve ser um número inteiro!  Ex.: 10',
  })
  @IsNotEmpty({ message: 'O campo people_qty é obrigatório!' })
  people_qty: number;
  @IsString({
    message: 'O campo date deve ser uma String! Ex.: 22/11/2024',
  })
  @IsNotEmpty({ message: 'O campo date é obrigatório!' })
  date: string;
  @IsString({
    message: 'O campo time deve ser uma string! Ex.: 11:0AM ou 18:00PM',
  })
  @IsNotEmpty({ message: 'O campo time é obrigatório!' })
  time: string;
}
