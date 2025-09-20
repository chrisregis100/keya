const Trust = () => {
  const partners = [
    { name: "Visa", logo: "💳" },
    { name: "Mastercard", logo: "💳" },
    { name: "Swift", logo: "🏦" },
    { name: "Trustpilot", logo: "⭐" },
    { name: "FCA", logo: "🏛️" },
    { name: "Partenaire bancaire", logo: "🏛️" }
  ];

  return (
    <section className="border-b border-white/20  py-20 bg-slate-900 from-background via-accent-neon-blue/5 to-accent-cyber-green/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-text-secondary font-semibold mb-4">
            Des millions de personnes dans le monde entier nous font confiance
          </p>
          <h3 className="text-2xl font-bold text-text-primary mb-8">
            Réglementé et sécurisé par les leaders du secteur
          </h3>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-4 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="text-3xl mb-2">{partner.logo}</div>
              <span className="text-sm text-text-secondary font-medium">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-secondary mb-2">$2.5B+</div>
            <p className="text-text-secondary">Total transféré</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary mb-2">5M+</div>
            <p className="text-text-secondary">Des clients satisfaits</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary mb-2">180+</div>
            <p className="text-text-secondary">Pays pris en charge</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;