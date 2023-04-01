import React, { useState } from "react";
import ModuleMenu from "./ModuleMenu";
import ModuleContent from "./ModuleContent";
import Quiz from "./Quiz";

const NounsForNewbies = () => {
  const [activeModule, setActiveModule] = useState(0);
  const [modulesPassed, setModulesPassed] = useState([
    true,
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
      question: "What are Nouns?",
      options: [
        "A unique type of NFT collectible that are part of NounsDAO, a decentralized autonomous organization that manages the Nouns project.",
        "A visual language of symbols and icons used to communicate ideas and concepts.",
        "A type of physical collectible that can be replicated or duplicated.",
      ],
      correctAnswer: 0,
    },
    {
      question: "What is a DAO?",
      options: [
        "A decentralized autonomous organization that's run entirely on the blockchain.",
        "A type of organization that relies on a centralized authority or middleman to operate.",
        "A physical organization that operates using traditional business methods.",
      ],
      correctAnswer: 0,
    },
    {
      question: "When was NounsDAO created?",
      options: ["2018", "2008", "2021"],
      correctAnswer: 2,
    },
    {
      question: "How are Nouns created?",
      options: [
        "Using a combination of four different traits: head, noogles, body, and accessories.",
        "By randomly generating pixel images.",
        "By curating images from different artists.",
      ],
      correctAnswer: 0,
    },
    {
      question: "What do noogles symbolize in the NounsDAO?",
      options: [
        "The creativity and imagination at the heart of the Nouns project.",
        "The financial value of Nouns.",
        "The governance structure of NounsDAO.",
      ],
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
export default NounsForNewbies;
