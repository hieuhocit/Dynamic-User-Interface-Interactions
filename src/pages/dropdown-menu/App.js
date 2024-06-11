import Header from '../../components/header/Header';
import Image from '../../assets/images/songoku.jpg';

export default function () {
  document.documentElement.addEventListener('click', (e) => {
    const userImg = document.querySelector('.user-image');
    if (!userImg.contains(e.target)){
      userImg.classList.remove('active');
    }
  });
  return `
  ${Header({ heading: 'Dropdown Menu' })}
    <a href="home.html">Home</a>
    
    <div class="dropdown-container">
      <div class="user-container">
        <div class="user-image">
          <img 
            onclick="this.parentElement.classList.toggle('active')" 
            src="${Image}" 
            alt="user-image"
          >

          <div class="dropdown-menu">
            <ul>
              <li>
                <a href="#">
                  <i class="fa-solid fa-user"></i>
                  <span>Profile</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-solid fa-tag"></i>
                  <span>Tags</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-solid fa-lock"></i>
                  <span>Privacy</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-solid fa-gear"></i>
                  <span>Setting</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-solid fa-right-from-bracket"></i>
                  <span>Log out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="user-name">
          <p>Songoku</p>
        </div>
      </div>
    </div>
  `;
}
