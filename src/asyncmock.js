const products = [
    {
        id: '1',
        titulo: 'Producto 1',
        subtitulo: 'Hola soy el producto 1',
        img: '/img/game.ico',
        mostrar: true,
        precio: '$1000,00',
        category: 'consolas'
    },
            
    {
        id: '2',
        titulo: 'Producto 2',
        subtitulo: 'Hola soy el producto 2',
        img: '/img/game.ico',
        mostrar: true,
        precio: '$1200,00',
        category: 'consolas'
    },
            
    {
        id: '3',
        titulo: 'Producto 3',
        subtitulo: 'Hola soy el producto 3',
        img: '/img/game.ico',
        mostrar: true,
        precio: '$1500,00',
        category: 'consolas'
    },

    {
        id: '4',
        titulo: 'Producto 4',
        subtitulo: 'Hola soy el producto 4',
        img: '/img/game.ico',
        mostrar: true,
        precio: '$2000,00',
        category: 'juegos'
    },

    {
        id: '5',
        titulo: 'Producto 5',
        subtitulo: 'Hola soy el producto 5',
        img: '/img/game.ico',
        mostrar: true,
        precio: '$2400,00',
        category: 'juegos'
    },

    {
        id: '6',
        titulo: 'Producto 6',
        subtitulo: 'Hola soy el producto 6',
        img: '/img/game.ico',
        mostrar: true,
        precio: '$3500,00',
        category: 'juegos'
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