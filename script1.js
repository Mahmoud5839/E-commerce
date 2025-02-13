
function createProductCard(product, containerID) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    card.innerHTML = `
        <div class="discount">
            <p>-${product.discount}%</p>
            <h2>❤</h2>
        </div>
        <img src="${product.image}" alt="${product.name}">
        <div class="product-details">
            <h3>${product.name}</h3>
            <h4>
                <span class="price">$${product.price}</span>
                <span class="original-price">$${product.originalPrice}</span>
            </h4>
            <p class="rating">${'★'.repeat(product.rating)} <span>(${product.reviews})</span></p>
        </div>
        <div>
            <button class="buttons" onclick="addToCart()">Add To Cart</button>
        </div>
    `;

    document.getElementById(containerID).appendChild(card);
}

const products = [
    {
        id: '1',
        name: 'AK-900 Wired Keyboard',
        price: 120,
        originalPrice: 200,
        discount: 40,
        image: 'img/products/p2.png',
        rating: 5,
        reviews: 88
    },
    {
        id: '2',
        name: 'HAVIT HV-G92 Gamepad',
        price: 199,
        originalPrice: 250,
        discount: 25,
        image: 'img/products/p1.png',
        rating: 4,
        reviews: 45
    },
    {
        id: '3',
        name: 'IPS Gameing Monitor',
        price: 375,
        originalPrice: 499,
        discount: 25,
        image: 'img/products/p3.png',
        rating: 5,
        reviews: 99
    },
    {
        id: '4',
        name: 'ASUS FHD Gaming Laptop',
        price: 799,
        originalPrice: 1050,
        discount: 25,
        image: 'img/products/p5.png',
        rating: 5,
        reviews: 65
    },
    {
        id: '5',
        name: 'Jr.Zoom Soccer Cleats ',
        price: 565,
        originalPrice: 750,
        discount: 25,
        image: 'img/products/ex4.png',
        rating: 5,
        reviews: 35
    },
    {
        id: '6',
        name: 'RGB liquid CPU Cooler',
        price: 440,
        originalPrice: 550,
        discount: 20,
        image: 'img/products/p7.png',
        rating: 4,
        reviews: 66
    },
    {
        id: '7',
        name: 'Canon EOS DSLR Camera',
        price: 719.99,
        originalPrice: 899,
        discount: 20,
        image: 'img/products/cam1.png',
        rating: 5,
        reviews: 55
    },
    {
        id: '8',
        name: 'The north coat',
        price: 1035,
        originalPrice: 1379,
        discount: 25,
        image: 'img/products/ex3.png',
        rating: 5,
        reviews: 99
    },
    {
        id: '9',
        name: 'The north coat',
        price: 199,
        originalPrice: 249,
        discount: 25,
        image: 'img/products/best1.png',
        rating: 5,
        reviews: 99
    },
    {
        id: '10',
        name: 'The north coat',
        price: 199,
        originalPrice: 249,
        discount: 25,
        image: 'img/products/ex5.png',
        rating: 5,
        reviews: 99
    },
    {
        id: '11',
        name: 'The north coat',
        price: 199,
        originalPrice: 249,
        discount: 25,
        image: 'img/products/best1.png',
        rating: 5,
        reviews: 99
    },
    {
        id: '12',
        name: 'The north coat',
        price: 199,
        originalPrice: 249,
        discount: 25,
        image: 'img/products/ex5.png',
        rating: 5,
        reviews: 99
    }
];

// The first 4 product flash sales
const products1 = [
    {
        id: '1',
        name: 'AK-900 Wired Keyboard',
        price: 120,
        originalPrice: 200,
        discount: 40,
        image: 'img/products/p2.png',
        rating: 5,
        reviews: 88
    },
    {
        id: '2',
        name: 'HAVIT HV-G92 Gamepad',
        price: 199,
        originalPrice: 250,
        discount: 25,
        image: 'img/products/p1.png',
        rating: 4,
        reviews: 45
    },
    {
        id: '3',
        name: 'IPS Gameing Monitor',
        price: 375,
        originalPrice: 499,
        discount: 25,
        image: 'img/products/p3.png',
        rating: 5,
        reviews: 99
    },
    {
        id: '4',
        name: 'ASUS FHD Gaming Laptop',
        price: 799,
        originalPrice: 1050,
        discount: 25,
        image: 'img/products/p5.png',
        rating: 5,
        reviews: 65
    }
];

// Phones

const productsPhones = [
    {
        id: '1',
        name: 'iPhone 16 Pro Max',
        price: 1875,
        originalPrice: 2499,
        discount: 15,
        image: 'img/products/iph16.jpg',
        rating: 5,
        reviews: 265
    },
    {
        id: '2',
        name: 'iPhone 15 Pro Max',
        price: 1599,
        originalPrice: 1999,
        discount: 20,
        image: 'img/products/iph15.jpg',
        rating: 5,
        reviews: 195
    },
    {
        id: '3',
        name: 'iPhone 14 Pro Max',
        price: 1125,
        originalPrice: 1499,
        discount: 25,
        image: 'img/products/iph14.jpeg',
        rating: 5,
        reviews: 125
    },
    {
        id: '4',
        name: 'iPhone 13 Pro Max',
        price: 975,
        originalPrice: 1299,
        discount: 25,
        image: 'img/products/iph13.jpg',
        rating: 5,
        reviews: 95
    }
];

// Laptops

const productsLaptop = [
    {
        id: '1',
        name: 'Asus FHD Gaming Laptop',
        price: 1199,
        originalPrice: 1499,
        discount: 15,
        image: 'img/products/p5.png',
        rating: 5,
        reviews: 125
    },
    {
        id: '2',
        name: 'HP Gaming Laptop',
        price: 1099,
        originalPrice: 1299,
        discount: 25,
        image: 'img/products/lap2.webp',
        rating: 5,
        reviews: 135
    },
    {
        id: '3',
        name: 'Laptop Dell Gaming ',
        price: 999,
        originalPrice: 1199,
        discount: 25,
        image: 'img/products/lapDell.png',
        rating: 5,
        reviews: 199
    },
    {
        id: '4',
        name: 'MacBook Pro 2024',
        price: 1599,
        originalPrice: 1999,
        discount: 20,
        image: 'img/products/lap1.webp',
        rating: 5,
        reviews: 299
    }
];

// Smart Watch

const productsSmartWatch = [
    {
        id: '1',
        name: 'Smart Wathc-Carbon Black',
        price: 1039,
        originalPrice: 1299,
        discount: 20,
        image: 'img/products/watch1.jpg',
        rating: 5,
        reviews: 75
    },
    {
        id: '2',
        name: 'Fit-Life Smart Watch ',
        price: 825,
        originalPrice: 1099,
        discount: 25,
        image: 'img/products/watch2.jpg',
        rating: 5,
        reviews: 88
    },
    {
        id: '3',
        name: 'DT Ultra Smart Watch TFT',
        price: 899,
        originalPrice: 1199,
        discount: 25,
        image: 'img/products/watch3.jpg',
        rating: 5,
        reviews: 99
    },
    {
        id: '4',
        name: 'Apple Smart Watch (EG)',
        price: 1439,
        originalPrice: 1799,
        discount: 20,
        image: 'img/products/watch4.jpg',
        rating: 5,
        reviews: 299
    }
];

const productsCamera = [
    {
        id: '1',
        name: 'Dslr Camera HD ',
        price: 719.99,
        originalPrice: 899,
        discount: 20,
        image: 'img/products/cam1.png',
        rating: 5,
        reviews: 125
    },
    {
        id: '2',
        name: 'Digital Camera IOS',
        price: 525.99,
        originalPrice: 699,
        discount: 25,
        image: 'img/products/cam2.png',
        rating: 5,
        reviews: 99
    },
    {
        id: '3',
        name: 'Sony Alpha a7 Mirrorless',
        price: 825.99,
        originalPrice: 1099,
        discount: 25,
        image: 'img/products/cam3.webp',
        rating: 5,
        reviews: 199
    },
    {
        id: '4',
        name: 'Camera Canon 90D 32.5MP',
        price: 799,
        originalPrice: 999,
        discount: 20,
        image: 'img/products/cam4.jpeg',
        rating: 5,
        reviews: 89
    }
];

const productsHeadPhone = [
    {
        id: '1',
        name: 'Headphone black wireless',
        price: 325.99,
        originalPrice: 449,
        discount: 20,
        image: 'img/products/headph1.webp',
        rating: 5,
        reviews: 125
    },
    {
        id: '2',
        name: 'Headphone wireless B',
        price: 299.99,
        originalPrice: 399,
        discount: 25,
        image: 'img/products/headph2.jpg',
        rating: 5,
        reviews: 99
    },
    {
        id: '3',
        name: 'Headphone Gaming GM',
        price: 375.99,
        originalPrice: 499,
        discount: 25,
        image: 'img/products/headph3.jpg',
        rating: 5,
        reviews: 199
    },
    {
        id: '4',
        name: 'Headphone R-1500 - Ronin',
        price: 799,
        originalPrice: 999,
        discount: 20,
        image: 'img/products/headph4.jpeg',
        rating: 5,
        reviews: 89
    }
];

const Productsgames = [
    {
        id: '1',
        name: 'XBox Gaming Console ',
        price: 1275.99,
        originalPrice: 1499,
        discount: 15,
        image: 'img/products/game1.webp',
        rating: 5,
        reviews: 199
    },
    {
        id: '2',
        name: 'Playstation 5 pro',
        price: 1119.99,
        originalPrice: 1399,
        discount: 20,
        image: 'img/products/game2.webp',
        rating: 5,
        reviews: 299
    },
    {
        id: '3',
        name: 'Playstation 4 Slim 500GB',
        price: 959.99,
        originalPrice: 1199,
        discount: 20,
        image: 'img/products/game3.jpg',
        rating: 5,
        reviews: 125
    },
    {
        id: '4',
        name: 'Playstation 3',
        price: 799.99,
        originalPrice: 999,
        discount: 20,
        image: 'img/products/game4.webp',
        rating: 5,
        reviews: 99
    }
]


// All Products
products.forEach(product => {
    createProductCard(product, 'product-container')
    createProductCard(product, 'explore-product-container')
});

// Explore our products
products1.forEach(product => {
    createProductCard(product, 'show-product-container');
    createProductCard(product, 'explore-show-product-container');
    createProductCard(product, 'show-best-product-container')
});

// Best Selling
products.forEach(product => {
    createProductCard(product, 'best-product-container')
})

// Phones 
productsPhones.forEach(product => {
    createProductCard(product, 'phones-products')
})

// Laptops
productsLaptop.forEach(product => {
    createProductCard(product, 'computer-products')
});

// Smart Watch
productsSmartWatch.forEach(product => {
    createProductCard(product, 'watch-products')
});

// Camera
productsCamera.forEach(product => {
    createProductCard(product, 'camera-products')
});

// Head Phone
productsHeadPhone.forEach(product => {
    createProductCard(product, 'headPhone-products')
});

// Games
Productsgames.forEach(product => {
    createProductCard(product, "gaming-products")
})

