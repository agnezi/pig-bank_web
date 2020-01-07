import React from "react";
import Lottie from "react-lottie";

import * as animationData from "../../assets/lotie/pig-bank";

const MainPig = () => {
  const defaultOptions = {
    loot: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <>
      <Lottie options={defaultOptions} height={200} width={200} />
    </>
  );
};

export default MainPig;
