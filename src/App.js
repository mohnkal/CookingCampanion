// import logo from './logo.svg';
import "./App.css";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
