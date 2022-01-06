import React, { useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import { gsap, Power3 } from "gsap";

function App() {
  let logoRef = useRef(null);
  let textRef = useRef(null);

  console.log(logoRef);

  useEffect(() => {
    console.log("useEffect", logoRef);
    // logoRef.style.display = "none";
    gsap.to(logoRef, {
      duration: 2,
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });

    gsap.to(textRef, {
      duration: 2,
      delay: 0.4,
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img
          ref={(el) => {
            logoRef = el;
          }}
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p
          ref={(el) => {
            textRef = el;
          }}
        >
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
