import React, { useState } from "react";
import ModuleMenu from "./ModuleMenu";
import ModuleContent from "./ModuleContent";
import Quiz from "./Quiz";

const Web3ForNewbies = () => {
  const [activeModule, setActiveModule] = useState(0);
  const [modulesPassed, setModulesPassed] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);
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
    {
      question: "What is the blockchain?",
      options: [
        "A type of cryptocurrency.",
        "A digital ledger that stores information in a secure, decentralized and transparent way.",
        "A type of web browser.",
      ],
      correctAnswer: 1,
    },
    {
      question: "How are blocks linked together in a blockchain?",
      options: [
        "By a central authority",
        "In a random order",
        "In a chronological order",
      ],
      correctAnswer: 2,
    },
    {
      question: "What is cryptocurrency?",
      options: [
        "A type of digital or virtual currency that uses encryption techniques to secure transactions and control the creation of new units.",
        "A physical coin made of precious metals.",
        "A financial instrument issued by a government or financial institution.",
      ],
      correctAnswer: 0,
    },
    {
      question: "What is Ethereum?",
      options: [
        "A decentralized, open-source blockchain platform that allows developers to build decentralized applications using smart contracts.",
        "A type of digital currency that's used to power transactions on the Ethereum network.",
        "A centralized platform that's controlled by a single company or government.",
      ],
      correctAnswer: 0,
    },
    {
      question: "Did you create your wallet?",
      options: ["Yes", "No"],
      correctAnswer: 0,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row">
      <ModuleMenu
        activeModule={activeModule}
        setActiveModule={setActiveModule}
        modulesPassed={modulesPassed}
        completedModules={completedModules}
      />
      <div
        className="h-screen max-h-screen w-full overflow-y-auto"
        style={{ height: "calc(100vh - 60px)" }}
      >
        <ModuleContent
          activeModule={activeModule}
          quizData={quizData[activeModule]}
          handleQuizAnswer={handleQuizAnswer}
        />
      </div>
    </div>
  );
};
export default Web3ForNewbies;
