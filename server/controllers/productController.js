module.exports = {
  getAllCupcakes: async (req, res) => {
    const db = req.app.get("db");
    const products = await db.get_cupcakes();
    res.status(200).send(products);
  },
};
