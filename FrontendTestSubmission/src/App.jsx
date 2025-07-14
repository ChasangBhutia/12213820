import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import MainForm from "./components/MainForm";

const App = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <MainForm />
    </div>
  );
};

export default App;
