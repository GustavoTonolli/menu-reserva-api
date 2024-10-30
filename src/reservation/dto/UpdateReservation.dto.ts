import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateReservationDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsNumber()
  @IsNotEmpty()
  people_qty: string;
  @IsString()
  @IsNotEmpty()
  date: string;
  @IsString()
  @IsNotEmpty()
  time: string;
}
