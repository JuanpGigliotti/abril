const productos = [
    {id: "1", nombre:"Vino", precio: 12, img:"/img/categorias/Tinto/1.webp", idcategoria:"1", stock:10},
    {id: "2", nombre:"Vino", precio: 12, img:"/img/categorias/Tinto/2.webp", idcategoria:"1", stock:10},
    {id: "3", nombre:"Vino", precio: 12, img:"/img/categorias/Tinto/3.webp", idcategoria:"1", stock:10},
    {id: "4", nombre:"Vino", precio: 12, img:"/img/categorias/Tinto/4.webp", idcategoria:"1", stock:10},
    {id: "5", nombre:"Vino", precio: 12, img:"/img/categorias/Tinto/5.webp", idcategoria:"1", stock:10},
    {id: "6", nombre:"Vino", precio: 12, img:"/img/categorias/Tinto/6.webp", idcategoria:"1", stock:10},
    {id: "7", nombre:"Vino", precio: 12, img:"/img/categorias/Blanco/7.webp", idcategoria:"2", stock:10},
    {id: "8", nombre:"Vino", precio: 12, img:"/img/categorias/Blanco/8.webp", idcategoria:"2", stock:10},
    {id: "9", nombre:"Vino", precio: 12, img:"/img/categorias/Blanco/9.webp", idcategoria:"2", stock:10},
    {id: "10", nombre:"Vino", precio:12, img:"/img/categorias/Blanco/10.webp", idcategoria:"2", stock:10},
    {id: "11", nombre:"Vino", precio:12 , img:"/img/categorias/Rosado/11.webp", idcategoria:"3", stock:10},
    {id: "12", nombre:"Vino", precio:12 , img:"/img/categorias/Rosado/12.webp", idcategoria:"3", stock:10},
    {id: "13", nombre:"Vino", precio:12 , img:"/img/categorias/Rosado/13.webp", idcategoria:"3", stock:10},
    {id: "14", nombre:"Vino", precio:12 , img:"/img/categorias/Rosado/14.webp", idcategoria:"3", stock:10},
    {id: "15", nombre:"Vino", precio:12 , img:"/img/categorias/Rosado/15.webp", idcategoria:"3", stock:10},
    {id: "16", nombre:"Vino", precio:12 , img:"/img/categorias/Rosado/16.webp", idcategoria:"3", stock:10},
    {id: "17", nombre:"Vino", precio:12 , img:"/img/categorias/Rosado/17.webp", idcategoria:"3", stock:10},
    {id: "18", nombre:"Vino", precio:12 , img:"/img/categorias/Espumoso/18.webp", idcategoria:"4", stock:10},
    {id: "19", nombre:"Vino", precio:12, img:"/img/categorias/Espumoso/19.webp", idcategoria:"4", stock:10},
    {id: "20", nombre:"Vino", precio:12 , img:"/img/categorias/Espumoso/20.webp", idcategoria:"4", stock:10},
    {id: "21", nombre:"Vino", precio:12 , img:"/img/categorias/Espumoso/21.webp", idcategoria:"4", stock:10},
    {id: "22", nombre:"Vino", precio:12 , img:"/img/categorias/Espumoso/22.webp", idcategoria:"4", stock:10},
    {id: "23", nombre:"Vino", precio:12 , img:"/img/categorias/Espumoso/23.webp", idcategoria:"4", stock:10},
    {id: "24", nombre:"Vino", precio:12 , img:"/img/categorias/Espumoso/24.webp", idcategoria:"4", stock:10}

]

export const getProductos = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}

export const getCategoria = (categoria) =>{
    return new Promise(resolve =>{
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idcategoria === categoria);
            resolve(productosCategoria);
        }, 100);
    })
}

export const getUnicoProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = productos.find((prod) => prod.id === id);
            resolve(producto);
        }, 100);
    });
};
