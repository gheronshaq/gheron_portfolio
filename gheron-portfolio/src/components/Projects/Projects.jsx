import "./Projects.css";
import { projects } from "../../data/projects";
import Card from "../Card/Card";

// ==============================
// Projects Section
// ==============================
const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="section__heading">
        <p className="section__eyebrow">Projects</p>
        <h2 className="section__title">Selected Works.</h2>
      </div>

      <div className="projects__grid">
        {projects.map((project) => (
          <Card key={project.title} accent="default" className="project__card">
            <img
              src={project.image}
              alt={project.title}
              className="project__image"
            />
            <div className="project__content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project__tech">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="project__links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
