import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="
      w-[100vw] 
      h-[100px] 
      bg-[black] 
      text-[#28212F] 
      flex  
      items-center 
      place-content-evenly
      text-[grey]
      font-black">
              <span className="cursor-pointer"
                onClick={() => navigate("/")}>
                <h1>Home</h1>
              </span>
              <span className="cursor-pointer"
                onClick={() => navigate("/task")}>
                <h1>Task</h1>
              </span>
              <span className="cursor-pointer"
                onClick={() => navigate("/pomodoro")}>
                <h1>Pomodoro</h1>
              </span>
      </div>
    </>
  );
}
