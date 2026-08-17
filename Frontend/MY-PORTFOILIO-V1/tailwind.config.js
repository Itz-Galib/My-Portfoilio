/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      animation: {
        blob: "blob 10s infinite alternate",
        typewriter: "typewriter 2s steps(11) forwards",
        caret:
          "typewriter 1.5s steps(11) forwards, blink 0.5s steps(11) infinite 0.5s",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(40px, -60px) scale(1.2)" },
          "66%": { transform: "translate(-30px, 30px) scale(0.8)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        typewriter: {
          typewriter: {
            to: {
              left: "100%",
            },
          },
          blink: {
            "0%": {
              opacity: "0",
            },
            "0.1%": {
              opacity: "1",
            },
            "50%": {
              opacity: "1",
            },
            "50.1%": {
              opacity: "0",
            },
            "100%": {
              opacity: "0",
            },
          },
        },
      },
    },
  },
};
