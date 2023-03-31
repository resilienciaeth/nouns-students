import React, { useState } from "react";
import ModuleMenu from "./ModuleMenu";
import ModuleContent from "./ModuleContent";
import Quiz from "./Quiz";

const Web3ForNewbies = () => {
  const [activeModule, setActiveModule] = useState(0);
  const [modulesPassed, setModulesPassed] = useState([true, false, false]);
  const [completedModules, setCompletedModules] = useState([false]);

  const handleQuizAnswer = (isCorrect) => {
    if (isCorrect) {
      setModulesPassed((prevState) =>
        prevState.map((passed, index) =>
          index === activeModule + 1 ? true : passed
        )
      );
      setCompletedModules((prevState) =>
        prevState.map((completed, index) =>
          index === activeModule ? true : completed
        )
      );
      setActiveModule((prevState) => prevState + 1);
    }
  };

  const quizData = [
    {
      question: "What is Web3?",
      options: [
        "The next generation of the internet that's being developed, aimed at creating a more decentralized, open, and user-controlled internet.",
        "A type of web browser used for gaming.",
        "An online shopping website.",
      ],
      correctAnswer: 0,
    },
  ];

  return (
    <div className="flex">
      <ModuleMenu
        activeModule={activeModule}
        setActiveModule={setActiveModule}
        modulesPassed={modulesPassed}
        completedModules={completedModules}
      />
      <div>
        <ModuleContent activeModule={activeModule} />
        <Quiz
          question={quizData[0].question}
          options={quizData[0].options}
          correctAnswer={quizData[0].correctAnswer}
          handleQuizAnswer={handleQuizAnswer}
        />
      </div>
    </div>
  );
};

export default Web3ForNewbies;
