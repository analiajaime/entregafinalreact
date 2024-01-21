const productos = [
    { id: 1, nombre: "Veterinario 1", precio: 100, img: "../img/card1.jpeg", idcat: "veterinarios" },
    { id: 2, nombre: "Perro 1", precio: 150, img: "../img/card2.jpeg", idcat: "perros" },
    { id: 3, nombre: "Comida 1", precio: 200, img: "../img/card3.jpeg", idcat: "comidas" },
    { id: 4, nombre: "Perro 2", precio: 250, img: "../img/card4.jpeg", idcat: "perros" },
    { id: 5, nombre: "Otros 1", precio: 300, img: "../img/card5.jpeg", idcat: "otros" },
    { id: 6, nombre: "Otros 2", precio: 350, img: "../img/card6.jpeg", idcat: "otros" },
    { id: 7, nombre: "Gato 1", precio: 400, img: "../img/card7.jpeg", idcat: "gatos" },
    { id: 8, nombre: "Otros 3", precio: 450, img: "../img/card8.jpeg", idcat: "otros" },
    { id: 9, nombre: "Otros 3", precio: 500, img: "../img/card9.jpeg", idcat: "otros" },
    { id: 10, nombre: "Gato 2", precio: 550, img: "../img/card10.jpeg", idcat: "gatos" },
    { id: 11, nombre: "Otros 4", precio: 600, img: "../img/card11.jpeg", idcat: "otros" },
    { id: 12, nombre: "Perro 3", precio: 650, img: "../img/card12.jpeg", idcat: "perros" },
    { id: 13, nombre: "Veterinario 2", precio: 700, img: "../img/card13.jpeg", idcat: "veterinarios" },
    { id: 14, nombre: "Veterinario 3", precio: 750, img: "../img/card14.jpeg", idcat: "veterinarios" },
    { id: 15, nombre: "Veterinario 4", precio: 800, img: "../img/card15.jpeg", idcat: "veterinarios" },
    { id: 16, nombre: "Veterinario 5", precio: 850, img: "../img/card16.jpeg", idcat: "veterinarios" },

]

export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise( resolve => {
        setTimeout( () => {
            const producto = productos.find(item => item.id === id);
            resolve(producto);
        }, 100)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(()=> {
            const productosCategoria = productos.filter(item => item.idcat === idCategoria );
            resolve(productosCategoria);
        }, 100)
    })
}



