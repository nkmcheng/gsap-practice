import React, { useRef, useEffect } from "react";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { gsap, Power2, timeli } from "gsap";

import "./App.css";
import Asl from "./images/asl.jpg";

const App = () => {
  let containerRef = useRef(null);
  let imageRef = useRef(null);
  let imageRevealRef = CSSRulePlugin.getRule(".img-container:after");

  var tl = gsap.timeline();

  useEffect(() => {
    // console.log(imageRevealRef);

    tl.to(containerRef, { duration: 0, css: { visibility: "visible" } })
      .to(imageRevealRef, {
        duration: 1.4,
        width: "0%",
        ease: Power2.easeInOut,
      })
      .from(imageRef, {
        duration: 1.4,
        scale: 1.6,
        ease: Power2.easeInOut,
        delay: -1.5,
      });
  }, []);

  return (
    <section className="main">
      <div ref={(el) => (containerRef = el)} className="container">
        <>
          <div className="img-container">
            <img ref={(el) => (imageRef = el)} src={Asl} alt="Ace Sabo Luffy" />
          </div>
        </>
      </div>
    </section>
  );
};

export default App;
