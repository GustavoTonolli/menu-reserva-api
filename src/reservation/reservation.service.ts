import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateReservationDTO } from './dto/CreateReservation.dto';
import { ReservationEntity } from './reservation.entity';
import { Repository } from 'typeorm';
import { ListReservationDTO } from './dto/ListReservation.dto';
import { UpdateReservationDTO } from './dto/UpdateReservation.dto';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(ReservationEntity)
    private readonly reservationRepository: Repository<ReservationEntity>,
  ) {}

  async createReservation(reservationEntity: ReservationEntity) {
    await this.reservationRepository.save(reservationEntity);
  }

  async listReservations() {
    const reservation = await this.reservationRepository.find();
    const reservationList = reservation.map(
      (menuItem) =>
        new ListReservationDTO(
          menuItem.id,
          menuItem.name,
          menuItem.people_qty,
          menuItem.date,
          menuItem.time,
        ),
    );
    return reservationList;
  }

  async updateReservation(id: string, reservationEntity: UpdateReservationDTO) {
    this.reservationRepository.update(id, reservationEntity);
  }
  async deleteReservation(id: string) {
    this.reservationRepository.delete(id);
  }
}
