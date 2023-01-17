const fs = require('fs')

class ProductManager {

    constructor(fileName, path) {

        this.fileName = fileName
        this.path = path
        this.products = []
        this.id = 0;

        try {
            this.products = JSON.parse(fs.readFileSync(this.path + '/' + this.fileName, 'utf-8'))
            console.log('archivo existente')
        } catch (error) {

            fs.writeFileSync(this.path + '/' + this.fileName, JSON.stringify([]));
            console.log('Datos creados')
        }
    }

    async addProduct(code, title, description, price, thumbail, stock = 1) {

        this.id = this.products.length + 1

        const product = {
            id: this.id,
            code,
            title,
            description,
            price,
            thumbail,
            stock
        }

        const productFilter = this.products.find(prod => prod.code === product.code)

        if (!productFilter) {
            this.products.push(product);
            await fs.writeFileSync(this.path + '/' + this.fileName, JSON.stringify(this.products))
            return 'Producto creado'
        } else {
            return `El producto con code ${product.code} ya existe`
        }


    }

    async getProducts() {

        try {
            return this.products;
        } catch (error) {
            return 'error al leer todos los productos'
        }
        

    }


    async getProductById(id) {

        const prodById = await this.products.find(prod => prod.id === id)

        if (prodById) {
            return prodById
        } else {
            return `Not Found id ${id}`
        }

    }

    async deteleById(id) {


        try {
            const filter = this.products.filter(prod => prod.id !== id)
            this.products = filter
            console.log(this.products)
            await fs.promises.writeFile(this.path + '/' + this.fileName, JSON.stringify(this.products))
            return `Producto borrado con id ${id}`
        } catch (error) {
            return 'error'
        }


    }

    async updateById(id, code, title, desc, precio, img, stock){ 

        const prod = this.products.find(prod=> prod.id === id)
        
        try {

        prod.code = code
        prod.title = title
        prod.desc = desc
        prod.precio = precio
        prod.thumbail = img
        prod.stock = stock

        await fs.promises.writeFile(this.path+'/'+this.fileName, JSON.stringify(this.products))
            return `Producto modificado con id ${id}`
        } catch (error) {
            return 'Error al modificar producto'
        }
    }

    


}


const codePrubea = 1;
const titlePrueba = "Camisa";
const descPrueba = "Camisa de color azul";
const precioPrueba = 450;
const imgPrueba = "Imagen vacio";
const stockPrueba = 500;


const codePrubea2 = 2;
const titlePrueba2 = "Pantalon";
const descPrueba2 = "Mezquilla";
const precioPrueba2 = 750;
const imgPrueba2 = "Imagen vacio";
const stockPrueba2 = 10;

const codePrubea3 = 3;
const titlePrueba3 = "Gorra";
const descPrueba3 = "Color negra";
const precioPrueba3 = 250;
const imgPrueba3 = "Imagen vacio";
const stockPrueba3 = 100;

const path = '../data'
const fileName = 'productos.txt'


//const prueba = new ProductManager(fileName, path);

/* 
prueba.addProduct(codePrubea, titlePrueba, descPrueba, precioPrueba, imgPrueba, stockPrueba)
    .then(res => console.log(res))
    .catch(error => console.log(error))


prueba.addProduct(codePrubea2, titlePrueba2, descPrueba2, precioPrueba2, imgPrueba2, stockPrueba2)
    .then(res => console.log(res))
    .catch(error => console.log(error))

prueba.addProduct(codePrubea3, titlePrueba3, descPrueba3, precioPrueba3, imgPrueba3, stockPrueba3)
    .then(res => console.log(res))
    .catch(error => console.log(error))
    */

//console.log( prueba.getProducts())

//console.log(prueba.getProductById(0))
//console.log(prueba.getProductById(4))
/*
prueba.deteleById(3)
    .then( res => console.log(res))
    .catch(error => console.log(error)) */

module.exports = ProductManager;