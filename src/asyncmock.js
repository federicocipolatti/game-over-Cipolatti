const products = [
    {
        id: '1',
        titulo: 'Producto 1',
        subtitulo: 'Hola soy el producto 1',
        img: '/img/game.ico',
        mostrar: true,
        precio: '1000',
        category: 'accesorios',
        stock: '10'
    },
            
    {
        id: '2',
        titulo: 'Producto 2',
        subtitulo: 'Hola soy el producto 2',
        img: '/img/game.ico',
        mostrar: true,
        precio: '1200',
        category: 'accesorios',
        stock: '12'
    },
            
    {
        id: '3',
        titulo: 'Producto 3',
        subtitulo: 'Hola soy el producto 3',
        img: '/img/game.ico',
        mostrar: true,
        precio: '1500',
        category: 'consolas',
        stock: '15'
    },

    {
        id: '4',
        titulo: 'Producto 4',
        subtitulo: 'Hola soy el producto 4',
        img: '/img/game.ico',
        mostrar: true,
        precio: '2000',
        category: 'consolas',
        stock: '17'
    },

    {
        id: '5',
        titulo: 'Producto 5',
        subtitulo: 'Hola soy el producto 5',
        img: '/img/game.ico',
        mostrar: true,
        precio: '2400',
        category: 'juegos',
        stock: '20'
    },

    {
        id: '6',
        titulo: 'Producto 6',
        subtitulo: 'Hola soy el producto 6',
        img: '/img/game.ico',
        mostrar: true,
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