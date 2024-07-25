import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-[100vw] h-[100px] bg-[black] text-[white] flex justify-center items-center">
              <span
                onClick={() => navigate("/")}>
                <h1>Home</h1>
              </span>
              <li/>
              <span
                onClick={() => navigate("/task")}>
                <h1>task</h1>
              </span>
              <li/>
              <span
                onClick={() => navigate("/pomodoro")}>
                <h1>pomodoro</h1>
              </span>
      </div>
    </>
  );
}
