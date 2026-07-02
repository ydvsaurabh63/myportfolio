import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiFirebase,
  SiPostman,
  SiGithub,
  SiJsonwebtokens,
} from "react-icons/si";

const skills = [
  {
    icon: <FaHtml5 className="html" />,
    name: "HTML5",
    percent: 95,
  },
  {
    icon: <FaCss3Alt className="css" />,
    name: "CSS3",
    percent: 92,
  },
  {
    icon: <FaJs className="js" />,
    name: "JavaScript",
    percent: 90,
  },
  {
    icon: <FaReact className="react" />,
    name: "React.js",
    percent: 90,
  },
  {
    icon: <SiRedux className="redux" />,
    name: "Redux Toolkit",
    percent: 85,
  },
  {
    icon: <SiBootstrap className="bootstrap" />,
    name: "Bootstrap",
    percent: 90,
  },
  {
    icon: <SiTailwindcss className="tailwind" />,
    name: "Tailwind CSS",
    percent: 85,
  },
  {
    icon: <FaNodeJs className="node" />,
    name: "Node.js",
    percent: 88,
  },
  {
    icon: <SiExpress className="express" />,
    name: "Express.js",
    percent: 86,
  },
  {
    icon: <SiMongodb className="mongo" />,
    name: "MongoDB",
    percent: 87,
  },
  {
    icon: <SiJsonwebtokens className="jwt" />,
    name: "JWT Authentication",
    percent: 88,
  },
  {
    icon: <SiFirebase className="firebase" />,
    name: "Firebase",
    percent: 82,
  },
  {
    icon: <SiPostman className="postman" />,
    name: "REST API / Postman",
    percent: 90,
  },
  {
    icon: <FaGitAlt className="git" />,
    name: "Git",
    percent: 90,
  },
  {
    icon: <SiGithub className="github" />,
    name: "GitHub",
    percent: 92,
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-title">
        <h2>
          My <span>Skills</span>
        </h2>
        <p>
          Technologies and tools that I use to build modern, responsive and
          full-stack web applications.
        </p>
      </div>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-top">
              <div className="skill-icon">{skill.icon}</div>

              <div className="skill-info">
                <h3>{skill.name}</h3>
                <span>{skill.percent}%</span>
              </div>
            </div>

            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;