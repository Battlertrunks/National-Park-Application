import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeRoute from "./components/HomeRoute";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeRoute />
      <Footer />
    </div>
  );
}

export default App;
