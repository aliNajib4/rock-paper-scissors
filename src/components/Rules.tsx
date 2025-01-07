import { useRef } from "react";
import rulesImage from "../assets/image-rules.svg";
import icon_close from "../assets/icon-close.svg";

const Rules = () => {
  const dialog = useRef<HTMLDialogElement | null>(null);

  const showRules = () => {
    dialog.current?.showModal();
  };
  const closeRules = () => {
    dialog.current?.close();
  };
  return (
    <>
      <dialog ref={dialog} className="rounded-lg p-5">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-2xl">Rules</p>
          <button onClick={closeRules}>
            <img src={icon_close} alt="close icon" />
          </button>
        </div>
        <div>
          <img src={rulesImage} alt="rules" className="select-none" />
        </div>
      </dialog>
      <button
        onClick={showRules}
        className="self-center rounded-lg border px-4 py-2 text-xl uppercase text-white outline-none desktop:right-10 desktop:self-end"
      >
        rules
      </button>
    </>
  );
};

export default Rules;
