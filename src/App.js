import React, { useEffect } from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Views/Home";
import About from "./Views/About";
import Contact from "./Views/Contact";
import NotFound from "./Views/NotFound";
import Tenzies from "./Views/Tenzies";
import Projects from "./Views/Projects";
import Curriculum from "./Views/Curriculum";

export default function App() {

  const [theme, setTheme] = React.useState(true);

  useEffect(() => {
    (localStorage.getItem("theme") === "true") ? setTheme(true) : setTheme(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const changeTheme = () => {
    setTheme(prevMode => !prevMode);
  };

  return (
    <>
      <Navbar 
        theme={theme}
        changeTheme={changeTheme}/>
      <Routes>
        <Route path="/" element={<Home theme={theme}/>} />
        <Route path="about" element={<About theme={theme}/>} />
        <Route path="contact" element={<Contact theme={theme}/>} />
        <Route path="projects" element={<Projects theme={theme}/>} />
        <Route path="tenzies" element={<Tenzies theme={theme}/>} />
        <Route path="curriculum" element={<Curriculum theme={theme}/>} />
        <Route path="*" element={<NotFound theme={theme}/>} />
      </Routes>
      <Footer theme={theme}/>
    </>
  );
}
