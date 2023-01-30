import { createContext, useContext, ReactNode, useState } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};
type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  return (
    <ShoppingCartContext.Provider value={{ cartItems: 1 }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
