import { Controller, Get } from "@nestjs/common";
import { MenuRepository } from "./menu.repository";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags('Menu')
@Controller('/menu')
export class MenuController {

    constructor(private menuRepository: MenuRepository) { }
    @ApiOperation({ description: "Endpoint para listar o cardápio atualizado: http://localhost:3000/menu" })
    @Get()
    async listMenu() {
        return this.menuRepository.list();
    }


}