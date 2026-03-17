import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Formação", href: "#formacao" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-bold text-primary font-mono">
          MG
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-background border-b border-border px-6 pb-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
