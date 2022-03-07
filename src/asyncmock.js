const products = [
    {
        id: '1',
        titulo: 'Mando PlayStation5',
        subtitulo: 'DualShock 5',
        img: '/img/control-ps5.jpeg',
        precio: '1000',
        category: 'accesorios',
        stock: '10'
    },
            
    {
        id: '2',
        titulo: 'Mando XBOX',
        subtitulo: 'Series S/X',
        img: '/img/control-xbox.jpg',
        precio: '1200',
        category: 'accesorios',
        stock: '12'
    },
            
    {
        id: '3',
        titulo: 'PlayStation5',
        subtitulo: 'PlayStation 5 1TB espacio, 1 mando',
        img: '/img/ps5.jpg',
        precio: '150',
        category: 'consolas',
        stock: '15'
    },

    {
        id: '4',
        titulo: 'XBOX Series X',
        subtitulo: 'XBOX Series X 1TB, 1 mando',
        img: '/img/xbox.jpg',
        precio: '160',
        category: 'consolas',
        stock: '17'
    },

    {
        id: '5',
        titulo: 'Spider-Man Mike Morales',
        subtitulo: 'Spider Man',
        img: '/img/juego-ps5.png',
        precio: '2400',
        category: 'juegos',
        stock: '20'
    },

    {
        id: '6',
        titulo: 'HALO Infinite',
        subtitulo: 'HALO Infinite',
        img: '/img/juego-xbox.png',
        precio: '3500',
        category: 'juegos',
        stock: '8'
    }
]

export const getProducts = (categoryId) => {
    return new Promise((resolve) =>{
        const categoryFilter = products.filter((product) => product.category === categoryId);
        setTimeout(() => {
            categoryId ? resolve(categoryFilter) : resolve(products)
        }, 1000);
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) =>{
        const item = products.find((product) => product.id === id)
        setTimeout(() => {
            resolve(item)
        }, 1000)
    })
}