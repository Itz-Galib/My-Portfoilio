import React, { useState, useEffect } from "react";

const Intro = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hi,Galib Here..";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="top-25 center relative z-10 text-left  px-4 max-w-2xl">
      <h1 className="text-5xl font-extrabold tracking-tight text-white mb-4 font-mono">
        {displayText}
        <span className="animate-pulse">|</span>
      </h1>
      {/* Title with animated underline */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-[3px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
        <p className="text-lg md:text-xl text-gray-300 font-medium">
          Aspiring Full Stack Web Developer | Mobile App Developer
        </p>
      </div>

      {/* Short bio */}
      <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
        Building scalable web applications with modern technologies. CSE student
        at AUST passionate about creating impactful digital solutions.
      </p>

      {/* Quick stats */}
      <div className="mt-6 flex flex-wrap gap-6">
        <div>
          <p className="text-2xl font-bold text-white">3+</p>
          <p className="text-xs text-gray-500">Years of Learning</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-white">7+</p>
          <p className="text-xs text-gray-500">Projects</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-white">3+</p>
          <p className="text-xs text-gray-500">Technologies</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
