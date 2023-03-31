import React from "react";

const ModuleMenu = ({
  activeModule,
  setActiveModule,
  modulesPassed,
  completedModules,
}) => {
  return (
    <div className="w-1/4">
      {modulesPassed.map((modulePassed, index) => (
        <div
          key={index}
          className={`p-4 ${
            activeModule === index
              ? "bg-blue-500 text-white"
              : completedModules[index]
              ? "bg-green-500 text-white"
              : "bg-gray-300"
          } ${modulePassed ? "cursor-pointer" : "cursor-not-allowed"}`}
          onClick={() => modulePassed && setActiveModule(index)}
        >
          <span>Module {index + 1}</span>
        </div>
      ))}
    </div>
  );
};

export default ModuleMenu;
