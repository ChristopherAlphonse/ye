import Stripe from "stripe";
import { createContext } from "react";

export type CartContextProps = {
  items?: Stripe.Price[];
  remove?: (priceID: string) => void;
  add?: (product: Stripe.Price) => void;
};

const cartContextProps: CartContextProps = {};

const CartContext = createContext(cartContextProps);

export default CartContext;
