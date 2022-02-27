UPDATE cart 
SET quantity = $3 
WHERE user_id = $1 AND cupcake_id = $2 
RETURNING *