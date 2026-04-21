import { useState } from "react";
import { Button } from "@/components/ui/button";
import positivusLogo from "@/assets/positivus-logo.svg";
import { Menu, X } from "lucide-react"; // Importando ícones para o hamburger

const navLinks = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () =>
    setIsMenuOpen((prevIsMenuOpen) => {
      console.log(prevIsMenuOpen);
      return !prevIsMenuOpen;
    });

  return (
    <header className="relative flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex items-center">
        <img src={positivusLogo} alt="Positivus" className="h-6 md:h-9" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
            className="text-lg text-foreground underline-offset-4 hover:underline transition-colors"
          >
            {link}
          </a>
        ))}
        <Button
          variant="outline"
          className="rounded-lg border-foreground px-6 py-5 text-lg font-normal hover:bg-foreground hover:text-background transition-colors"
        >
          Request a quote
        </Button>
      </nav>

      {/* Mobile Menu Button (Hamburger) */}
      <button
        className="lg:hidden p-2 text-foreground"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-background border-b border-muted z-50 flex flex-col p-6 gap-6 lg:hidden shadow-xl animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
              className="text-xl text-foreground font-medium"
              onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar em um link
            >
              {link}
            </a>
          ))}
          <Button
            variant="outline"
            className="w-full rounded-lg border-foreground py-6 text-lg"
          >
            Request a quote
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
