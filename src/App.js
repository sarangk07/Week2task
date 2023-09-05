import Register from "./components/Register";
import {Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import "./App.css"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>}/>

      </Routes>
    </>

  );
}

export default App;
