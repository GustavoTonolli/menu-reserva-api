import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMenuDTO {
  @IsString({ message: 'O campo name deve ser uma string! Ex.: Hamburguer' })
  @IsNotEmpty({ message: 'O campo name é obrigatório!' })
  name: string;
  @IsString()
  price: string;
  @IsString({
    message: 'O campo date deve ser uma String! Ex.: 22/11/2024',
  })
  @IsNotEmpty({ message: 'O campo date é obrigatório!' })
  category: string;
  @IsString({
    message: 'O campo time deve ser uma string! Ex.: 11:0AM ou 18:00PM',
  })
  @IsNotEmpty({ message: 'O campo time é obrigatório!' })
  image: string;
  @IsNotEmpty({ message: 'O campo time é obrigatório!' })
  description: string;
}
