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

  return (
    <ul className="flex flex-row flex-wrap ">
      {products.map(cupcake => (
        <MenuCard
          key={cupcake.cupcake_id}
          cupcake={cupcake}
        />
      ))}
    </ul>
  );
};

export default Menu;
