import type { GetServerSideProps, NextPage } from "next";

import Card from "../components/Card";
import Stripe from "stripe";

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
    <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
      <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
        {prices.map((p) => (
          <Card key={p.id} price={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;
