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
    <div className="bg-bg p-5">
      {cartItems.map((item) => (
        <div className="m-4 bg-white" key={item.id}>
          <img className="w-60 h-30 rounded-xl mb-2" src={item.img} alt="" />
          <h2>{item.price}</h2>
          <h2>{item.desc}</h2>
          <div className="flex items-center justify-between">
            <button onClick={() => removeFromCart(item.id)}>REMOVE</button>
            <div className="flex">
              <button onClick={() => increaseCartQuantity(item.id, item)}>
                -
              </button>

              <button onClick={() => decreaseCartQuantity(item.id)}>+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
