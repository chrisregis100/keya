import { Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-tech rounded-xl flex items-center justify-center shadow-glow">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="ml-3 text-2xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
              KeyaPay
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-text-secondary hover:text-primary transition-colors font-medium"
            >
              Envoyer
            </a>
            <a
              href="#"
              className="text-text-secondary hover:text-primary transition-colors font-medium"
            >
              Tarifs
            </a>
            <a
              href="#"
              className="text-text-secondary hover:text-primary transition-colors font-medium"
            >
              Suivre
            </a>
            <a
              href="#"
              className="text-text-secondary hover:text-primary transition-colors font-medium"
            >
              Aide
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <button className="hidden btn btn-ghost sm:inline-flex text-text-secondary hover:text-primary font-medium">
              Se connecter
            </button>
            <button className="neon-button btn btn-primary bg-gradient-tech text-white hover:shadow-neon font-semibold">
              Commencer
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
