import React, { useRef } from "react";
import { Link } from "react-router-dom";
import CustomCursor from "./CustomCursor";

const LearnCard = ({ image, title, to }) => (
  <Link
    className="relative w-full  rounded-b-lg rounded-t-xl shadow-lg transition-shadow duration-300 group-hover:shadow-2xl max-w-[300px] min-w-[200px] overflow-hidden overflow-x-scroll mx-auto mb-6 group"
    to={to}
    style={{ cursor: "none" }}
  >
    <div className="">
      <img
        src={image}
        alt={title}
        className="rounded-lg transform transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 w-full p-4 text-center bg-white bg-opacity-75 rounded-b-lg shadow-lg transition-shadow duration-300 group-hover:shadow-2xl">
        <h3 className="font-semibold nouns-font text-[24px]">{title}</h3>
      </div>
    </div>
  </Link>
);

const LearnSection = () => {
  const sectionRef = useRef(null);
  return (
    <div className="py-20" style={{ cursor: "none" }} ref={sectionRef}>
      <CustomCursor
        cursorImage="/assets/cursor1.png"
        containerRef={sectionRef}
      />
      <h2 className="text-3xl nouns-font font-bold mb-12 text-center">
        Learning web3 for newbies
      </h2>
      <p className="text-lg font-bold mb-12 px-4 md:px-20 text-center">
        This section is all about getting your comfortable with this new
        concepts. Our goal is to reduce the massive learning curve that
        currently present in web3. We have made all the content as easy to
        digest as possible. Let's get you started.
      </p>
      <div className="container mx-auto px-4">
        <div className="flex gap-10 overflow-hidden overflow-x-scroll carousel break-out pt-4">
          <LearnCard
            image="/assets/nouns1.svg"
            title="Web3 For Newbies"
            to="/web3"
          />

          <LearnCard
            image="/assets/nouns3.svg"
            title="Nouns For Newbies"
            to="/nouns"
          />
        </div>
      </div>
    </div>
  );
};

export default LearnSection;
