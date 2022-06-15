const {Router} = require('express')
const router = Router()
const productos = [
    {
      "title": "Escuadra",
      "price": 123.45,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
      "id": 1
    },
    {
      "title": "Calculadora",
      "price": 234.56,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
      "id": 2
    },
    {
      "title": "Globo Terráqueo",
      "price": 345.67,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
      "id": 3
    }
   ]
   
router.get('/:id', (req,res) => {
    const id = Number(req.params.id)
    const producttID = productos.filter( producto => {
            return producto.id == id
        })
        res.json(producttID)
    } 
)


router.get('/', (req,res) => {
    res.json(productos)
})

router.post('/', (req,res) => {
    const {title,price,thumbnail} = req.body
    const ultID = productos[productos.length - 1].id
    const producto = {title,price,thumbnail}
    producto.id = ultID + 1
    productos.push(producto)

    res.sendStatus(201)
})

router.put('/:id', (req,res) => {
    const {title, price, thumbnail} = req.body
    const product = productos.filter(producto => {
        return producto.id == req.params.id
    })

    product.title = title
    product.price = price
    product.thumbnail = thumbnail

    productos.push(product)

    res.sendStatus(200)
})

router.delete('/:id', (req,res) => {
    const id = Number(req.params.id)
    const productID = productos.filter( producto => {
            return producto.id == id
        })
        productos.delete(producto)
        res.sendStatus(200)
    } 
)


module.exports = router