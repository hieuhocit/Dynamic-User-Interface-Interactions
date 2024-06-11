import '../../styles/image-carousel.css';
import App from './App';

document.querySelector('#app').innerHTML = App();

const forward = document.querySelector('#forward');
const back = document.querySelector('#back');
const slides = document.querySelectorAll('.slide > img');
const navDots = document.querySelectorAll('.nav > div');

let currentIndex = 0;
let intervalId;
let timeoutId;
let timeout = 3000;

active('next');
intervalId = setInterval(next, timeout);
forward.addEventListener('click', next);
back.addEventListener('click', prev);
navDots.forEach((navDot) => navDot.addEventListener('click', switchToSlide));

async function switchToSlide(e) {
  const index = e.target.dataset.index;
  const type = currentIndex > index ? 'back' : 'next';

  let timesRepeat = Math.abs(index - currentIndex);
  const duration = 500 / timesRepeat;
  const timeDelay = duration - 250 >= 0 ? duration - 250 : 0;

  while (timesRepeat-- >= 1) {
    currentIndex = type === 'next' ? currentIndex + 1 : currentIndex - 1;
    removeActive(type, duration);
    active(type, duration, timeDelay);
    handleAfterClick();
    await delay(duration);
  }
}

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function next(e) {
  currentIndex++;
  if (currentIndex >= slides.length) currentIndex = 0;
  removeActive('next');
  active('next');

  if (!e) return;
  // if (!e?.isTrusted) return;
  handleAfterClick();
}

function prev(e) {
  currentIndex--;
  if (currentIndex < 0) currentIndex = slides.length - 1;
  removeActive('back');
  active('back');

  if (!e) return;
  handleAfterClick();
}

function handleAfterClick() {
  clearTimeout(timeoutId);
  clearInterval(intervalId);
  timeoutId = setTimeout(() => {
    next();
    intervalId = setInterval(next, timeout);
  }, timeout);
}

function removeActive(type, duration = 500, delay = 0) {
  slides.forEach((slide, index) => {
    if (slide.classList.contains('active')) {
      navDots[index].classList.remove('active');

      slide.style.animation =
        type === 'next'
          ? `slide-left-to-disappear ${duration}ms linear forwards ${delay}ms`
          : `slide-right-to-disappear ${duration}ms linear forwards ${delay}ms`;
      slide.classList.remove('active');
    }
  });
}

function active(type, duration = 500, delay = 250) {
  slides[currentIndex].classList.add('active');
  navDots[currentIndex].classList.add('active');
  if (type === 'next') {
    slides[currentIndex].style.animation = `
      slide-right-to-left ${duration}ms linear forwards ${delay}ms
    `;
  } else if (type === 'back') {
    slides[currentIndex].style.animation = `
      slide-left-to-right ${duration}ms linear forwards ${delay}ms
    `;
  }
}
