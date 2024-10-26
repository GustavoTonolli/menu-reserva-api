import { Injectable } from "@nestjs/common";

@Injectable()
export class MenuRepository {
    private menu = ['Hamburguer', 'Pizza', 'Salada'];

    async list() {
        return this.menu;
    }
}

