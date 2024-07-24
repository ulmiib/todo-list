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
      <div className="bg-teal-950 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6">Todo List</h1>
        <div className="flex mb-4">
          <input
            placeholder="Add a new task"
            type="text"
            className="border border-teal-300 rounded-xl p-2 mr-2 flex-1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 border rounded-xl"
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
              className="flex items-center justify-between bg-black text-white m-1 p-3 text-xs border rounded-xl"
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
      </div>
    </div>
  );
}

export default App;
