module.exports = {
  getCart: async (req, res) => {
    const db = req.app.get("db");
    const { user_id } = req.session.user;

    const cart = await db.get_cart(user_id);

    res.status(200).send(cart);
  },
  addCupcakeToCart: async (req, res) => {
    const db = req.app.get("db");
    const { user_id } = req.session.user;
    const { cupcakeId } = req.params;

    const cart = await db.add_cart(user_id, cupcakeId);

    res.status(200).send(cart);
  },
  updateQuantityFromCart: async (req, res) => {
    const db = req.app.get('db');
    const { quantity } = req.body;
    const { cartId } = req.params;
    const { user_id } = req.session.user;

    const cart = await db.update_cart(cartId, user_id, parseInt(quantity));

    console.log(cart)

    res.status(200).send(cart);
  },
  deleteCupcakeFromCart: async (req, res) => {
    const db = req.app.get("db");
    const { user_id } = req.session.user;
    const { cartId } = req.params;

    await db.delete_cart(user_id, cartId);
    const updatedCart = await db.get_cart(user_id);

    res.status(200).send(updatedCart);
  },
};
