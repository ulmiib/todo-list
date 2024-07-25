import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Background from "../Images/back.jpg";

export const Task = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [doneTodos, setDoneTodos] = useState([]);

  const markAsDone = (index) => {
    const todo = todos[index];
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    setDoneTodos([...doneTodos, todo]);
  };

  const removeDoneTodo = (index) => {
    const newDoneTodos = [...doneTodos];
    newDoneTodos.splice(index, 1);
    setDoneTodos(newDoneTodos);
  };

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
    const noun = "Tasks to-do";
    counter = noun + " " + count;
  }

  return (
    <div className="
    flex 
    justify-center  
    items-center 
    h-screen 
    w-screen 
    bg-black" 
    style={{ backgroundImage: `url(${Background})` }}>
      <div
        className="
      w-[483px]
      backdrop-blur-sm 
      bg-white/30
      rounded-lg
      h-[450px]
      p-[50px]"
      >
        <div
          className="
          h-[40px]
          w-[383px]
          flex
          place-content-evenly
          text-white"
        >
          <input
            placeholder="Add a new task"
            type="text"
            className="
            p-[10px]
            h-[40px]
            w-[270px]
            border-teal-300 
            border rounded-xl 
            bg-transparent
            "
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="
            flex 
            justify-center  
            items-center
            h-[40px]
            w-[40px]
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
          overflow-auto
          flex
          flex-col
          items-center
          w-[383px]
          h-[300px]
        "
        >
          {todos.map((todo, index) => (
            <div
              key={index}
              className="
              flex 
              items-center
              mb-[5px]
              w-[335px]
              min-h-[55px]
              bg-black 
              text-white 
              rounded-xl
              p-[10px]"
            >
              <div
                className="
              w-[265px]
              h-[40px]
              "
              >
                {todo}
              </div>
              <button
                className="
              h-[25px]
              w-[25px]
              self-center"
                onClick={() => markAsDone(index)}
              >
                <FaCheck />
              </button>
              <button
                className="
                h-[25px]
                w-[25px]
                self-center
                text-red-500"
                onClick={() => removeTodo(index)}
              >
                <FaTrashAlt />
              </button>
            </div>
          ))}

          <div className="
          w-[335px]
            h-[60px]
            m-[5px]">
            <h2 className="
            text-xl 
            text-white 
            font-bold 
            mb-3">
              Done
            </h2>
            <div className="
            w-[335px]
            h-[60px]">
              {doneTodos.map((todo, index) => (
                <div
                  key={index}
                  className="
                  flex 
                  text-white 
                  justify-between 
                  items-center 
                  bg-[black]
                  rounded-xl 
                  w-[335px] 
                  h-[60px]
                  p-[10px]
                  m-[5px]"
                >
                  <div className="
                  mr-2 
                  text-white ">
                    {todo}
                  </div>
                  <button
                    onClick={() => removeDoneTodo(index)}
                    className="
                    text-red-500
                    text-white 
                    hover:text-red-700"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
