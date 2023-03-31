import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <img
          src="/assets/noogles1.png"
          alt="Nouns Noggles"
          className="mx-auto mb-6"
        />
        <h1 className="text-[50px] font-bold mb-4 nouns-font">
          Welcome to the new world
        </h1>
        <p className="text-xl font-bold text-gray-700">
          We get it. So many new terms and so little time.
          <br /> We make it easy for you to understand this web3 thing.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
