"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const mongodb_1 = require("mongodb");
dotenv.config();
const products = [
    {
        name: 'Frozen Pizza - Pepperoni',
        category: 'Pizza',
        price: 8.99,
        stockQuantity: 50,
        imageUrl: 'https://placeholder.com/frozen-pizza.jpg',
    },
    {
        name: 'Ice Cream - Vanilla',
        category: 'Ice Cream',
        price: 4.99,
        stockQuantity: 30,
        imageUrl: 'https://placeholder.com/ice-cream.jpg',
    },
    {
        name: 'Mixed Vegetables',
        category: 'Vegetables',
        price: 3.99,
        stockQuantity: 100,
        imageUrl: 'https://placeholder.com/vegetables.jpg',
    },
];
async function seed() {
    try {
        const client = await mongodb_1.MongoClient.connect(process.env.MONGODB_URI);
        const db = client.db();
        await db
            .collection('products')
            .drop()
            .catch(() => console.log('No products collection to drop'));
        await db.collection('products').insertMany(products);
        console.log('Database seeded successfully');
        client.close();
    }
    catch (error) {
        console.error('Error seeding database:', error);
    }
}
seed();
//# sourceMappingURL=seed.js.map