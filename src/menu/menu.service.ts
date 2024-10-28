import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuDTO } from './dto/Menu.dto';
import { MenuEntity } from './menu.entity';
import { Repository } from 'typeorm';
import { UpdateMenuDTO } from './dto/UpdatedMenu.dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(MenuEntity)
    private readonly menuRepository: Repository<MenuEntity>,
  ) {}

  async createMenuItem(menuEntity: MenuEntity) {
    await this.menuRepository.save(menuEntity);
  }

  async listMenu() {
    const menu = await this.menuRepository.find();
    const menuList = menu.map(
      (menuItem) =>
        new MenuDTO(
          menuItem.id,
          menuItem.name,
          menuItem.price,
          menuItem.category,
          menuItem.image,
          menuItem.description,
        ),
    );
    return menuList;
  }
  async updateMenuItem(id: string, menuEntity: UpdateMenuDTO) {
    this.menuRepository.update(id, menuEntity);
  }
  async deleteMenuItem(id: string) {
    this.menuRepository.delete(id);
  }
}
