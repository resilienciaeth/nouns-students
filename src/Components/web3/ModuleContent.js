import React from "react";
import moduleData from "./moduleData";

const ModuleContent = ({ activeModule }) => {
  if (activeModule >= moduleData.length) {
    return (
      <div>
        <h1>End of Modules</h1>
        <p>All modules are completed. Congratulations!</p>
      </div>
    );
  }

  const { title, subtitle, imageURL, paragraphs } = moduleData[activeModule];

  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <img src={imageURL} alt={title} />
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default ModuleContent;
