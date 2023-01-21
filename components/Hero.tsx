import { useEffect, useState } from "react";

import AnimatedText from "react-animated-text-content";
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
  }, [setLoading]);

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
              <AnimatedText
                type="words"
                animation={{
                  x: "500px",
                  y: "-20px",
                  scale: 1.1,
                  ease: "ease-in-out",
                }}
                animationType="float"
                interval={6}
                duration={1}
                tag="div"
                className="animated-paragraph"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
              >
                WELCOME
              </AnimatedText>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
