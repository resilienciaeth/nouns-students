import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#E0D7D4] py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm md:text-base">
          Built with{" "}
          <span role="img" aria-label="orange heart">
            🧡
          </span>{" "}
          by{" "}
          <a
            href="https://twitter.com/resilienciaeth"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-800"
          >
            @resilienciaeth
          </a>
          , for Hack Week.
          <br /> A platform for the future students of the web3 space.
        </p>
        <img
          src="/assets/noogles1.png"
          alt="Your Image Description"
          className="mt-2 mx-auto max-w-[40px] max-h-[20px] h-12 md:w-[60px] md:h-[30px]"
        />
      </div>
    </footer>
  );
};

export default Footer;
