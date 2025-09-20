const Countries = () => {
  const countries = [
    { flag: "🇧🇪", name: "Belgium" },
    { flag: "🇨🇳", name: "China" },
    { flag: "🇫🇷", name: "France" },
    { flag: "🇱🇹", name: "Lithuania" },
    { flag: "🇦🇺", name: "Australia" },
    { flag: "🇮🇹", name: "Italy" },
    { flag: "🇩🇰", name: "Denmark" },
    { flag: "🇧🇩", name: "Bangladesh" },
    { flag: "🇫🇷", name: "France" },
    { flag: "🇬🇧", name: "United Kingdom" },
    { flag: "🇧🇩", name: "Bangladesh" },
    { flag: "🇩🇪", name: "Germany" }
  ];

  return (
    <section className="py-20 bg-slate-900 from-background via-accent-neon-blue/5 to-accent-cyber-green/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-accent-orange font-semibold mb-4">
             Soutenir plus de 180+ ✈️
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            De Tokyo à
            Timbuktu, nous sommes
            you <span className="text-primary">là pour vous</span>
          </h2>
        </div>

        {/* Countries grid */}
        <div className="flag-grid max-w-4xl mx-auto mb-12">
          {countries.map((country, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center p-4 rounded-xl hover:bg-secondary/10 hover:shadow-card transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {country.flag}
              </div>
              <span className="text-sm text-text-secondary group-hover:text-text-secondary transition-colors">
                {country.name}
              </span>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center">
          <p className="text-text-secondary mb-6">
            Vous ne trouvez pas votre pays ? Pas de souci, nous travaillons constamment à ajouter de nouveaux pays et devises.
          </p>
          <button className="text-primary font-semibold hover:text-primary-dark transition-colors">
            Afficher tous les pays pris en charge →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Countries;