import { API_URL } from "../config";
import { cacheData, getCachedData } from "./cacheService";

export const getProduct = async (id) => {
  let productCache = await getCachedData("product");
  if (!productCache || productCache.id !== id) {
    const response = await fetch(`${API_URL}/api/product/${id}`);
    const data = await response.json();
    await cacheData("product", data);
    productCache = data;
  }

  return {
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
  };
};
