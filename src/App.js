import "./App.css";
import UseEffectHook from "./components/UseEffectHook";
import UseReducerHook from "./components/UseReducerHook";
import UseStateHook from "./components/UseStateHook";

function App() {
  return (
    <div className="overflow-hidden">
      <h1 className="w-full bg-violet-700 text-white font-bold p-8 border-4 border-black text-center">
        Welcome to all of the React Hooks!!
      </h1>

      <UseStateHook />

      <UseReducerHook />

      <UseEffectHook />
    </div>
  );
}

export default App;
