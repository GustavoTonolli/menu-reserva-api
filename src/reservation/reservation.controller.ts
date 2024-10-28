import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ReservationRepository } from './reservation.repository';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateReservationDTO } from './dto/CreateReservation.dto';
import { ReservationService } from './reservation.service';
import { ReservationEntity } from './reservation.entity';
import { ListReservationDTO } from './dto/ListReservation.dto';
import { UpdateReservationDTO } from './dto/UpdateReservation.dto';

@ApiTags('Reservations')
@Controller('/reservation')
export class ReservationController {
  constructor(
    private reservationRepository: ReservationRepository,
    private reservationService: ReservationService,
  ) {}
  @ApiOperation({
    description: 'Endpoint para criar uma nova reserva no restaurante',
  })
  @Post()
  async createReservation(@Body() reservation: CreateReservationDTO) {
    const reservationEntity = new ReservationEntity();
    reservationEntity.name = reservation.name;
    reservationEntity.people_qty = reservation.people_qty;
    reservationEntity.date = reservation.date;
    reservationEntity.time = reservation.time;
    this.reservationService.createReservation(reservationEntity);
    return {
      reservation: new ListReservationDTO(
        reservationEntity.id,
        reservationEntity.name,
        reservationEntity.people_qty,
        reservationEntity.date,
        reservationEntity.time,
      ),
      message: 'Reserva criada com sucesso!',
    };
  }
  @ApiOperation({
    description: 'Endpoint para listar todas as reservas feitas no restaurante',
  })
  @Get()
  async listReservation() {
    const reservations = await this.reservationService.listReservations();

    return reservations;
  }
  @ApiOperation({
    description: 'Endpoint para atualizar um item do cardápio',
  })
  @Put('/:id')
  async updateReservation(
    @Param('id') id: string,
    @Body() updatedReservation: UpdateReservationDTO,
  ) {
    const updatedReservationItem =
      await this.reservationService.updateReservation(id, updatedReservation);

    return {
      item: updatedReservationItem,
      message: 'Item atualizado com sucesso!',
    };
  }
  @ApiOperation({
    description: 'Endpoint para remover um item do cardápio',
  })
  @Delete('/:id')
  async deleteReservation(@Param('id') id: string) {
    const deletedReservationItem =
      await this.reservationService.deleteReservation(id);

    return {
      item: deletedReservationItem,
      message: 'Item removido com sucesso!',
    };
  }
}
