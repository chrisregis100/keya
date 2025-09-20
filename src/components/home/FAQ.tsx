"use client";
import { useState } from "react";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Est-ce que c'est gratuit ?",
      answer: "Nous proposons des tarifs compétitifs et transparents, sans frais cachés. Notre premier transfert est entièrement gratuit pour les nouveaux utilisateurs."
    },
    {
      question: "Comment créer un compte ?",
      answer: "Créer un compte prend moins de 3 minutes. Indiquez simplement votre adresse e-mail, vérifiez votre identité et envoyez de l'argent partout dans le monde."
    },
    {
      question: "Y a-t-il des limites?",
      answer: "Les limites de transfert dépendent de votre niveau de vérification et du pays de destination. La plupart des utilisateurs peuvent envoyer jusqu'à 10 000 $ par transaction initiale."
    },
    {
      question: "Comment puis-je déposer de l'argent?",
      answer: "Vous pouvez déposer de l'argent par virement bancaire, carte de débit, carte de crédit ou portefeuille numérique. Toutes les méthodes sont sécurisées et cryptées."
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
              Des questions ? Nous avons les réponses !
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Tout ce que vous devez savoir sur les envois d'argent à l'international. Pour toute question, n'hésitez pas à contacter notre équipe d'assistance.
            </p>
            
            <button className="bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors">
              Contactez-nous
            </button>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-border rounded-xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="font-semibold text-text-primary">
                    {faq.question}
                  </span>
                  <svg 
                    className={`w-5 h-5 text-text-secondary transition-transform ${
                      openFAQ === index ? 'rotate-45' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;