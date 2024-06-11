import Header from '../../components/header/Header';
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';
import img4 from '../../assets/images/4.jpg';
import img5 from '../../assets/images/5.jpg';

export default function () {
  const arr = [img1, img2, img3, img4, img5];
  return `
    ${Header({ heading: 'Image carousel' })}
    <a href="home.html">Home</a>
    <div class="slider">
      <div class="slide">
        ${arr.map((img) => `<img src="${img}">`).join('')}
      </div>
      <div class="nav">
        ${arr.map((img, index) => `<div data-index="${index}"></div>`).join('')}
      </div>
      <button class="btn" id="back">🔙</button>
      <button class="btn" id="forward">🔜</button>
    </div>
  `;
}
