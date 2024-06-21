import { useEffect, useState } from "react";
import { cacheData, getCachedData } from "../services/cacheService";
import { API_URL } from "../config";

export const UseProductsDetails = (productId) => {
  const [product, setProduct] = useState({}); //
  const id = productId;

  useEffect(() => {
    const getProduct = async () => {
      let productCache = await getCachedData("product");
      if (!productCache || productCache.id !== id) {
        const response = await fetch(`${API_URL}/api/product/${id}`);
        const data = await response.json();
        await cacheData("product", data);
        productCache = data;
      }

      setProduct({
        id: productCache.id,
        brand: productCache.brand,
        model: productCache.model,
        price: productCache.price,
        cpu: productCache.cpu,
        ram: productCache.ram,
        os: productCache.os,
        displayResolution: productCache.displayResolution,
        battery: productCache.battery,
        primaryCamera: productCache.primaryCamera,
        secondaryCamera: productCache.secondaryCmera,
        displaySize: productCache.displaySize,
        img: productCache.imgUrl,
        weight: productCache.weight,
        options: productCache.options,
      });
    };
    getProduct();
  }, [id]);

  return product;
};
