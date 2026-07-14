import "./Navbar.css";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import gheronHome from "../../assets/gheron-home.svg";

// ==============================
// Navbar Component
// ==============================
const Navbar = () => {
  const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cvHref = `${import.meta.env.BASE_URL}MochammadGheronShaquille_CV.pdf`;

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
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

      {/* Tombol versi docked: terlihat di navbar sebelum discroll */}
      <Button
        href={cvHref}
        className="navbar__button navbar__button--docked"
        download
      >
        Download CV
      </Button>

      {/* Tombol versi floating: muncul dari kanan bawah layar saat discroll */}
      <Button
        href={cvHref}
        className="navbar__button navbar__button--floating"
        download
      >
        Download CV
      </Button>
    </header>
  );
};

export default Navbar;
