
export class MenuDTO {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly category: string,
        readonly image: string,
        readonly ingredients: string[]
    ) {}
}