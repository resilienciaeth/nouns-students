import React from "react";
import { Link } from "react-router-dom";
import moduleData from "./moduleData";
import Quiz from "./Quiz";

const ModuleContent = ({ activeModule, quizData, handleQuizAnswer }) => {
  if (activeModule >= moduleData.length) {
    return (
      <div className="flex flex-col items-center justify-start mt-20 h-full">
        <h1 className="nouns-font text-[30px] px-10 text-center">
          Congratulations! You just succesfully completed this module
        </h1>
        <p>
          You are now elegible to claim your Nouns Student NFT. We will let you
          know once it is available.
        </p>
        <Link to="/nouns">
          <button className="bg-blue-400 nouns-font px-4 py-2 text-[20px] rounded-3xl mt-4 text-white">
            Learn about Nouns
          </button>
        </Link>
      </div>
    );
  }

  const { title, subtitle, imageURL, paragraphs } = moduleData[activeModule];

  return (
    <div className="flex px-4 flex-col space-y-6 items-center py-20 justify-center">
      <h1 className="nouns-font text-center text-[40px]">{title}</h1>
      <h2 className="text-[20px] text-center">{subtitle}</h2>
      <img className="rounded-3xl max-w-[600px]" src={imageURL} alt={title} />
      {paragraphs.map((paragraph, index) => (
        <p className="md:px-10" key={index}>
          {paragraph}
        </p>
      ))}
      <Quiz
        question={quizData.question}
        options={quizData.options}
        correctAnswer={quizData.correctAnswer}
        handleQuizAnswer={handleQuizAnswer}
      />
    </div>
  );
};

export default ModuleContent;
