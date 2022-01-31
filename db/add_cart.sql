INSERT INTO cart (user_id, cupcake_id, quantity)
VALUES($1, $2, $3)

SELECT * FROM cart
WHERE user_id = $1
JOIN cupcakes ON cupcakes.cupcake_id = cart.cupcake_id