import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="mb-4 flex w-full items-center justify-between rounded-3xl border-2 p-4 desktop:p-8">
      <div className="desktop:w-fin w-1/2">
        <img src={logo} alt="" />
      </div>
      <div className="flex h-full flex-col items-center gap-1 rounded-xl bg-white px-5 py-3 desktop:px-7">
        <span className="text-indigo-600">score</span>
        <span className="text-5xl font-bold">10</span>
      </div>
    </header>
  );
};

export default Header;
