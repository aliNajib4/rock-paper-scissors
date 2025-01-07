import icon_rock from "./../assets/icon-rock.svg";
import icon_paper from "./../assets/icon-paper.svg";
import icon_scissors from "./../assets/icon-scissors.svg";
import TTypes from "../types/types";

type TProps = {
  type: TTypes;
};

const dataType: {
  [key: string]: { src: string; bgColor: string; position: string };
} = {
  rock: {
    src: icon_rock,
    bgColor: "bg-rock-gradient",
    position: "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
  },
  paper: {
    src: icon_paper,
    bgColor: "bg-paper-gradient",
    position: "top-0 right-0 translate-x-1/2 -translate-y-1/2",
  },
  scissors: {
    src: icon_scissors,
    bgColor: "bg-scissors-gradient",
    position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  },
};

const Item = ({ type }: TProps) => {
  const data = dataType[type];
  return (
    <div
      className={`absolute h-20 w-20 cursor-pointer rounded-full p-3 md:h-40 md:w-40 md:p-4 desktop:h-56 desktop:w-56 desktop:p-5 ${data.bgColor} ${data.position}`}
    >
      <div className="flex h-full items-center justify-center rounded-full bg-slate-200 shadow-item">
        <img src={data.src} alt={type} className="pointer-events-none w-1/2" />
      </div>
    </div>
  );
};

export default Item;
