import { Shield, Zap, UserCheck, Eye, CreditCard, FileCheck } from "lucide-react";

const Feature = () => {
  const features = [
    {
      title: "Sécurité blockchain avancée",
      description: "Votre argent est protégé par des protocoles de sécurité blockchain et une conformité réglementaire dans tous les pays.",
      icon: Shield,
      color: "accent-cyber-green"
    },
    {
      title: "Transferts ultra-rapides",
      description: "Envoyez de l'argent instantanément grâce à la technologie blockchain, sans intermédiaires bancaires.",
      icon: Zap,
      color: "accent-neon-blue"
    },
    {
      title: "Inscription immédiate",
      description: "Commencez à envoyer de l'argent en quelques minutes avec notre processus de vérification simplifié.",
      icon: UserCheck,
      color: "accent-pink"
    },
    {
      title: "Suivi en temps réel",
      description: "Suivez votre transfert en temps réel avec des mises à jour détaillées à chaque étape sur la blockchain.",
      icon: Eye,
      color: "accent-gold"
    },
    {
      title: "Méthodes de paiement flexibles",
      description: "Connectez vos méthodes de paiement préférées : cartes, virements bancaires et portefeuilles crypto.",
      icon: CreditCard,
      color: "accent-electric-orange"
    },
    {
      title: "Transparence totale",
      description: "Transparence complète avec tous les frais, taux de change et conditions clairement affichés.",
      icon: FileCheck,
      color: "primary"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 from-background via-accent-neon-blue/5 to-accent-cyber-green/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-tech text-white mb-6 shadow-glow">
            <span className="font-semibold">Sécurité • Vitesse • Simplicité</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            Bien plus qu'un simple envoi{" "} 
            <span className="bg-secondary bg-clip-text text-transparent">d'argent</span>.
            <br />
            La révolution blockchain !
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Que ce soit pour soutenir votre famille, payer des services, ou gérer des affaires internationales, 
            nous fournissons les outils et la sécurité dont vous avez besoin pour des transferts sans souci.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="group neon-card p-8 rounded-xl hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-gradient-card border border-primary/20"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature;