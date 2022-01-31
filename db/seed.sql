CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(20) NOT NULL,
  email VARCHAR(250) NOT NULL,
  password VARCHAR(250) NOT NULL
);
CREATE TABLE cupcakes (
  cupcake_id SERIAL PRIMARY KEY,
  img VARCHAR(500) NOT NULL,
  title VARCHAR(100) NOT NULL,
  description VARCHAR(500) NOT NULL,
  price DECIMAL(4,2) NOT NULL,
);
CREATE TABLE cart (
  cart_id SERIAL PRIMARY KEY,
  cupcake_id INT REFERENCES cupcakes(cupcake_id),
  user_id INT REFERENCES users(user_id),
  quantity INT NOT NULL
)

-- SELECT * FROM cupcakes
-- JOIN cart ON cupcakes.cupake_id = cart.cupcake_id
-- INSERT INTO users(
--   email, password, username
-- )
-- VALUES(
--   test@gmail.com, test214, test
--   )
-- INSERT INTO cupcakes (
-- img, title, description, price
-- )
-- VALUES
-- ('https://cdn.shopify.com/s/files/1/0565/9757/7916/products/BdayAssortment_f1f07ba5-ef03-49eb-a5e9-f27439720eaf_1194x.jpg?v=1632959297', 'Birthday Cupcake', 'Say “happy birthday!” with our celebrated vanilla and chocolate cupcakes, topped with our signature swirl of vanilla buttercream, birthday decorations, and confetti sprinkles.', 4.00),
-- ('https://cdn.shopify.com/s/files/1/0565/9757/7916/products/RVCreamCheese_2_93dc679e-6a80-469d-8e18-c896bed2364c_1194x.jpg?v=1632988130', 'Red Velvet Cupcake', 'One of Cupcale Crumble’s oldest and best-selling desserts, our classic-style red velvet cupcake is a crimson-colored, chocolate-flavored cake topped with whipped vanilla icing.', 4.00),
-- ('https://cdn.shopify.com/s/files/1/0565/9757/7916/products/Vanvan_0132_134b67ca-b4ee-4c94-a5e9-e5b62e27d80f_1194x.jpg?v=1632999180', 'Classic Vanilla Cupcake', 'What makes our vanilla cupcake a best-seller? An irresistibly light and buttery crumb topped with vanilla buttercream, always in our signature swirl.', 4.00),
-- ('https://cdn.shopify.com/s/files/1/0565/9757/7916/products/ClassicAssortment_b66e9322-b8b6-428d-8ce1-bc5f7a222451_1194x.jpg?v=1632998900', 'Classic Chocolate Cupcake', 'An assortment of Cupcake Crumble’s celebrated chocolate cupcakes: light-as-a-feather chocolate cake topped with chocolate buttercream and assorted sprinkles.', 4.00 ),
-- ('https://cdn.shopify.com/s/files/1/0565/9757/7916/products/Carrie_1_bdb3f947-ff8c-45c5-8adf-64141da98be7_1194x.jpg?v=1632988489', 'The Carrie Cupcake', 'Reenact our favorite SATC scene with a crush-worthy vanilla cupcake topped with pink vanilla buttercream and a daisy.', 4.00),
-- ('https://cdn.shopify.com/s/files/1/0565/9757/7916/products/VALENTINE_SMINICUPCAKES12PK_4_dc86bc0b-37cc-4b0c-821d-da9ed776674e_1280x.jpg?v=1641333128', 'Valentine’s Mini Cupcake Assortment', 'Share the love with three dozen of our world-famous mini chocolate and vanilla cupcakes, all topped with an assortment of our vanilla and chocolate buttercream and Valentine’s Day decorations.', 50.00 ),
-- ('https://cdn.shopify.com/s/files/1/0565/9757/7916/products/Mini_Icer_Assortment_12PK_7_f6ccfd0c-e5b8-4610-8abb-d10934bfb125_1194x.jpg?v=1633492352', 'Classic Mini Cupcake Assortment', 'Keep it classy with our medley of vanilla and chocolate cupcakes topped with vanilla and chocolate buttercream—and, of course, sprinkles!', 50.00),
-- ('https://cdn.shopify.com/s/files/1/0565/9757/7916/products/Mini_Choc_Choc_12PK_3_1194x.jpg?v=1633415327', 'Classic Chocolate Mini Cupcakes', 'Small in size, huge in flavor: Our mini chocolate cupcakes are made with our light and moist cake batter and topped with vanilla or chocolate buttercream.', 50.00)


