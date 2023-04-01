import React, { useState } from "react";

const Quiz = ({ question, options, correctAnswer, handleQuizAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      const isCorrect = selectedAnswer === correctAnswer;
      handleQuizAnswer(isCorrect);
    }
  };

  return (
    <div className="bg-[#E0D7D4] rounded-3xl md:w-[60%] flex flex-col py-10 items-left justify-center">
      <h2 className="text-[30px] nouns-font text-center">{question}</h2>
      {options.map((option, index) => (
        <div className="text-[14px] px-4" key={index}>
          <label>
            <input
              type="radio"
              name="quiz"
              value={index}
              checked={selectedAnswer === index}
              onChange={() => setSelectedAnswer(index)}
            />
            {option}
          </label>
        </div>
      ))}
      <div className="flex items-center justify-center mt-4">
        <button
          className="bg-blue-400 text-center px-4 w-[30%] rounded-3xl py-2 nouns-font text-[20px] "
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Quiz;
