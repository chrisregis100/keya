import { ArrowRight, Globe, Shield, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Grille matricielle animée */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }, (_, i) => (
            <div
              key={i}
              className="border border-accent-cyber-green/20 floating-element"
              style={{ animationDelay: `${Math.random() * 2}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Éléments flottants blockchain */}
      <div className="absolute inset-0">
        <div className="floating-element absolute top-20 left-10 w-16 h-16 bg-gradient-tech rounded-full backdrop-blur-sm border border-accent-pink/30"></div>
        <div className="floating-element absolute top-40 right-20 w-12 h-12 bg-gradient-cyber rounded-lg backdrop-blur-sm border border-accent-neon-blue/30"></div>
        <div className="floating-element absolute bottom-40 left-20 w-20 h-20 bg-gradient-matrix rounded-2xl backdrop-blur-sm border border-accent-cyber-green/30"></div>
        <div className="floating-element absolute top-1/3 right-1/4 w-8 h-8 bg-accent-gold/80 rounded-full backdrop-blur-sm"></div>
      </div>

      {/* Effet de glow central */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-neon rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge technologique */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-tech text-white mb-8 shadow-glow">
            <Zap className="w-5 h-5 mr-2" />
            <span className="font-semibold">
              Transferts blockchain ultra-rapides
            </span>
          </div>

          {/* Titre principal */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-hero mb-8 leading-tight">
            Envoyez de l&apos;argent{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-cyber bg-clip-text text-transparent">
                partout
              </span>
            </span>
            <br />
            <span className="bg-gradient-matrix bg-clip-text text-transparent">
              avec la blockchain
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Révolutionnez vos transferts d&apos;argent avec notre plateforme
            blockchain. Sécurisé, instantané et transparent - l&apos;avenir des
            paiements internationaux.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="neon-button btn btn-primary bg-gradient-tech text-white hover:shadow-neon font-bold px-10 py-4 rounded-2xl text-lg group">
              <span className="flex items-center">
                Commencer maintenant
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Stats blockchain */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="neon-card p-6 rounded-xl bg-white/10 backdrop-blur-md border border-accent-neon-blue/30">
              <div className="flex items-center justify-center w-12 h-12 bg-accent-cyber-green/20 rounded-full mb-4 mx-auto">
                <Zap className="w-6 h-6 text-accent-cyber-green" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">&lt; 30s</div>
              <div className="text-accent-cyber-green font-medium">
                Transferts instantanés
              </div>
            </div>

            <div className="neon-card p-6 rounded-xl bg-white/10 backdrop-blur-md border border-accent-pink/30">
              <div className="flex items-center justify-center w-12 h-12 bg-accent-pink/20 rounded-full mb-4 mx-auto">
                <Shield className="w-6 h-6 text-accent-pink" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-accent-pink font-medium">
                Sécurisé blockchain
              </div>
            </div>

            <div className="neon-card p-6 rounded-xl bg-white/10 backdrop-blur-md border border-accent-gold/30">
              <div className="flex items-center justify-center w-12 h-12 bg-accent-gold/20 rounded-full mb-4 mx-auto">
                <Globe className="w-6 h-6 text-accent-gold" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">190+</div>
              <div className="text-accent-gold font-medium">Pays supportés</div>
            </div>
          </div>
        </div>
      </div>

      {/* Transition bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
