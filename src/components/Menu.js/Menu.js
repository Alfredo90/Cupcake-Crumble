import axios from "axios";
import MenuCard from "./MenuCard";
import { useState, useEffect } from "react";

const Menu = () => {
  const [products, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('/cupcakes')
      .then(({ data }) => {
        setProduct(data);
        setIsLoading(false);
      })
      .catch(setError);
  }, []);

  const addToCart = (cupcakeId) => {
    console.log(cupcakeId)
    axios
    .post(`/cart/${cupcakeId}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }




  return (
    <ul className="flex flex-row flex-wrap ">
      {products.map(cupcake => (
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
