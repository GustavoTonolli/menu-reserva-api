import { Module } from "@nestjs/common";
import { ReservationController } from "./reservation.controller";
import { ReservationRepository } from "./reservation.repository";


@Module({
    controllers: [ReservationController],
    providers: [ReservationRepository],
})
export class ReservationModule {}