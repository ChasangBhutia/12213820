import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import MainForm from "./components/MainForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="h-screen flex flex-col justify-between items-center">
      <Navbar />
      <MainForm />
      <Footer />
    </div>
  );
};

export default App;
