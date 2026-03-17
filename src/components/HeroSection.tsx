import { ArrowDown, Mail } from "lucide-react";

const HeroSection = () => {

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="section-container text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-mono mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Disponível para oportunidades
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Mayara Gregório
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground font-mono mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Desenvolvedora Fullstack em Formação
        </p>

        <p className="max-w-xl mx-auto text-muted-foreground mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Estudante de programação com foco em desenvolvimento full stack,
          construindo experiência com tecnologias modernas de front-end e back-end.
        </p>

        <div className="flex items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Ver Projetos
          </a>
        </div>

        <a href="#sobre" className="inline-flex mt-16 text-muted-foreground hover:text-primary transition-colors animate-bounce">
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
