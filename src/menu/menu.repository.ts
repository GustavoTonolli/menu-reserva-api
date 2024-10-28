import { Injectable } from '@nestjs/common';

@Injectable()
export class MenuRepository {
  private menu = [
    {
      id: '1',
      name: 'Burger de carne',
      price: 12.99,
      category: 'principal',
      image: 'https://example.com/images/cheeseburger.jpg',
      description: '',
    },
    {
      id: '2',
      name: 'Pizza margherita',
      price: 15.99,
      category: 'principal',
      image: 'https://example.com/images/margherita.jpg',
      description: '',
    },
    {
      id: '3',
      name: 'Salada tropical',
      price: 10.5,
      category: 'entrada',
      image: 'https://example.com/images/caesar_salad.jpg',
      description: '',
    },
    {
      id: '4',
      name: 'Hamburguer de cordeiro',
      price: 13.99,
      category: 'principal',
      image: 'https://example.com/images/carbonara.jpg',
      description: '',
    },
    {
      id: '5',
      name: 'Tacos',
      price: 8.99,
      category: 'entrada',
      image: 'https://example.com/images/chicken_tacos.jpg',
      description: '',
    },
    {
      id: '6',
      name: 'Coca-cola',
      price: 6.99,
      category: 'bebida',
      image: 'https://example.com/images/chicken_tacos.jpg',
      description: '',
    },
    {
      id: '7',
      name: 'Petit Gâteau',
      price: 12.99,
      category: 'sobremesa',
      image: 'https://example.com/images/chicken_tacos.jpg',
      description: '',
    },
  ];

  async list() {
    return this.menu;
  }
}
