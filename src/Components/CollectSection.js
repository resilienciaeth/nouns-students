import React, { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const CollectSection = () => {
  const nfts = [
    {
      id: 1,
      name: "Nouns Student #1",
      image: "/assets/nounsstudent.png",
      price: "0.005 ETH",
      priceUSD: "$8",
    },
    {
      id: 2,
      name: "Nouns Student #2",
      image: "/assets/nounsstudent.png",
      price: "0.005 ETH",
      priceUSD: "$8",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const moveLeft = () => {
    setCurrentIndex(currentIndex === 0 ? nfts.length - 1 : currentIndex - 1);
  };

  const moveRight = () => {
    setCurrentIndex(currentIndex === nfts.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="w-full bg-[#E0D7D4] pt-10 flex flex-col">
      <div className="flex flex-col items-center py-10 px-4 md:px-20 justify-center">
        <h1 className="nouns-font text-[24px] md:text-[40px] mb-4">
          Let's join the Nouns Ecosystem
        </h1>
        <p className="text-sm px-2 md:px-[40px] text-center">
          Nouns Students is a special collection designed for people that are
          joining the NFT Space. After you have succesfully completed the whole
          student program, you will be able to mint your Nouns Students NFT.
          This is our approach to helping you become part of the Nouns
          Ecosystem.
        </p>
      </div>
      <div className="flex flex-col-reverse md:flex-row h-full w-full bg-[#E0D7D4] ">
        <div className="w-full md:w-1/2 bg-[#E0D7D4] items-end justify-center flex h-auto md:h-[70vh] ">
          <img
            src={nfts[currentIndex].image}
            alt={nfts[currentIndex].name}
            className="max-w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 bg-[#E0D7D4] pt-10 flex flex-col h-full items-start justify-center px-4 md:pt-20">
          <div className="flex bg-[#E0D7D4] text-white space-x-2 mt-5">
            <BsFillArrowLeftCircleFill onClick={moveLeft} size={25} />
            <BsFillArrowRightCircleFill onClick={moveRight} size={25} />
          </div>
          <h3 className="text-2xl md:text-4xl nouns-font font-semibold mb-2">
            {nfts[currentIndex].name}
          </h3>
          <p className="text-lg font-semibold mb-4">
            {nfts[currentIndex].price} | {nfts[currentIndex].priceUSD} + gas
          </p>
          <p className="text-[10px] mr-0 md:mr-20 font-semibold mb-4">
            All the funds collected go directly to the treasury. You have
            already created your Metamask Wallet on the respective lesson of the
            course. However, you can go ahead and get your Nouns Student with a
            credit card, and Crossmint will create a wallet for you. After that,
            you can simply transfer your Nouns Student to your Wallet.
          </p>
          <p className="text-[10px] mr-0 md:mr-20 font-semibold mb-4">
            The collection will be available for students that have succesfully
            completed the Nouns Student Program starting May 1st. The art will
            be revealed then.
          </p>
          <div className="bg-[#E0D7D4]">
            <button className="bg-black hover:opacity-[0.3] hover:cursor-not-allowed text-white py-2 px-4 rounded-lg mr-4">
              Get with Crypto
            </button>
            <button className="bg-black hover:opacity-[0.3] hover:cursor-not-allowed text-white py-2 px-4 rounded-lg">
              Get with Fiat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectSection;
