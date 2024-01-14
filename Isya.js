const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Aku mencintaimu jugaa";
  gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxx = window.innerWidth - noBtnRect.width;
  const maxy = window.innerHeight - noBtnRect.height;
  const randomX = Math.floor(Math.random() * maxx);
  const randomY = Math.floor(Math.random() * maxy);
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});