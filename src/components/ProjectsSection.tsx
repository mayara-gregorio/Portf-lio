import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "WhatsApp Bot",
    description: "Bot para envio automatizado de mensagens instantâneas no WhatsApp Web com interface gráfica.",
    techs: ["Python", "Selenium", "PyInstaller"],
    large: true,
    link: "https://github.com/mayara-gregorio/Boot-de-Mensagens.git"
  },
  {
    title: "Mayask Task Manager",
    description: "Sistema de gerenciamento de tarefas com CRUD completo, relacionamento usuário-tarefa e PostgreSQL.",
    techs: ["JavaScript", "Node.js", "PostgreSQL", "Express"],
    large: false,
    link: "https://github.com/mayara-gregorio/Task-PostgreSQL.git"
  },
  {
    title: "To-Do List",
    description: "Aplicação intuitiva para gerenciamento de tarefas com interface moderna e funcionalidades de marcar concluídas.",
    techs: ["TypeScript", "React", "CSS", "Vite"],
    large: false,
    link: "https://github.com/mayara-gregorio/List-To-do.git"
  },
];

const ProjectsSection = () => (
  <section id="projetos" className="section-alt">
    <div className="section-container">
      <h2 className="section-heading">Projetos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`card-surface group cursor-pointer ${project.large ? "md:col-span-2" : ""}`}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.techs.map((tech) => (
                <span key={tech} className="tech-badge text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
