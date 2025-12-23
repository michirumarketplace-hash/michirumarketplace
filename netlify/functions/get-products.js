// netlify/functions/get-products.js
exports.handler = async (event, context) => {
    const products = [
        {
            id: 1,
            name: "Elegant Women's Dress",
            price: 25000,
            category: "women-clothing",
            image: "assets/products/shoes1.jpg",
            rating: 4.5,
            description: "Beautiful and comfortable dress perfect for any occasion."
        },
        {
            id: 2,
            name: "Designer Handbag",
            price: 18000,
            category: "women-accessories",
            image: "assets/products/bag1.png",
            rating: 4.8,
            description: "Stylish handbag with premium quality materials."
        },
        {
            id: 3,
            name: "Cotton T-Shirt",
            price: 8000,
            category: "women-clothing",
            image: "assets/products/shirt1.webp",
            rating: 4.2,
            description: "Comfortable cotton t-shirt for everyday wear."
        },
        {
            id: 4,
            name: "Smartphone Case",
            price: 3500,
            category: "mobile-accessories",
            image: "assets/products/shoes1.jpg",
            rating: 4.6,
            description: "Protective case for your smartphone with stylish design."
        },
        {
            id: 5,
            name: "Gaming Mouse",
            price: 12000,
            category: "gaming-gear",
            image: "assets/products/bag1.png",
            rating: 4.7,
            description: "High-precision gaming mouse with RGB lighting."
        },
        {
            id: 6,
            name: "Laptop Stand",
            price: 8500,
            category: "electronics",
            image: "assets/products/shirt1.webp",
            rating: 4.4,
            description: "Adjustable laptop stand for better ergonomics."
        },
        {
            id: 7,
            name: "Wireless Earbuds",
            price: 15000,
            category: "mobile-accessories",
            image: "assets/products/shoes1.jpg",
            rating: 4.3,
            description: "Premium wireless earbuds with noise cancellation."
        },
        {
            id: 8,
            name: "Fashion Scarf",
            price: 4500,
            category: "women-accessories",
            image: "assets/products/bag1.png",
            rating: 4.1,
            description: "Soft and stylish scarf for the fashion-conscious."
        },
        {
            id: 9,
            name: "Gaming Keyboard",
            price: 20000,
            category: "gaming-gear",
            image: "assets/products/shirt1.webp",
            rating: 4.9,
            description: "Mechanical gaming keyboard with customizable backlight."
        },
        {
            id: 10,
            name: "USB Hub",
            price: 6000,
            category: "electronics",
            image: "assets/products/shoes1.jpg",
            rating: 4.0,
            description: "Multi-port USB hub for all your connectivity needs."
        },
        {
            id: 11,
            name: "Portable Charger",
            price: 9000,
            category: "mobile-accessories",
            image: "assets/products/bag1.png",
            rating: 4.5,
            description: "High-capacity portable charger for on-the-go power."
        },
        {
            id: 12,
            name: "Travel Mug",
            price: 5500,
            category: "miscellaneous",
            image: "assets/products/shirt1.webp",
            rating: 4.2,
            description: "Insulated travel mug to keep your beverages hot or cold."
        }
    ];

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
        },
        body: JSON.stringify(products)
    };
};