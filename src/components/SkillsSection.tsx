const skillCategories = [
  {
    title: "Front-End",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Back-End",
    skills: ["Python", "Node.js", "FastAPI", "Express.js"],
  },
  {
    title: "Banco de Dados",
    skills: ["PostgreSQL", "MongoDB", "Prisma ORM"],
  },
  {
    title: "APIs & Auth",
    skills: ["REST", "JWT", "OAuth 2.0"],
  },
  {
    title: "IA & Automação",
    skills: ["Agentes de IA", "OpenAI API", "Anthropic API", "n8n"],
  },
  {
    title: "Ferramentas",
    skills: ["Git/GitHub", "Docker", "Postman", "Linux"],
  },
];

const SkillsSection = () => (
  <section id="habilidades">
    <div className="section-container">
      <h2 className="section-heading">Habilidades Técnicas</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((cat) => (
          <div key={cat.title}>
            <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-3">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span key={skill} className="tech-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
