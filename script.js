let box = document.querySelector(".box");

const color = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const getRandom = () => Math.floor(Math.random() * color.length);

console.log(getRandom());
setInterval(() => {
  box.style.borderColor = color[getRandom()];
}, 3000)
