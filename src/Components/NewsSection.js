import React, { useRef } from "react";
import CustomCursor from "./CustomCursor";

const NewsCard = ({ image, title, widthClass, url }) => (
  <div
    className={`relative w-full h-[250px] rounded-3xl shadow-2xl group mb-6 ${widthClass} overflow-hidden overflow-x-scroll mx-auto transform transition-all duration-300 hover:scale-105 hover:rotate-2 hover:shadow-xl cursor-pointer`}
    onClick={() => (window.location.href = url)}
  >
    <img
      src={image}
      alt={title}
      className="rounded-lg w-full h-full object-cover"
    />
    <div className="absolute bottom-0 h-[30%] left-0 w-full p-4 bg-white bg-opacity-75 shadow-lg transition-shadow duration-300 group-hover:shadow-2xl">
      <h3 className="font-semibold nouns-font text-[16px] mb-2">{title}</h3>
    </div>
  </div>
);

const NewsSection = () => {
  const sectionRef = useRef(null);
  return (
    <div className="py-20">
      <CustomCursor
        cursorImage="/assets/cursor1.png"
        containerRef={sectionRef}
      />
      <h2 className="text-3xl nouns-font font-bold mb-12 text-center">
        Stay updated on the Nouns Ecosystem
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <NewsCard
            image="/assets/news1.png"
            title="NounsDAO Approves Proposal for Feature-Length NFT Movie"
            widthClass="md:col-span-4"
            url="https://www.coindesk.com/web3/2023/03/15/nounsdao-approves-proposal-for-feature-length-nft-movie/"
          />
          <NewsCard
            image="/assets/news2.webp"
            title="NounsDAO Launches Thrilling NFT Comic Book Collection"
            widthClass="md:col-span-2"
            url="https://nftevening.com/nounsdao-launches-thrilling-nft-comic-book-collection/"
          />
          <NewsCard
            image="/assets/news3.png"
            title="Prop211's Donation allows Nouns Art to be displayed in Museum"
            widthClass="md:col-span-2"
            url="https://twitter.com/Nounscn/status/1641044874358304768?s=20"
          />
          <NewsCard
            image="/assets/news4.jpeg"
            title="Nouns Hack Week is happening NOW through April 2nd"
            widthClass="md:col-span-2"
            url="https://hackweek.wtf/"
          />
          <NewsCard
            image="/assets/news5.png"
            title="NFTNOW Talks About Why Nouns Matter"
            widthClass="md:col-span-2"
            url="https://nftnow.com/guides/an-nft-every-day-a-guide-to-the-nouns-nft-project-dao-and-ecosystem/"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
