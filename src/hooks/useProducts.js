import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};
