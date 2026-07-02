import "./Projects.css";

const projects = [
  {
    title: "E-Commerce Website",
    tech: "React.js | Node.js | Express.js | MongoDB",
    description:
      "A complete MERN e-commerce website with authentication, cart, wishlist, admin dashboard and online payment integration.",
    github: "#",
    live: "#",
  },
  {
    title: "Task Management System",
    tech: "React.js | Node.js | MongoDB",
    description:
      "Task management application with login, CRUD operations, task status update and responsive design.",
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    tech: "React.js | CSS",
    description:
      "Responsive personal portfolio showcasing skills, projects, experience and contact information.",
    github: "#",
    live: "#",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">
        My <span>Projects</span>
      </h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p className="tech">{project.tech}</p>

            <p className="description">{project.description}</p>

            <div className="project-btns">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>

              <a href={project.live} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;