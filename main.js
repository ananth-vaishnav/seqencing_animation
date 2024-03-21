const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

function animateElement(element) {
  return element.animate(aliceTumbling, aliceTiming).finished;
}


animateElement(alice1).then(() => {
  return animateElement(alice2);
}).then(() => {
  return animateElement(alice3);
});

