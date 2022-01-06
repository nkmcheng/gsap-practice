import React, { useEffect, useRef, useState } from "react";
import { gsap, Power3 } from "gsap";
import "./App.css";

function App() {
  let app = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    gsap.to(circleRed, {
      duration: 0.8,
      width: 200,
      height: 200,
      ease: Power3.easeOut,
    });
    setExpand(true);
  };

  const handleShrink = () => {
    gsap.to(circleRed, {
      duration: 0.8,
      width: 75,
      height: 75,
      ease: Power3.easeOut,
    });
    setExpand(false);
  };

  useEffect(() => {
    gsap.to(app, { duration: 0, css: { visibility: "visible" } });

    // gsap.from(circle, {
    //   duration: 1,
    //   x: 40,
    //   ease: Power3.easeOut,
    // });

    // gsap.from(circleRed, {
    //   duration: 1,
    //   x: 40,
    //   ease: Power3.easeOut,
    //   delay: 0.2,
    // });

    // gsap.from(circleBlue, {
    //   duration: 1,
    //   x: 40,
    //   ease: Power3.easeOut,
    //   delay: 0.4,
    // });

    gsap.from([circle, circleRed, circleBlue], {
      duration: 1,
      x: 40,
      ease: Power3.easeOut,
      stagger: 0.3,
    });
  }, []);

  return (
    <div className="App" ref={(el) => (app = el)}>
      <header className="App-header">
        <div className="circle-container">
          <div ref={(el) => (circle = el)} className="circle"></div>
          <div
            ref={(el) => (circleRed = el)}
            onClick={expand ? handleShrink : handleExpand}
            className="circle red"
          ></div>
          <div ref={(el) => (circleBlue = el)} className="circle blue"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
