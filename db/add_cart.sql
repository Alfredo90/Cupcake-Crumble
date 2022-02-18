INSERT INTO cart (user_id, cupcake_id, quantity)
VALUES($1, $2, $3)
RETURNING *