const experiences = [
  {
    title: "Auxiliar de Escritório",
    company: "Infoplus Fiber",
    period: "2024 — Atual",
    description: "Homologação de equipamentos de segurança, suporte técnico, monitoramento de sistemas e análise de erros.",
    current: true,
  },
  {
    title: "Bolsista de Extensão",
    company: "IFMA",
    period: "Mai 2023 — Mai 2024",
    description: "Projeto Robótica Educacional: montagem e programação de robôs, desenvolvimento de atividades práticas.",
    current: false,
  },
];

const ExperienceSection = () => (
  <section id="experiencia" className="section-alt">
    <div className="section-container">
      <h2 className="section-heading">Experiência</h2>

      <div className="relative">
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-10">
              <div className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full border-2 border-primary bg-background flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              <div className="card-surface">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                  {exp.current && (
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                      Atual
                    </span>
                  )}
                </div>
                <p className="text-sm font-mono text-primary mb-1">{exp.company}</p>
                <p className="text-xs font-mono text-muted-foreground mb-3">{exp.period}</p>
                <p className="text-sm text-muted-foreground">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
