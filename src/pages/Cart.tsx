import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { CheckoutCard } from "../components/CheckoutCard";

const Cart = () => {
  const {
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    getItemQuantity,
    cartItems,
  } = useContext(ShoppingCartContext);

  type CartItemsType = {
    items: cartItems[];
  };

  const quantity = getItemQuantity(id);

  const total = (items: CartItemsType[]) => {
    items.reduce((prev: number, item) => prev + item.quantity * item.price, 0);
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <CheckoutCard />
      ) : (
        <div className="bg-bg p-3 w-3/4">
          {cartItems.map((item) => (
            <div className="m-2 bg-white" key={item.id}>
              <img className="w-48 h-30 rounded-xl m-3" src={item.img} alt="" />
              <h2 className="mx-3 text-sm">{item.desc}</h2>
              <h2 className="mx-3 my-1">${item.price}</h2>

              <div className="flex items-center justify-between">
                <button
                  className="bg-BGyellow text-white mx-3 mb-4 p-2 text-xs rounded-md font-medium align-center"
                  onClick={() => removeFromCart(item.id)}
                >
                  REMOVE
                </button>
                <div className="flex align-center">
                  <button
                    className="bg-BGyellow text-white mx-3 mb-4 p-2 text-sm rounded-md font-medium align-center"
                    onClick={() => decreaseCartQuantity(item.id)}
                  >
                    -
                  </button>
                  <p>{getItemQuantity(item.id)}</p>
                  <button
                    className="bg-BGyellow text-white mx-3 mb-4 p-2 text-sm rounded-md font-medium align-center"
                    onClick={() => increaseCartQuantity(item.id, item)}
                  >
                    +
                  </button>
                  <p>{total}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Cart;
