import "./About.css";
import Card from "../Card/Card";

// ==============================
// About Section
// ==============================
const About = () => {
  return (
    <section className="about" id="about">
      <Card accent="blue" className="about__card">
        <div className="about__content">
          <div className="about__text">
            <p className="about__eyebrow">About Me</p>
            <h2 className="about__title">
              I love creating websites that are both beautiful and functional.
            </h2>
            <p className="about__description">
              I create user interfaces that are both beautiful and functional.
              Web development is my favorite creative vessel, allowing me to
              combine thoughtful design, balanced colors, and smooth
              interactions to build seamless digital experiences.
            </p>
            <p className="about__description">
              Design is what got me started, but my curiosity goes beyond
              visuals. I'm fascinated by how products are planned, how features
              add real value, and how the entire web ecosystem works together.
              My goal is to build exceptional user experiences while fully
              understanding the systems behind them.
            </p>
          </div>

          <div className="about__stats">
            <div className="about__stat">
              <strong>5+</strong>
              <span>Projects</span>
            </div>
            <div className="about__stat">
              <strong>4+</strong>
              <span>Certificates</span>
            </div>
            <div className="about__stat">
              <strong>2+</strong>
              <span>Experience</span>
            </div>
            <div className="about__stat">
              <strong>3+</strong>
              <span>Years Learning</span>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default About;
