export class ListReservationDTO {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly people_qty: string,
    readonly date: string,
    readonly time: string,
  ) {}
}
