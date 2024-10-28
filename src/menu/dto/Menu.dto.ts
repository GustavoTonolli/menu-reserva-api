export class MenuDTO {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly price: string,
    readonly category: string,
    readonly image: string,
    readonly description: string,
  ) {}
}
