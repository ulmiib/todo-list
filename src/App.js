import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    setTodos([...todos, input]);
    setInput("");
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const count = todos.length;
  let heading;
  if (count > 0) {
    const noun = "Tasks to do";
    heading = noun + " " + count;
  }

  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      <div className="bg-[#102C57] p-6 rounded-lg shadow-lg w-full max-w-xl p-10">
        <div className="flex mb-4">
          <input
            placeholder="Add a new task"
            type="text"
            className="border border-teal-300 rounded-xl p-2 mr-2 flex-1 max-w-96 min-w-96 min-h-10 bg-transparent"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-[#1679AB] hover:bg-blue-600 text-white p-2 border rounded-xl min-w-10 max-w-10 min-h-10 max-h-10"
            onClick={addTodo}
          >
            <FaPlus />
          </button>
        </div>
        <h2 className="text-white text-x">{heading}</h2>
        <div>
          {todos.map((todo, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-black text-white m-3 p-3 text-xs border rounded-xl max-w-md min-h-20"
            >
              {todo}
              <button>
                <FaCheck />
              </button>
              <button
                className="text-red-500 hover:text-red-600"
                onClick={() => removeTodo(index)}
              >
                <FaTrashAlt />
              </button>
            </div>
          ))}
        </div>
        {/* <h2 className="text-white text-x">{heading}</h2> */}
      </div>
    </div>
  );
}

export default App;
