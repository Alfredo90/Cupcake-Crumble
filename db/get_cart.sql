 SELECT * FROM cart
 WHERE user_id = $1
JOIN cupcakes ON cupcakes.cupcake_id = cart.cupcake_id