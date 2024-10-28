import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../Product/Product";


const Chart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("ecommerce.json")
    .then((data) => setProducts(data.data));
  }, []);

  return (
    <div>
      {products.map((produtc) => (
        <Product key={produtc.id} product={produtc}></Product>
      ))}
    </div>
  );
};

export default Chart;
