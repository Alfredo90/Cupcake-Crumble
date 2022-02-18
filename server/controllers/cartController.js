module.exports = {
    getCart: async (req, res) => {
        const db = req.app.get('db')
        console.log('SESSION', req.session)
        const { user_id } = req.session.user
        const cart = await db.get_cart(user_id)
        res.status(200).send(cart)
    },
    addCupcakeToCart: async (req, res) => {
        const db = req.app.get('db')
        const {user_id} = req.session.user
        const {cupcakeId} = req.params
        const quantity = 1
        let cart = await db.add_cart(user_id, cupcakeId, quantity)
        console.log(user_id, cupcakeId, quantity)
        res.status(200).send(cart)
    },
    deleteCupcakeFromCart: async (req, res) => {
        const db = req.app.get('db')
        const {user_id} = req.session.user
       const {cartItemId} = req.params 
       console.log(user_id, cartItemId)
       await db.delete_cart(user_id, cartItemId)
        const updatedCart = await db.get_cart(user_id)
        res.status(200).send(updatedCart)
    }
}