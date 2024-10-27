import { Controller, Get } from "@nestjs/common";
import { MenuRepository } from "./menu.repository";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { MenuDTO } from "./dto/Menu.dto";

@ApiTags('Menu')
@Controller('/menu')
export class MenuController {

    constructor(private menuRepository: MenuRepository) { }
    @ApiOperation({ description: "Endpoint para listar o cardápio atualizado: http://localhost:3000/menu" })
    @Get()
    async listMenu() {
        const menu = await this.menuRepository.list();
        const menuList = menu.map(
            menuItem => new MenuDTO(
                menuItem.id,
                menuItem.name,
                menuItem.price,
                menuItem.category,
                menuItem.image,
                menuItem.ingredients
            )
        )
        return menuList;
    }


}