import "./Skills.css";
import { skills } from "../../data/skills";

// ==============================
// Skills and Tools Section
// ==============================
const skillGroups = skills.slice(0, 3);
const toolGroup = skills[3];
const skillItems = skillGroups.flatMap((group) => group.items);

const renderMarqueeItems = (items, directionClass) => {
  const repeatedItems = [...items, ...items];

  return (
    <div className={`marquee ${directionClass}`}>
      <div className="marquee__track">
        {repeatedItems.map((item, index) => (
          <span key={`${item}-${index}`} className="marquee__item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="section__heading">
        <p className="section__eyebrow">Skills & Tools</p>
        <h2 className="section__title">What I Use</h2>
      </div>

      <div className="skills__cards">
        <article className="skill__card">
          <h3>Skills</h3>
          <div className="skill__block">
            {renderMarqueeItems(skillItems, "marquee--right")}
          </div>
        </article>

        <article className="skill__card skill__card--tools">
          <h3>Tools</h3>
          <div className="skill__block">
            {renderMarqueeItems(toolGroup.items, "marquee--left")}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Skills;
