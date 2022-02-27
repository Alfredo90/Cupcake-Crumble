module.exports = {
  getCart: async (req, res) => {
    const db = req.app.get("db");
    console.log("SESSION", req.session);
    const { user_id } = req.session.user;
    const cart = await db.get_cart(user_id);
    res.status(200).send(cart);
  },
  addCupcakeToCart: async (req, res) => {
    const db = req.app.get("db");
    const { user_id } = req.session.user;
    const { cupcakeId } = req.params;
    const quantity = 1;
    let cart = await db.add_cart(user_id, cupcakeId, quantity);
    console.log(user_id, cupcakeId, quantity);
    res.status(200).send(cart);
  },
  updateQuantityFromCart: async (req, res) => {
    const db = req.app.get("db");
    const { quantity } = req.body;
    const { user_id } = req.session.user;
    const { cupcakeId } = req.params;
    console.log( req.params)
    let cart = await db.update_cart(cupcakeId, user_id, +quantity);
    console.log(cart);
    // const total = cart.reduce((acc, cur) => {
    //   return (acc += cur.price * cur.quantity);
    // }, 0); 
    // cart = { cart, total };
    // console.log(cart);
    res.status(200).send(cart);
  },
  deleteCupcakeFromCart: async (req, res) => {
    const db = req.app.get("db");
    const { user_id } = req.session.user;
    const { cartItemId } = req.params;
    console.log(user_id, cartItemId);
    await db.delete_cart(user_id, cartItemId);
    const updatedCart = await db.get_cart(user_id);
    res.status(200).send(updatedCart);
  },
};
