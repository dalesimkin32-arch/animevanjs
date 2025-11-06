import {
  animate,
  stagger,
  splitText,
} from "/node_modules/animejs/dist/modules/index.js";
// import { animate } from "animejs/animation";
// import { splitText } from "animejs/text";
// import { stagger } from "animejs/utils";

const { chars } = splitText("h1", { words: false, chars: true });

animate(chars, {
  // Property keyframes
  y: [
    { to: "-5.0rem", ease: "outExpo", duration: 800 },
    { to: 0, ease: "outBounce", duration: 800, delay: 100 },
  ],
  // Property specific parameters
  rotate: {
    from: "-2turn",
    delay: 500,
  },
  delay: stagger(75),
  ease: "inOutCirc",
  loopDelay: 1000,
  loop: true,
});
