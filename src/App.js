import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Task from "./Pages/Task";
import Pomodoro from "./Pages/Pomodoro";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/task" element={<Task />}></Route>
        <Route path="/pomodoro" element={<Pomodoro />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;