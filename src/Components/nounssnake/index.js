import React, { useState, useRef, useEffect } from "react";
import { useInterval } from "./useInterval";
import {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS,
} from "./constants";

const Snake = () => {
  const canvasRef = useRef();
  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [snakeHeadImg, setSnakeHeadImg] = useState(null);
  const [appleImg, setAppleImg] = useState(null);

  useInterval(() => gameLoop(), speed);

  useEffect(() => {
    const snakeImg = new Image();
    snakeImg.src = "/assets/nouns1.svg";
    snakeImg.onload = () => setSnakeHeadImg(snakeImg);

    const img = new Image();
    img.src = "/assets/noogles1.png";
    img.onload = () => setAppleImg(img);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        event.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
  };

  const moveSnake = ({ keyCode }) =>
    keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);

  const createApple = () =>
    apple.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)));

  const checkCollision = (piece, snk = snake) => {
    if (
      piece[0] * SCALE >= CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE[1] ||
      piece[1] < 0
    )
      return true;

    for (const segment of snk) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) return true;
    }
    return false;
  };

  const checkAppleCollision = (newSnake) => {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      let newApple = createApple();
      while (checkCollision(newApple, newSnake)) {
        newApple = createApple();
      }
      setApple(newApple);
      setScore(score + 1); // Update the score
      return true;
    }
    return false;
  };

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) endGame();
    if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
    setSnake(snakeCopy);
  };

  const startGame = () => {
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDir([0, -1]);
    setSpeed(SPEED);
    setGameOver(false);
    setScore(0); // Reset the score
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    if (snakeHeadImg) {
      context.drawImage(snakeHeadImg, snake[0][0], snake[0][1], 1, 1);
    } else {
      context.fillStyle = "pink";
      context.fillRect(snake[0][0], snake[0][1], 1, 1);
    }

    context.fillStyle = "#E0D7D4";
    snake.slice(1).forEach(([x, y]) => context.fillRect(x, y, 1, 1));

    if (appleImg) {
      context.drawImage(appleImg, apple[0], apple[1], 1, 1);
    } else {
      context.fillStyle = "lightblue";
      context.fillRect(apple[0], apple[1], 1, 1);
    }
  }, [snake, apple, gameOver, snakeHeadImg, appleImg]);

  return (
    <div className="pb-10">
      <div
        className="items-center justify-center hidden md:flex max-h-[600px]"
        role="button"
        tabIndex="0"
        onKeyDown={(e) => moveSnake(e)}
      >
        <canvas
          className="mt-10"
          style={{ border: "1px solid black" }}
          ref={canvasRef}
          width={`${CANVAS_SIZE[0]}px`}
          height={`${CANVAS_SIZE[1]}px`}
        />
        <div className="flex flex-col items-center ml-10 space-y-4">
          <div>Score: {score}</div>
          <button
            className="bg-blue-400 rounded-3xl px-4 py-2"
            onClick={startGame}
          >
            Start Game
          </button>
          {gameOver && <div className="text-red-500 font-bold">GAME OVER!</div>}
        </div>
      </div>
      <div className="nouns-font px-4 text-center flex md:hidden text-[30px] mt-20">
        Please join us on Desktop to play this game. Mobile version is coming
        soon
      </div>
    </div>
  );
};

export default Snake;
