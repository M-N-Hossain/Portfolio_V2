import React from "react";
import "../styles/roundedText.css";

import workingOnlaptop from "../assets/workingOnLaptop.jpg";

export default function RoundedText() {
  const text = " SOFTWARE - DEVELOPER - WEB - DEVELOPER";

  return (
    <div className="circle">
      <p>
        {text.split("").map((char, i) => (
          <span
            key={i}
            style={{
              transform: `rotate(${i * 9}deg)`,
            }}
          >
            {char}
          </span>
        ))}
      </p>
      <img src={workingOnlaptop} alt="" />
    </div>
  );
}
