import React from "react";

const NewsCard = ({ image, title, widthClass }) => (
  <div
    className={`relative w-full h-[250px] rounded-3xl shadow-2xl group mb-6 ${widthClass} overflow-hidden overflow-x-scroll mx-auto transform transition-all duration-300 hover:scale-105 hover:rotate-2 hover:shadow-xl`}
  >
    <img
      src={image}
      alt={title}
      className="rounded-lg w-full h-full object-cover"
    />
    <div className="absolute bottom-0 h-[30%] left-0 w-full p-4 bg-white bg-opacity-75 shadow-lg transition-shadow duration-300 group-hover:shadow-2xl">
      <h3 className="font-semibold text-[16px] mb-2">{title}</h3>
    </div>
  </div>
);

const NewsSection = () => {
  return (
    <div className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Stay updated on the Nouns Ecosystem
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <NewsCard
            image="/assets/nouns1.svg"
            title="NounsDAO announces partnership with XYZ"
            widthClass="md:col-span-2"
          />
          <NewsCard
            image="/assets/nouns1.svg"
            title="NounsDAO releases new platform"
            widthClass="md:col-span-4"
          />
          <NewsCard
            image="/assets/nouns1.svg"
            title="NounsDAO wins prestigious award"
            widthClass="md:col-span-2"
          />
          <NewsCard
            image="/assets/nouns2.svg"
            title="NounsDAO launches NFT marketplace"
            widthClass="md:col-span-2"
          />
          <NewsCard
            image="/assets/nouns2.svg"
            title="NounsDAO onboards new members"
            widthClass="md:col-span-2"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
