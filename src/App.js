import React from "react";
import Nav from "./Nav";
import About from "./About";
import Blog from "./Blog";
import Home from "./Home";
import Konsovka from "./Konsovka";
import '../src/Nav.scss';
import {BrowserRouter ,Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
        <Nav/>
        <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/about"  element={<About/>} exact/>
        <Route path="/blog" element={<Blog/>} exact/>
        <Route path="/konsovka" element={<Konsovka/>} exact/>
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
