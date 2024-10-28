import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateReservationDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsNumber()
  @IsNotEmpty()
  people_qty: number;
  @IsString()
  @IsNotEmpty()
  date: string;
  @IsString()
  @IsNotEmpty()
  time: string;
}
