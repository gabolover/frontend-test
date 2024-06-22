import { createContext, useState } from "react";
import { API_URL } from "../config";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState(() => {
    const cartStorage = JSON.parse(localStorage.getItem("cart")) || [];
    return cartStorage;
  });

  const addToCart = async (product) => {
    try {
      setLoading(true);
      await fetch(`${API_URL}/api/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: product.id,
          colorCode: product.color,
          storageCode: product.storage,
        }),
      });

      const productInCartIndex = cart.findIndex(
        (item) =>
          item.id === product.id &&
          item.color === product.color &&
          item.storage === product.storage
      );

      if (productInCartIndex >= 0) {
        const newCart = structuredClone(cart);
        newCart[productInCartIndex].quantity += 1;
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
      } else {
        setCart((prev) => [...prev, { ...product, quantity: 1 }]);
        localStorage.setItem(
          "cart",
          JSON.stringify([...cart, { ...product, quantity: 1 }])
        );
      }
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const deleteFromCart = (productId, color, storage) => {
    const newCart = cart.filter(
      (item) =>
        !(
          item.id === productId &&
          item.color === color &&
          item.storage === storage
        )
    );
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, loading, deleteFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
