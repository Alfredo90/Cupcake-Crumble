UPDATE cart 
SET quantity = $2 
WHERE cupcake_id = $1;
-- SELECT * FROM cart;
SELECT * FROM cart
WHERE user_id = $1
JOIN cupcakes ON cupcakes.cupcake_id = cart.cupcake_id