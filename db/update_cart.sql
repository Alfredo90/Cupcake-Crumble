UPDATE cart 
SET quantity = $3
WHERE cart_id = $1 AND user_id = $2;

SELECT * FROM cart
JOIN cupcakes ON cupcakes.cupcake_id = cart.cupcake_id
WHERE user_id = $2;