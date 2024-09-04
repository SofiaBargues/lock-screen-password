import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState("");

  const masterPassword = ["3", "1", "4", "1"];

  function handleClick(number: string) {
    const newPassword = [...password, number];
    if (password.length < 4) {
      setPassword(newPassword);
    }
    if (newPassword.join() === masterPassword.join()) {
      setIsCorrect("true");
    }
    if (
      newPassword.length === 4 &&
      newPassword.join() != masterPassword.join()
    ) {
      setIsCorrect("false");
      setPassword([]);
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-3xl w-52 font-extralight  flex justify-center border-2 h-12 border-slate-700 m-6">
        {password}
      </div>
      {isCorrect != "true" ? (
        <div>
          <div className="flex  justify-center">
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-14 text-lg w-14 m-2 text-white"
              onClick={() => handleClick("1")}
            >
              1
            </button>
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-14 text-lg w-14 m-2 text-white"
              onClick={() => handleClick("2")}
            >
              2
            </button>
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-14 text-lg w-14 m-2 text-white"
              onClick={() => handleClick("3")}
            >
              3
            </button>
          </div>
          <div className="flex  justify-center">
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-14 text-lg w-14 m-2 text-white"
              onClick={() => handleClick("4")}
            >
              4
            </button>
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-14 text-lg w-14 m-2 text-white"
              onClick={() => handleClick("5")}
            >
              5
            </button>
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-14 text-lg w-14 m-2 text-white"
              onClick={() => handleClick("6")}
            >
              6
            </button>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-14 text-lg w-14 m-2 text-white"
              onClick={() => handleClick("7")}
            >
              7
            </button>
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-14 text-lg w-14 m-2 text-white"
              onClick={() => handleClick("8")}
            >
              8
            </button>
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-14 text-lg w-14 m-2 text-white"
              onClick={() => handleClick("9")}
            >
              9
            </button>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-14 text-lg w-14 m-2 text-white"
              onClick={() => handleClick("0")}
            >
              0
            </button>
          </div>
        </div>
      ) : null}
      {isCorrect === "true" ? (
        <div className="text-6xl font-extralight  ">Correct!</div>
      ) : isCorrect === "false" ? (
        <div className="text-3xl font-extralight  flex justify-center mt-7">
          It is incorrect
        </div>
      ) : null}
    </div>
  );
}

export default App;
