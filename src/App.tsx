import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState("");

  const masterPassword = ["4", "5", "6", "7"];

  function handleClick(number: string) {
    const newPassword = [...password, number];
    if (password.length < 4) {
      setPassword(newPassword);
    }
    if (newPassword.join() === masterPassword.join()) {
      setIsCorrect("true");
    }
    if (newPassword.join() != masterPassword.join()) {
      setIsCorrect("false");
    }
  }

  return (
    <div className="h-screen flex justify-center items-center">
      {isCorrect === "true" ? (
        <div>Correct</div>
      ) : isCorrect === "false" && password.length === 4 ? (
        <div>
          <div className="flex  justify-center">{password}</div>
          <div className="flex  justify-center">
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-5 w-5 m-2 text-white"
              onClick={() => handleClick("1")}
            >
              1
            </button>
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-5 w-5 m-2 text-white"
              onClick={() => handleClick("2")}
            >
              2
            </button>
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-5 w-5 m-2 text-white"
              onClick={() => handleClick("3")}
            >
              3
            </button>
          </div>
          <div className="flex  justify-center">
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-5 w-5 m-2 text-white"
              onClick={() => handleClick("4")}
            >
              4
            </button>
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-5 w-5 m-2 text-white"
              onClick={() => handleClick("5")}
            >
              5
            </button>
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-5 w-5 m-2 text-white"
              onClick={() => handleClick("6")}
            >
              6
            </button>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-5 w-5 m-2 text-white"
              onClick={() => handleClick("7")}
            >
              7
            </button>
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-5 w-5 m-2 text-white"
              onClick={() => handleClick("8")}
            >
              8
            </button>
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-5 w-5 m-2 text-white"
              onClick={() => handleClick("9")}
            >
              9
            </button>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-5 w-5 m-2 text-white"
              onClick={() => handleClick("0")}
            >
              0
            </button>
          </div>
          <div className="flex justify-center">It is incorrect</div>
        </div>
      ) : (
        <div>
          <div className="flex  justify-center">{password}</div>
          <div className="flex  justify-center">
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-5 w-5 m-2 text-white"
              onClick={() => handleClick("1")}
            >
              1
            </button>
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-5 w-5 m-2 text-white"
              onClick={() => handleClick("2")}
            >
              2
            </button>
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-5 w-5 m-2 text-white"
              onClick={() => handleClick("3")}
            >
              3
            </button>
          </div>
          <div className="flex  justify-center">
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-5 w-5 m-2 text-white"
              onClick={() => handleClick("4")}
            >
              4
            </button>
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-5 w-5 m-2 text-white"
              onClick={() => handleClick("5")}
            >
              5
            </button>
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-5 w-5 m-2 text-white"
              onClick={() => handleClick("6")}
            >
              6
            </button>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-5 w-5 m-2 text-white"
              onClick={() => handleClick("7")}
            >
              7
            </button>
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-5 w-5 m-2 text-white"
              onClick={() => handleClick("8")}
            >
              8
            </button>
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-5 w-5 m-2 text-white"
              onClick={() => handleClick("9")}
            >
              9
            </button>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-slate-500 flex items-center justify-center rounded-full h-5 w-5 m-2 text-white"
              onClick={() => handleClick("0")}
            >
              0
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
