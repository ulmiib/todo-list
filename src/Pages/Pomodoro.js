import React, { useState, useEffect } from "react";
import restartIcon from "../Images/restart.png";
import settingsIcon from "../Images/settings.png";

const Pomodoro = () => {
  const [activeTab, setActiveTab] = useState("Focus");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [time, setTime] = useState(30 * 60); // 30 minutes
  const [breakTime, breakSetTime] = useState(5 * 60); // 5 minutes
  const [restTime, restSetTime] = useState(15 * 60); // 15 minutes
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive && time > 0) {
      timer = setInterval(() => setTime((prevTime) => prevTime - 1), 1000);
    } else if (time === 0) {
      setIsActive(false);
    }

    return () => clearInterval(timer);
  }, [isActive, time]);

  useEffect(() => {
    let breakTimer;
    if (isActive && breakTime > 0) {
      breakTimer = setInterval(() => breakSetTime((prevTime) => prevTime - 1), 1000);
    } else if (breakTime === 0) {
      setIsActive(false);
    }

    return () => clearInterval(breakTimer);
  }, [isActive, breakTime]);

  useEffect(() => {
    let restTimer;
    if (isActive && restTime > 0) {
      restTimer = setInterval(() => restSetTime((prevTime) => prevTime - 1), 1000);
    } else if (restTime === 0) {
      setIsActive(false);
    }

    return () => clearInterval(restTimer);
  }, [isActive, restTime]);

  const handleStart = () => setIsActive(true);

  const breakHandleStart = () => setIsActive(true);
  
  const restHandleStart = () => setIsActive(true);
  
  const handlePause = () => setIsActive(false);
  
  const breakHandlePause = () => setIsActive(false);
  
  const restHandlePause = () => setIsActive(false);
  
  const handleReset = () => {
    setIsActive(false);
    setTime(30 * 60);
  };
  
  const breakHandleReset = () => {
    setIsActive(false);
    breakSetTime(5 * 60);
  };
  
  const restHandleReset = () => {
    setIsActive(false);
    restSetTime(15 * 60);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <>
      <div className="w-screen h-screen bg-[#0D0714] text-[white] flex justify-center items-center">
        <div
          className="
          m-[10px]
        w-[412px]
        h-[256px]
        rounded-[12px]
        bg-[#232931]"
        >
          <div className="flex justify-between border-b border-gray-300 w-[412px] h-[45px]">
            <button
              className={`w-[135px] h-[45px] text-lg font-semibold ${
                activeTab === "Focus"
                  ? "border-b-2 border-white text-white"
                  : "text-gray-600"
              }`}
              onClick={() => handleTabClick("Focus")}
            >
              Focus
            </button>
            <button
              className={`w-[135px] h-[45px] text-lg font-semibold ${
                activeTab === "Break"
                  ? "border-b-2 border-white text-white"
                  : "text-gray-600"
              }`}
              onClick={() => handleTabClick("Break")}
            >
              Break
            </button>
            <button
              className={`w-[135px] h-[45px] text-lg font-semibold ${
                activeTab === "Rest"
                  ? "border-b-2 border-white text-white"
                  : "text-gray-600"
              }`}
              onClick={() => handleTabClick("Rest")}
            >
              Rest
            </button>
          </div>

          <div className="p-4 flex items-center justify-center w-[412px] h-[211px]">
            {activeTab === "Focus" && (
              <div>
                <div className="font-medium text-[64px] flex justify-center items-center">
                  {formatTime(time)}
                </div>

                <div className=" w-[192px] h-[40px] flex flex-row justify-between items-center">
                  <button
                    onClick={handleReset}
                    className="w-[40px] h-[40px] flex justify-center items-center"
                  >
                    <img src={restartIcon} alt="icon" />
                  </button>

                  {!isActive && time > 0 && (
                    <button
                      onClick={handleStart}
                      className="w-[96px] h-[35px] rounded-[8px] bg-[#A0CCFF] text-[#232931] font-medium text-[16px]"
                    >
                      Start
                    </button>
                  )}

                  {isActive && (
                    <button
                      onClick={handlePause}
                      className="w-[96px] h-[35px] rounded-[8px] bg-[#A0CCFF] text-[#232931] font-medium text-[16px]"
                    >
                      Pause
                    </button>
                  )}

                  <div className="w-[40px] h-[40px] flex justify-center items-center">
                    <img src={settingsIcon} alt="icon" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Break" && (
              <div>
                <div className="font-medium text-[64px] flex justify-center items-center">
                  {formatTime(breakTime)}
                </div>

                <div className=" w-[192px] h-[40px] flex flex-row justify-between items-center">
                  <button
                    onClick={breakHandleReset}
                    className="w-[40px] h-[40px] flex justify-center items-center"
                  >
                    <img src={restartIcon} alt="icon" />
                  </button>

                  {!isActive && time > 0 && (
                    <button
                      onClick={breakHandleStart}
                      className="w-[96px] h-[35px] rounded-[8px] bg-[#A0CCFF] text-[#232931] font-medium text-[16px]"
                    >
                      Start
                    </button>
                  )}

                  {isActive && (
                    <button
                      onClick={breakHandlePause}
                      className="w-[96px] h-[35px] rounded-[8px] bg-[#A0CCFF] text-[#232931] font-medium text-[16px]"
                    >
                      Pause
                    </button>
                  )}

                  <button className="w-[40px] h-[40px] flex justify-center items-center">
                    <img src={settingsIcon} alt="icon" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === "Rest" && (
              <div>
                <div className="font-medium text-[64px] flex justify-center items-center">
                  {formatTime(restTime)}
                </div>

                <div className=" w-[192px] h-[40px] flex flex-row justify-between items-center">
                  <button
                    onClick={restHandleReset}
                    className="w-[40px] h-[40px] flex justify-center items-center"
                  >
                    <img src={restartIcon} alt="icon" />
                  </button>

                  {!isActive && restTime > 0 && (
                    <button
                      onClick={restHandleStart}
                      className="w-[96px] h-[35px] rounded-[8px] bg-[#A0CCFF] text-[#232931] font-medium text-[16px]"
                    >
                      Start
                    </button>
                  )}

                  {isActive && (
                    <button
                      onClick={restHandlePause}
                      className="w-[96px] h-[35px] rounded-[8px] bg-[#A0CCFF] text-[#232931] font-medium text-[16px]"
                    >
                      Pause
                    </button>
                  )}

                  <button className="w-[40px] h-[40px] flex justify-center items-center">
                    <img src={settingsIcon} alt="icon" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pomodoro;
