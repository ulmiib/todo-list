import React, { useState } from "react";
import plusIcon from "../Images/Plus.png";
import vectorIcon from "../Images/Vector.png";
import canIcon from "../Images/Can.png";

export default function Task() {
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
    const noun = "Tasks to-do -";
    counter = noun + " " + count;
  }

  const doneCount = doneTodos.length;
  let doneCounter;
  if (doneCount > 0) {
    const noun = "Done -";
    doneCounter = noun + " " + doneCount;
  }

  return (
    <>
      <div
        className="
    flex 
    justify-center  
    items-center 
    h-screen 
    w-screen 
    bg-[#0D0714]"
      >
        <div
          className="
        flex 
    items-center  
    flex-col
      w-[483px]
      rounded-[20px]
      h-[508px]
      bg-[#102C57]
      border-t-[1px]
      border-[#1679AB]"
        >
          <div
            className="
          h-[120px]
          w-[483px]
          flex
          justify-center
          items-center
          text-white"
          >
            <input
              placeholder="Add a new task"
              type="text"
              className="
            bg-[transparent]
            m-[10px]
            p-[10px]
            h-[40px]
            w-[301px]
            rounded-[10px]
            border-teal-300 
            border rounded-xl"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="
            m-[10px]
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
              <img src={plusIcon} alt="icon" />
            </button>
          </div>
          <h2
            className="
        text-white
        w-[355px]
        m-[5px]"
          >
            {counter}
          </h2>
          <div
            className="
          overflow-auto
          flex
          flex-col
          items-center
          w-[483px]
          h-[300px]
        "
          >
            {todos.map((todo, index) => (
              <div
                key={index}
                className="
              flex 
              items-center
              w-[361px]
              min-h-[55px]
              bg-[#15101C] 
              text-white 
              rounded-xl
              mb-[5px]
              p-[15px]"
              >
                <div
                  className="
              w-[300px]
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
                  <img src={vectorIcon} alt="icon" />
                </button>
                <button
                  className="
                h-[25px]
                w-[25px]
                self-center"
                  onClick={() => removeTodo(index)}
                >
                  <img src={canIcon} alt="icon" />
                </button>
              </div>
            ))}
            <h2
              className="
            text-white       
            w-[355px]"
            >
              {doneCounter}
            </h2>
            <div
              className="
            w-[483px]
            h-[70px]
            flex
            flex-col
            items-center"
            >
              {doneTodos.map((todo, index) => (
                <div
                  key={index}
                  className="
                  w-[361px]
                  min-h-[55px]
                  items-center
                  flex 
                  text-white  
                  bg-[#15101C] 
                  rounded-xl 
                  w-[361px] 
                  h-[60px]
                  mb-[5px]
                  p-[15px]"
                >
                  <div
                    className="
                  w-[308px]
                  line-through
                  text-[#78CFB0]"
                  >
                    {todo}
                  </div>
                  <button
                    onClick={() => removeDoneTodo(index)}
                    className="
                    text-white"
                  >
                    <img src={canIcon} alt="icon" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
