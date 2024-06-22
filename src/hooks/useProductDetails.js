import { useEffect, useState } from "react";
import { getProduct } from "../services/product";

export const useProductsDetails = (productId) => {
  const [product, setProduct] = useState({}); //
  const id = productId;

  useEffect(() => {
    const getData = async () => {
      const product = await getProduct(id);
      setProduct(product);
    };
    getData();
  }, [id]);

  return product;
};
