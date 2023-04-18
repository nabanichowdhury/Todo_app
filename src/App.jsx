import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Todos from "./Pages/Todos.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/todos" element={<Todos></Todos>}></Route>
      </Routes>
    </div>
  );
};

export default App;
