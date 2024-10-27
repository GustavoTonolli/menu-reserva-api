import { Injectable } from "@nestjs/common";

@Injectable()
export class MenuRepository {
    private menu = [
        {
            "id": 1,
            "name": "Cheeseburger",
            "price": 12.99,
            "category": "Burgers",
            "image": "https://example.com/images/cheeseburger.jpg",
            "ingredients": ["Beef patty", "Cheese", "Lettuce", "Tomato", "Onion", "Pickle", "Bun"]
        },
        {
            "id": 2,
            "name": "Margherita Pizza",
            "price": 15.99,
            "category": "Pizza",
            "image": "https://example.com/images/margherita.jpg",
            "ingredients": ["Tomato sauce", "Mozzarella", "Basil", "Olive oil"]
        },
        {
            "id": 3,
            "name": "Caesar Salad",
            "price": 10.5,
            "category": "Salads",
            "image": "https://example.com/images/caesar_salad.jpg",
            "ingredients": ["Romaine lettuce", "Caesar dressing", "Parmesan", "Croutons"]
        },
        {
            "id": 4,
            "name": "Spaghetti Carbonara",
            "price": 13.99,
            "category": "Pasta",
            "image": "https://example.com/images/carbonara.jpg",
            "ingredients": ["Spaghetti", "Eggs", "Pancetta", "Pecorino cheese", "Black pepper"]
        },
        {
            "id": 5,
            "name": "Chicken Tacos",
            "price": 8.99,
            "category": "Tacos",
            "image": "https://example.com/images/chicken_tacos.jpg",
            "ingredients": ["Chicken", "Tortilla", "Lettuce", "Tomato", "Cheese", "Sour cream"]
        }
    ]
    ;

    async list() {
        return this.menu;
    }
}

