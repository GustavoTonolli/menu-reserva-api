import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MenuRepository } from './menu.repository';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MenuDTO } from './dto/Menu.dto';
import { MenuService } from './menu.service';
import { CreateMenuDTO } from './dto/CreateMenu.dto';
import { MenuEntity } from './menu.entity';
import { UpdateMenuDTO } from './dto/UpdatedMenu.dto';

@ApiTags('Menu')
@Controller('/menu')
export class MenuController {
  constructor(
    private menuRepository: MenuRepository,
    private menuService: MenuService,
  ) {}
  @ApiOperation({
    description: 'Endpoint para adicionar um item no cardápio',
  })
  @Post()
  async createMenu(@Body() menu: CreateMenuDTO) {
    const menuEntity = new MenuEntity();
    menuEntity.name = menu.name;
    menuEntity.price = menu.price;
    menuEntity.category = menu.category;
    menuEntity.image = menu.image;
    menuEntity.description = menu.description;
    this.menuService.createMenuItem(menuEntity);
    return {
      menu: new MenuDTO(
        menuEntity.id,
        menuEntity.name,
        menuEntity.price,
        menuEntity.category,
        menuEntity.image,
        menuEntity.description,
      ),
      message: 'Item adicionado com sucesso!',
    };
  }

  @ApiOperation({
    description: 'Endpoint para listar todos os itens do cardápio',
  })
  @Get()
  async listMenu() {
    const menu = await this.menuService.listMenu();

    return menu;
  }
  @ApiOperation({
    description: 'Endpoint para atualizar um item do cardápio',
  })
  @Put('/:id')
  async updateMenu(
    @Param('id') id: string,
    @Body() updatedItem: UpdateMenuDTO,
  ) {
    const updatedMenuItem = await this.menuService.updateMenuItem(
      id,
      updatedItem,
    );

    return {
      item: updatedMenuItem,
      message: 'Item atualizado com sucesso!',
    };
  }
  @ApiOperation({
    description: 'Endpoint para remover um item do cardápio',
  })
  @Delete('/:id')
  async deleteMenu(@Param('id') id: string) {
    const deletedMenuItem = await this.menuService.deleteMenuItem(id);

    return {
      item: deletedMenuItem,
      message: 'Item removido com sucesso!',
    };
  }
}
