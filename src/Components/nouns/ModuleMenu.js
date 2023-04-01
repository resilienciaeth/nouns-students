import React, { useState } from "react";
import moduleData from "./moduleData";

const ModuleMenu = ({
  activeModule,
  setActiveModule,
  modulesPassed,
  completedModules,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="relative w-full md:w-1/4">
      <button
        className="w-full py-2 px-4 bg-blue-500 text-white md:hidden"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        Select Module
      </button>
      <div
        className={`absolute md:static w-full md:w-auto bg-white md:bg-transparent z-10 ${
          isDropdownOpen ? "block" : "hidden"
        } md:block`}
      >
        {modulesPassed.map((modulePassed, index) => (
          <div
            key={index}
            className={`p-4 nouns-font ${
              activeModule === index
                ? "bg-blue-500 text-white"
                : completedModules[index]
                ? "bg-green-500 text-white"
                : "bg-gray-300"
            } ${modulePassed ? "cursor-pointer" : "cursor-not-allowed"}`}
            onClick={() => {
              modulePassed && setActiveModule(index);
              setIsDropdownOpen(false);
            }}
          >
            <span>{moduleData[index].title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModuleMenu;
