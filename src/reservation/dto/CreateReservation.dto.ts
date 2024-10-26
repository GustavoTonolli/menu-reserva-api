import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateReservationDTO {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsNumber()
    @IsNotEmpty()
    people_qty: number;
    @IsDate()
    @IsNotEmpty()
    date: Date;
    @IsString()
    @IsNotEmpty()
    time: string;
}