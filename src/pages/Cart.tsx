import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { FurnitureData } from "../pages/Catalog";

const Cart = () => {
  const { increaseCartQuantity, cartItems } = useContext(ShoppingCartContext);

  const furnitureData = Object.values(FurnitureData);
  console.log(furnitureData);

  return (
    <div>
      <h2>Items</h2>
    </div>
  );
};

export default Cart;
