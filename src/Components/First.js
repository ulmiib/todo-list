import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export const First = () => {
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
  let counter;
  if (count > 0) {
    const noun = "Tasks to do";
    counter = noun + " " + count;
  }

  return (
    <div
      className="
    min-h-screen
    min-w-screen 
    bg-black"
    >
      <div
        className="
      bg-[#102C57] 
      rounded-lg
      min-w-80
      max-w-80
      min-h-72"
      
      >
        <div
          className="
        text-white"
        >
          <input
            placeholder="Add a new task"
            type="text"
            className="
            border-teal-300 
            border rounded-xl 
            bg-transparent"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="
            bg-[#1679AB] 
            text-white 
            rounded-xl"
            onClick={addTodo}
          >
            <FaPlus />
          </button>
        </div>
        <h2 className="text-white">{counter}</h2>
        <div
          className="
        "
        >
          {todos.map((todo, index) => (
            <div
              key={index}
              className="
              bg-black 
              text-white 
              rounded-xl"
            >
              {todo}
              <button>
                <FaCheck />
              </button>
              <button
                className="
                text-red-500"
                onClick={() => removeTodo(index)}
              >
                <FaTrashAlt />
              </button>
            </div>
          ))}
        </div>
        {/* <h2 className="text-white text-x">{counter}</h2> */}
      </div>
    </div>
  );
};