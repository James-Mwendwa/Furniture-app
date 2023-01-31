import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const Cart = () => {
  const { increaseCartQuantity } = useContext(ShoppingCartContext);
  console.log(increaseCartQuantity);
  return (
    <div>
      <p>img</p>
      <p>title</p>
      <p>price</p>
    </div>
  );
};

export default Cart;
