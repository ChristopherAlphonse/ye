import { Suspense, useEffect, useState } from "react";

import { FunctionComponent } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import React from "react";

const Hero: FunctionComponent = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  return (
    <div className="">
      {loading ? (
        <PropagateLoader
          color="#f43f5e"
          size={20}
          speedMultiplier={2}
          cssOverride={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            minHeight: "100vh",
            width: "100%",
            background: "#fff",
          }}
        />
      ) : (
        <>
          <div className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed h-[100vh] transition-opacity-5 transform scale-110 ease-in-out group-hover:duration-500  max-w-full ">
            <div
              className="grid h-screen place-items-center 
              mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 lg:text-9xl lg:text-10xl dark:text-white
            
            "
            >
              WELCOME
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
