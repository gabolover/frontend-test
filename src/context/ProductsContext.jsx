import { createContext, useEffect, useState } from "react";
import { cacheData, getCachedData } from "../services/cacheService";
import { API_URL } from "../config";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      let productsCache = await getCachedData("products");
      if (!productsCache) {
        const response = await fetch(`${API_URL}/api/product`);
        const data = await response.json();
        await cacheData("products", data);
        productsCache = data;
      }
      setProducts(productsCache);
    };

    getProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
