import { Header, Rules } from "./components";

const App = () => {
  return (
    <div className="h-screen w-screen bg-background-gradient py-5">
      <div className="container flex h-full flex-col items-center justify-between">
        <Header />

        <Rules />
      </div>
    </div>
  );
};

export default App;
