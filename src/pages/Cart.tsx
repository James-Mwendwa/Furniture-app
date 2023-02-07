import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { FurnitureData } from "../pages/Catalog";

const Cart = () => {
  const { increaseCartQuantity, cartItems } = useContext(ShoppingCartContext);
  console.log(FurnitureData);
  return <h2>cart items</h2>;
};

export default Cart;
