import { supportsKeyframe, supportsAnimate } from "./utils";

const canAnimate = supportsAnimate();
const prefix = supportsKeyframe();

function parseKeyframes(keyframes) {
  const numOfKeyframes = keyframes.length;
  return `
    @-${prefix}-keyframes animName {

    }
  `;
}

function Animate(keyframes, options) {
  this.play = function() {
    console.log("play");
  };
}

export function animateWrapper(el) {
  el.animate = Animate;

  return el;
}
