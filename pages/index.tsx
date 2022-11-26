import type { GetServerSideProps, NextPage } from "next";

import Card from "../components/Card";
import Head from "next/head";
import Header from "../components/Header";
import Stripe from "stripe";
import styles from "../styles/Home.module.css";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
    apiVersion: "2022-11-15",
  });

  const res = await stripe.prices.list({
    limit: 10,
    expand: ["data.product"],
  });

  const prices = res.data.filter((price) => {
    return price.active;
  });

  return {
    props: {
      prices,
    },
  };
};
type Props = {
  prices: Stripe.Price[];
};

const Home: NextPage<Props> = ({ prices }) => {
  return (
    <main className="bg-gray-100 min-h-screen">
      <div className={styles.container}>
        <Head>
          <title>Pure by Mel</title>
          <meta
            name="description"
            content="We sell fresh, homemade Smoothies drinks. We make one thing and we are good at it."
          />
          <link rel="icon" href="/public/favicon.ico" />
        </Head>
      </div>
      <Header />
      <div className="max-w-5xl mx-auto py-8">
        <div className="flex items-center justify-between border-b pb-3">
          <h1 className="font-semibold tracking-wide leading-10 text-xl lg:text-3xl">
            Shop Now
          </h1>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {prices.map((p) => (
            <Card key={p.id} price={p} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
