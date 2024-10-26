import { Injectable } from "@nestjs/common";

@Injectable()
export class ReservationRepository {
    private reservations = [];

    async save(reservation) {
        this.reservations.push(reservation);
    }
}