// ==============================
// Hero Section
// Layout 2 kolom: kiri teks, kanan foto
// ==============================

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import Button from "../Button/Button";
import "./Hero.css";

// ===========================
// GANTI FOTO DI SINI
// Uncomment baris di bawah setelah menaruh file:
// src/assets/hero_real.webp
// ===========================
import profile from "../../assets/hero_real.webp";
// const profile = null;

const socialLinks = [
  { Icon: FaGithub, href: "https://github.com/gheronshaq", label: "GitHub" },
  {
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/mochammad-gheron-shaquille/",
    label: "LinkedIn",
  },
  {
    Icon: FaInstagram,
    href: "https://instagram.com/gheronshaq",
    label: "Instagram",
  },
  { Icon: FaEnvelope, href: "mailto:gheronshaq18@gmail.com", label: "Email" },
];

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          {/* ===== Kiri: teks & CTA ===== */}
          <div className="hero-text-col">
            {/* Nama besar */}
            <h1 className="hero-name">GHERON</h1>

            {/* Subtitle dengan aksen orange */}
            <p className="hero-subtitle">
              Frontend <span className="hero-subtitle-accent">Developer</span>
            </p>

            {/* Deskripsi singkat */}
            <p className="hero-description">
              Greetings, traveler! I am a scribe of Informatics Engineering and
              a frontline Front-End Developer, dedicated to forging responsive,
              user-friendly web applications across the digital realm. I delight
              in turning mere ideas into clean, interactive interfaces, while
              continuously honing my mastery over React and modern web
              technologies on my grand quest toward becoming a Full-Stack
              Developer. I also hold a deep fascination for the arcane art of
              Game Development. Send forth a raven or do not hesitate to reach
              out for collaboration or noble discussions!
            </p>

            {/* Tombol CTA */}
            <div className="hero-cta-group">
              <Button variant="primary" as="a" href="#projects">
                Explore Projects <span className="hero-arrow">→</span>
              </Button>
              <Button variant="outline" as="a" href="#contact">
                Contact Me
              </Button>
            </div>

            {/* Social Media Icons */}
            <div className="hero-social-group">
              <span className="hero-social-label">FIND ME:</span>
              {socialLinks.map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  className="hero-social-icon"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* ===== Kanan: foto profil ===== */}
          <div className="hero-photo-col">
            <div className="hero-photo-wrapper">
              {/* Kotak dekoratif belakang */}
              <div className="hero-photo-decoration" />

              {/* Foto atau placeholder */}
              <div className="hero-photo-frame">
                {profile ? (
                  <img src={profile} alt="Wayne" className="hero-photo-img" />
                ) : (
                  // Placeholder jika foto belum ada
                  <div className="hero-photo-placeholder">
                    <div className="hero-photo-placeholder-emoji">📸</div>
                    <p className="hero-photo-placeholder-title">
                      Your Photo Here
                    </p>
                    <p className="hero-photo-placeholder-subtitle">
                      src/assets/profile.png
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
