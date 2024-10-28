import { Module } from '@nestjs/common';
import { ReservationController } from './reservation.controller';
import { ReservationRepository } from './reservation.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationEntity } from './reservation.entity';
import { ReservationService } from './reservation.service';

@Module({
  imports: [TypeOrmModule.forFeature([ReservationEntity])],
  controllers: [ReservationController],
  providers: [ReservationRepository, ReservationService],
})
export class ReservationModule {}
