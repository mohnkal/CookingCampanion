// import logo from './logo.svg';
import "./App.css";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { RecipeProvider } from "./RecipeContext";

function App() {
  return (
    <RecipeProvider>
    <div className="App">
      <Navbar/>
      <Landing />
      <Footer />
    </div>
    </RecipeProvider>
  );
}

export default App;
