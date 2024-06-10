import Header from "../../components/header/Header";

export default function () {
  return `
    ${Header({heading: "Dynamic User Interface Interactions"})}
    <a href="dropdown-menu.html">Dropdown menu page</a>
    <a href="image-carousel.html">Image carousel page</a>
  `;
}
