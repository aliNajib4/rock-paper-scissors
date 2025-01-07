import Item from "./Item";
import triangle from "../assets/bg-triangle.svg";
import type TTypes from "../types/types";

const types: [TTypes, TTypes, TTypes] = ["rock", "paper", "scissors"];

const Game = () => {
  return (
    <div className="relative">
      <div className="w-40 md:w-80 desktop:w-96">
        <img src={triangle} alt="triangle" className="w-full" />
      </div>
      {types.map((type) => (
        <Item type={type} key={type} />
      ))}
    </div>
  );
};

export default Game;
