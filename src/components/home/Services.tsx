const Services = () => {
  const services = [
    {
      title: "Transfers personnels",
      description: "Envoyez de l'argent à votre famille et à vos amis dans le monde entier",
      color: "bg-primary",
      textColor: "text-white",
      icon: "👥"
    },
    {
      title: "Transfers d'entreprises",
      description: "Optimisez vos paiements commerciaux internationaux",
      color: "bg-primary/10",
      textColor: "text-white",
      icon: "💼"
    },
    {
      title: "Change de devises",
      description: "Obtention des meilleurs taux pour vos conversions de devises",
      color: "bg-primary/10",
      textColor: "text-white",
      icon: "💱"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-white/70 font-semibold mb-4">
            Tout ce dont vous avez besoin✨
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Juste <span className="text-primary">ce qu'il faut </span> pour vous motiver
            au  quotidien
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`${service.color} ${service.textColor} p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer shadow-hero`}
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-lg opacity-90 leading-relaxed">
                {service.description}
              </p>
              
              {/* CTA arrow */}
              <div className="mt-6 flex items-center text-lg font-semibold">
                Apprendre encore plus
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-secondary text-bg-footer font-semibold px-8 py-3 rounded-xl hover:bg-primary/20 transition-colors">
            Démarrer un transfert
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;