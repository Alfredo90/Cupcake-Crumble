require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const {checkSession} = require('./middleware')
//* import variables
const app = express()
const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env
const auth =  require('./controllers/userController.js/userController')
const ctrl = require('./controllers/productController.js/productController')
const cartCtrl = require('./controllers/cartController.js/cartController')


// * Top Level Middleware
app.use(express.json())
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 14 },
    secret: SESSION_SECRET
  })
);


//* invoke massive to connect to DB
massive({
  connectionString: CONNECTION_STRING,
  ssl: {
      rejectUnauthorized: false
  }
}).then(db => {
  app.set('db', db)
  console.log("Hello World")
}).catch (err => console.log(err))


//*AUTH ENDPOINTS
app.post('/auth/register', auth.register)
app.post('/auth/login', auth.login)
app.post('/auth/logout', checkSession, auth.logout)
app.post('/auth/user', checkSession,  auth.getUserSession)
//* PRODUCT ENDPOINTS
app.get('/cupcakes', ctrl.getAllCupcakes)
//* CART ENDPOINTS
app.get('/cart', checkSession,  async (req, res) => {
  const db = req.app.get('db')
  console.log(req.session)
  const {user_id} = req.session.user
  const cart = await db.get_cart(user_id)
  res.status(200).send(cart)
},)
// app.post('/cart/:cupcakeId')
// app.put('/cart/:cupcakeId')


//* nodemon listens for changes
app.listen(SERVER_PORT, () => console.log(`Listening to port ${SERVER_PORT}`))
