import "../styles/globals.css";

import CartContext, {
  CartContextProps,
} from "../components/context/CartContext";
import { useEffect, useState } from "react";

import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { Stripe } from "stripe";
import _ from "lodash";

function MyApp({ Component, pageProps }: AppProps) {
  const [items, setItems] = useState<Stripe.Price[]>([]);

  const remove = (priceID: string) => {
    let i = _.reject(items, function (item) {
      return item.id === priceID;
    });
    setItems(i);
  };

  const add = (product: Stripe.Price) => {
    let i = _.union(items, [product]);
    setItems(i);
  };

  const cartContext: CartContextProps = {
    items: items,
    add: add,
    remove: remove,
  };

  return (
    <>
      <Head>
        <title>Pure by Mel</title>
        <meta
          name="description"
          content="We sell fresh, homemade Smoothies drinks. We make one thing and we are good at it."
        />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <CartContext.Provider value={cartContext}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <Hero />

          <main className="flex-grow">
            <Component {...pageProps} />
          </main>

          <Footer />
        </div>
      </CartContext.Provider>
    </>
  );
}

export default MyApp;
