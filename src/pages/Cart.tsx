import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { FurnitureData } from "../pages/Catalog";

const Cart = () => {
  const { increaseCartQuantity, cartItems } = useContext(ShoppingCartContext);
  return <h2>cart items { cartItems.length }</h2>;
};

export default Cart;
