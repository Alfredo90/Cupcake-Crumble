module.exports = {
    getCupcakesToCart: async (req, res) => {
        const db = req.app.get('db')
        const {user_id} = req.session.user
        const cart = await db.get_cart(user_id)
        res.status(200).send(cart)
    },
    // addCupcakesToCart: async (req, res) => {
    //     const db = req.app.get('db')
    //     const {user_id} = req.session.user
    //     const {cupcake_id} = req.params
    //     let cart = await db.add_cart(user_id, cupcake_id)
    //     res.status(200).send(cart)
    // }
}