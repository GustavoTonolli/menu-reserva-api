import { Body, Controller, Post } from "@nestjs/common";
import { ReservationRepository } from "./reservation.repository";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateReservationDTO } from "./dto/CreateReservation.dto";


@ApiTags('Reservations')
@Controller('/reservation')
export class ReservationController {

    constructor(private reservationRepository: ReservationRepository) {

    }
    @ApiOperation({ description: "Endpoint para criar uma nova reserva no restaurante: http://localhost:3000/reservation" })    
    @Post()
    async createReservation(@Body() reservation: CreateReservationDTO) {
        this.reservationRepository.save(reservation);
        return reservation;
    }


}