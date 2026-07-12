import "./Contact.css";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Button from "../Button/Button";
import Card from "../Card/Card";

const socialLinks = [
  { href: "https://linkedin.com", icon: <FaLinkedin />, label: "LinkedIn" },
  {
    href: "https://github.com/gheronshaq",
    icon: <FaGithub />,
    label: "GitHub",
  },
  { href: "https://instagram.com", icon: <FaInstagram />, label: "Instagram" },
  {
    href: "mailto:gheronshaq18@gmail.com",
    icon: <FaEnvelope />,
    label: "Email",
  },
];

// ==============================
// Contact Section
// ==============================
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Card accent="orange" className="contact__card">
        <div className="contact__content">
          <div>
            <p className="section__eyebrow">Contact</p>
            <h2 className="section__title">Let's Build Something Together..</h2>
            <p className="contact__text">
              I'm open to projects, discussions, or learning opportunities.
            </p>
          </div>

          <div className="contact__details">
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>

          <Button href="mailto:gheronshaq18@gmail.com" variant="dark">
            Let's Talk
          </Button>
        </div>
      </Card>
    </section>
  );
};

export default Contact;
