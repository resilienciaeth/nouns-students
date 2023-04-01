import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <div className="font-bold cursor-pointer text-xl max-w-[40px]">
                <img src="/assets/noogles1.png"></img>
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="md:flex justify-between items-center space-x-20">
              <div className="relative mx-2">
                <Dropdown title="Learn">
                  <a
                    href="/web3"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    web3 For Newbies
                  </a>
                  <a
                    href="/nouns"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Nouns for Newbies
                  </a>
                </Dropdown>
              </div>
              <div className="relative mx-2">
                <Dropdown title="Play">
                  <a
                    href="/nounssnake"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Nounish Snake
                  </a>
                </Dropdown>
              </div>
              <div className="relative mx-2">
                <Dropdown title="Community">
                  <a
                    href="https://nouns.center/projects"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Projects
                  </a>
                  <a
                    href="https://noun-o-talk.cohostpodcasting.com/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Podcast
                  </a>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <Link className="hidden md:block" to="https://nouns.wtf/">
            <button className="bg-blue-500 text-white text-[10px] font-bold py-2 px-4 rounded hidden md:block">
              NOUNS.WTF
            </button>
          </Link>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* Mobile menu items */}
          <a
            href="/web3"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700"
          >
            Web3 For Newbies
          </a>
          <a
            href="/nouns"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700"
          >
            Nouns For Newbies
          </a>
          <a
            href="/nounssnake"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700"
          >
            Nounish Snake
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
