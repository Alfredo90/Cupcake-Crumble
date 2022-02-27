require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')

const { checkSession } = require('./middleware')
const { register, login, logout, getUserSession } =  require('./controllers/userController')
const { getAllCupcakes } = require('./controllers/productController')
const { getCart, addCupcakeToCart, deleteCupcakeFromCart, updateQuantityFromCart } = require('./controllers/cartController')

const { SESSION_SECRET, SERVER_PORT, CONNECTION_STRING } = process.env
const app = express()

app.use(express.json())
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 14 },
    secret: SESSION_SECRET
  })
);

massive({ connectionString: CONNECTION_STRING, ssl: { rejectUnauthorized: false }})
  .then(db => {
    app.set('db', db)
    console.log('Database connected')
  })
  .catch(err => console.log(err))


//* AUTH ENDPOINTS
app.post('/auth/register', register)
app.post('/auth/login', login)
app.post('/auth/logout', checkSession, logout)
app.post('/auth/user', checkSession,  getUserSession)

//* CUPCAKE ENDPOINTS
app.get('/cupcakes', getAllCupcakes)

//* CART ENDPOINTS
app.get('/cart', checkSession, getCart)
app.post('/cart/:cupcakeId', checkSession, addCupcakeToCart)
app.put('/cart/:cartId', checkSession, updateQuantityFromCart)
app.delete('/cart/:cartId', checkSession, deleteCupcakeFromCart)


//* nodemon listens for changes
app.listen(SERVER_PORT, () => console.log(`Listening to port ${SERVER_PORT}`))
