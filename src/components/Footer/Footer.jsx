import "./Footer.css";

// ==============================
// Footer Section
// ==============================
const Footer = () => {
  return (
    <footer className="footer">
      <p>GHERON</p>
      <p>© 2026 All rights reserved.</p>
      <div className="footer__social">
        <a
          href="https://github.com/gheronshaq"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mochammad-gheron-shaquille/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://instagram.com/gheronshaq"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
