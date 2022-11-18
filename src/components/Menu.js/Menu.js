import axios from "axios";
import MenuCard from "./MenuCard";
import { useState, useEffect } from "react";

const Menu = ( ) => {
  const [products, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  //making an api request to retrieve data for products
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/cupcakes")
      .then(({ data }) => {
        setProduct(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, []);
  //Create a function making a api request to add item to user's cart
  const addToCart = (cupcakeId) => {
    console.log(cupcakeId);
    axios
      .post(`/cart/${cupcakeId}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //Mapping products and passing props to MenuCard component.
  return (
    <ul className="flex flex-row flex-wrap justify-center items-center   ">
      {products.map((cupcake) => (
        <MenuCard
          key={cupcake.cupcake_id}
          cupcake={cupcake}
          addToCart={addToCart}
        />
      ))}
    </ul>
  );
  };
  
  export default Menu;



