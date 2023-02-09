import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const Cart = () => {
  const {
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    cartItems,
  } = useContext(ShoppingCartContext);

  return (
    <>
      {cartItems.map((item) => {
        return (
          <>
            <div key={item.id}>
              <img src={item.img} alt="" />
              <h2>{item.price}</h2>
              <h2>{item.desc}</h2>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Cart;
