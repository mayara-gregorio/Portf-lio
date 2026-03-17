import { GraduationCap } from "lucide-react";

const education = [
  {
    title: "Tecnologia em Sistemas para Internet",
    institution: "Instituto Federal do Maranhão",
    location: "Timon, MA",
    period: "2022 — 2026",
    status: "Em andamento",
    statusColor: "text-primary",
  },
  {
    title: "Técnico em Informática para Internet",
    institution: "Instituto Federal do Maranhão",
    location: "Timon, MA",
    period: "2020 — 2021",
    status: "Concluído",
    statusColor: "text-accent",
  },
];

const EducationSection = () => (
  <section id="formacao">
    <div className="section-container">
      <h2 className="section-heading">Formação</h2>

      <div className="space-y-4">
        {education.map((edu, i) => (
          <div key={i} className="card-surface">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">{edu.title}</h3>
                <p className="text-sm text-muted-foreground">{edu.institution} · {edu.location}</p>
                <p className="text-xs font-mono text-muted-foreground mt-1">{edu.period}</p>
                <span className={`inline-block text-xs font-mono mt-2 px-2 py-0.5 rounded-full border border-border ${edu.statusColor}`}>
                  {edu.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
