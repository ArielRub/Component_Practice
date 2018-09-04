import React, { Component } from 'react';
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import Contact from "./components/Contact.js";
import Projects from "./components/Projects.js";
import Resume from "./components/Resume.js";
import Sociallinks from "./components/Sociallinks.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Main />
        <Projects />
        <Resume />
        <Contact />
        <Sociallinks />
        <Footer />
      </div>
    );
  }
}

export default App;
