import { createContext } from "react";

const AppContext = createContext({
  items: [],
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  getCartTotal: () => 0,
  getCartItemsCount: () => 0,
});

export default AppContext;