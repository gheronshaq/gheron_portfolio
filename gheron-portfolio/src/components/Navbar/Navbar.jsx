import "./Navbar.css";
import Button from "../Button/Button";
import gheronHome from "../../assets/gheron-home.svg";

// ==============================
// Navbar Component
// ==============================
const Navbar = () => {
  const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <header className="navbar">
      <a className="navbar__brand" href="#home" aria-label="Home">
        <img
          src={gheronHome}
          alt="Gheron Home"
          className="navbar__brand-image"
        />
      </a>

      <nav className="navbar__menu" aria-label="Main navigation">
        {menuItems.map((item) => (
          <a
            key={item}
            className="navbar__link"
            href={`#${item.toLowerCase()}`}
          >
            {item}
          </a>
        ))}
      </nav>

      <Button
        href="../../assets/CV_Mochammad Gheron Shaquille.pdf"
        className="navbar__button"
        download
      >
        Download Resume
      </Button>
    </header>
  );
};

export default Navbar;
