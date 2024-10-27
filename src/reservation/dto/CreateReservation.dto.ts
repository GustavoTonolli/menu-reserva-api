import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateReservationDTO {
    @IsString({message: 'O campo name deve ser uma string! Ex.: Diego'})
    @IsNotEmpty({message: 'O campo name é obrigatório!'})
    name: string;
    @IsNumber(undefined, {message: 'O campo people_qty deve ser um número inteiro!  Ex.: 10'})
    @IsNotEmpty({message: 'O campo people_qty é obrigatório!'})
    people_qty: number;
    @IsDateString(undefined, {message: 'O campo date deve ser uma data IsoString! Ex.: 2024-10-26T22:48:21.994Z'})
    @IsNotEmpty({message: 'O campo date é obrigatório!'})
    date: Date;
    @IsString({message: 'O campo time deve ser uma string! Ex.: 11:0AM ou 18:00PM'})
    @IsNotEmpty({message: 'O campo time é obrigatório!'})
    time: string;
}