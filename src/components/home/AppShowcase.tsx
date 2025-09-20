import { Scan, Smartphone, Zap } from "lucide-react";

const AppShowcase = () => {
  return (
    <section className="py-20 bg-slate-900 from-background to-accent-neon-blue/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interface mobile stylisée */}
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-sm mx-auto">
              {/* Phone frame avec effet néon */}
              <div className="neon-card bg-gradient-matrix p-8 rounded-3xl shadow-glow border border-accent-cyber-green/30">
                <div className="bg-background rounded-2xl p-6 shadow-inner">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <Zap className="w-5 h-5 text-primary" />
                      <span className="font-bold text-primary">
                        BlockTransfer
                      </span>
                    </div>
                    <Scan className="w-5 h-5 text-accent-cyber-green" />
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gradient-card p-4 rounded-xl border border-primary/20">
                      <div className="text-sm text-text-secondary mb-1">
                        Solde disponible
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        €2,843.50
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-accent-cyber-green/10 p-3 rounded-lg border border-accent-cyber-green/30">
                        <div className="text-xs text-accent-cyber-green mb-1">
                          Envoyé
                        </div>
                        <div className="font-bold text-text-primary">
                          €45,128
                        </div>
                      </div>
                      <div className="bg-accent-pink/10 p-3 rounded-lg border border-accent-pink/30">
                        <div className="text-xs text-accent-pink mb-1">
                          Économisé
                        </div>
                        <div className="font-bold text-text-primary">
                          €1,234
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cartes flottantes avec effets */}
            <div className="absolute top-10 -right-4 neon-card bg-gradient-tech/90 backdrop-blur-md rounded-xl p-4 max-w-xs animate-fade-in-up border border-accent-pink/30">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-4 bg-accent-neon-blue rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs font-bold">🇪🇺</span>
                </div>
                <span className="text-sm font-medium text-white">
                  EUR vers USD
                </span>
              </div>
              <div className="text-2xl font-bold text-white">€2,843.11</div>
              <div className="text-sm text-accent-cyber-green">
                +18.2% économisé
              </div>
            </div>

            <div
              className="absolute bottom-20 -left-8 neon-card bg-gradient-cyber/90 backdrop-blur-md rounded-xl p-4 max-w-xs animate-fade-in-up border border-accent-cyber-green/30"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-sm text-white/80 mb-1">Total envoyé</div>
              <div className="text-xl font-bold text-white">€45,128</div>
              <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                <div
                  className="bg-accent-cyber-green h-2 rounded-full shadow-glow"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="order-1 lg:order-2">
            <div className="max-w-lg">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-tech text-white mb-6 text-sm font-semibold">
                <Smartphone className="w-4 h-4 mr-2" />
                Application mobile disponible
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
                Téléchargez l&apos;app et commencez à{" "}
                <span className="bg-gradient-cyber bg-clip-text text-transparent">
                  transférer
                </span>{" "}
                en moins de 3 minutes
              </h2>

              <p className="text-lg text-text-secondary mb-8">
                Que ce soit pour rembourser un ami, couvrir des frais
                d&apos;études à l&apos;étranger, ou envoyer de l&apos;argent à
                votre famille - nous vous couvrons avec la technologie
                blockchain.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent-cyber-green rounded-full flex items-center justify-center shadow-glow">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-text-primary font-medium">
                    Envoyez vers 190+ pays instantanément
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent-neon-blue rounded-full flex items-center justify-center shadow-glow">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-text-primary font-medium">
                    Taux de change optimaux garantis
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent-pink rounded-full flex items-center justify-center shadow-glow">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-text-primary font-medium">
                    Sécurité blockchain de niveau bancaire
                  </span>
                </div>
              </div>

              <button className="neon-button btn btn-primary bg-gradient-tech text-white hover:shadow-neon font-semibold px-8 py-3 rounded-xl">
                Télécharger maintenant
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
