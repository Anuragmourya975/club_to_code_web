import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <div className="App"></div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        {/* <Route exact path="/" element={<Dashboard />}></Route> */}
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
