import React from "react";

const Module = ({ module }) => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-2">{module.title}</h1>
      <h2 className="text-lg mb-4">{module.subtitle}</h2>
      <img src={module.image} alt={module.title} className="mb-4" />
      {module.paragraphs.map((paragraph, index) => (
        <p key={index} className="mb-4">
          {paragraph}
        </p>
      ))}
      <div className="mt-8">
        <h3 className="font-bold mb-2">{module.question}</h3>
        <ul>
          {module.answers.map((answer, index) => (
            <li key={index} className="mb-2">
              <input
                type="radio"
                id={`answer-${module.id}-${index}`}
                name={`answer-${module.id}`}
              />
              <label htmlFor={`answer-${module.id}-${index}`} className="ml-2">
                {answer}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Module;
