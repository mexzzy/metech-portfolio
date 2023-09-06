import "./App.css";
import Profile from "./Components/Profile";
import Social from "./pages/Social";
import Nav from "./Components/Nav";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Page404 from "./pages/Page404";

function App() {
  return (
      <div className="App">
        <div className="column">
          <Profile />
          <Social />
        </div>
        <div className="displayMain">
          <div className="space">
            <div></div>
            <Nav />
          </div>
          <Routes>
            <Route path="/" element={<About />}></Route>
            <Route path="/Projects" element={<Projects />}></Route>
            <Route path="/Resume" element={<Resume />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="*" element={<Page404 />}></Route>
          </Routes>
        </div>
      </div>
  );
}

export default App;
