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
    <div>
      <h2>{question}</h2>
      {options.map((option, index) => (
        <div key={index}>
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
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Quiz;
