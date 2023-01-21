import { FunctionComponent, useContext } from "react";
import {
  getPriceTotal,
  getProductDescription,
  getProductImage,
  getProductName,
} from "../utils/Computed";

import CartContext from "./context/CartContext";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

type CardProps = {
  price: Stripe.Price;
};

const Card: FunctionComponent<CardProps> = ({ price }) => {
  const { add } = useContext(CartContext);

  const addToCart = (p: Stripe.Price) => {
    if (add) {
      add(p);
    }
  };
  return (
    <div className="border rounded-md p-6 group shadow-lg">
      <div className="relative">
        <div className=" rounded-lg overflow-hidden relative w-full h-64 group-hover:transform group-hover:scale-110 group-hover:ease-in-out group-hover:duration-500">
          <Image
            priority
            decoding="async"
            width={20}
            height={20}
            quality={100}
            sizes="320 640 750"
            src={getProductImage(price.product)}
            alt={getProductDescription(price.product)}
            className="w-full h-full object-center object-cover"
          />
        </div>

        {/* Name + Rating */}
        <div className="mt-4 sm:mt-8">
          <p className="font-semibold text-lg capitalize">
            {getProductName(price.product)}
          </p>
        </div>

        {/* Price + CTA */}
        <div className="mt-4 flex items-center justify-between space-x-2">
          <div>
            <p className="text-gray-500">Price</p>
            <p className="text-lg font-semibold">${getPriceTotal(price)}</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={() => addToCart(price)}
          className="relative w-full flex bg-gray-200 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:text-gray-800 hover:bg-gray-300 ease-in"
        >
          Add to bag
          <span className="sr-only">, {getProductName(price.product)}</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
