import { ArrowUp, BookOpen, Map, Utensils, BookOpenCheck } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { name: "Album", to: "/gallery", icon: Map },
  { name: "Gastronomie", to: "/food", icon: Utensils },
  { name: "Lectures", to: "/recommendations", icon: BookOpenCheck },
] as const;

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#e3d7ca] bg-[#191512] px-5 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <Link to="/" className="flex items-center gap-3">
          <BookOpen className="h-7 w-7 text-[#d2a36f]" />
          <span className="font-playfair text-2xl font-semibold">Carnet de Jordanie</span>
        </Link>

        <nav className="flex flex-wrap gap-2" aria-label="Navigation de bas de page">
          {footerLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.to}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-inter text-sm text-white/80 transition hover:border-[#d2a36f] hover:text-white"
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 font-inter text-sm font-semibold text-[#191512] transition hover:bg-[#f7f2ea] focus:outline-none focus:ring-2 focus:ring-[#d2a36f] focus:ring-offset-2 focus:ring-offset-[#191512]"
        >
          <ArrowUp className="h-4 w-4" />
          Retour en haut
        </button>
      </div>
    </footer>
  );
};
