import { fetcher, shootFireworks } from "../lib/utils";

import { AiOutlineCheck } from "react-icons/ai";
import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

const Success: NextPage = () => {
  const { data, error } = useSWR(
    () => `/api/checkout_sessions/${session_id}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      shootFireworks();
      clearCart();
    }
  }, [data]);

  const {
    query: { session_id },
  } = useRouter();

  return (
    <div className="container xl:max-w-screen-xl mx-auto py-12 px-6 text-center">
      {error ? (
        <div className="p-2 rounded-md bg-rose-100 text-rose-500 max-w-md mx-auto">
          <p className="text-lg">Sorry, something went wrong!</p>
        </div>
      ) : !data ? (
        <div className="p-2 rounded-md bg-gray-100 text-gray-500 max-w-md mx-auto">
          <p className="text-lg animate-pulse">Loading...</p>
        </div>
      ) : (
        <div className="py-4 px-8 rounded-md bg-gray-100 max-w-lg mx-auto">
          <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
            <AiOutlineCheck className="w-12 h-12 flex-shrink-0 text-green-600" />
            <span>Thanks for your order!</span>
          </h2>
          <p className="text-lg mt-3">Check your inbox for the receipt.</p>
        </div>
      )}
    </div>
  );
};

export default Success;
function clearCart() {
  throw new Error("Function not implemented.");
}
