SELECT * FROM cart
JOIN cupcakes ON cupcakes.cupcake_id = cart.cupcake_id
WHERE user_id = $1;