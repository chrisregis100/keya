"use client";
import React, { useEffect, useState } from "react";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-slate-900 overflow-hidden">
      <style jsx>{`
        .grid-pattern {
          background-image: 
            linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px);
          background-size: 80px 80px;
        }
        
        .floating-element {
          animation: float 6s ease-in-out infinite;
          animation-delay: var(--delay);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s ease-out forwards;
          animation-delay: var(--delay, 0s);
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .glass-card {
          background: rgba(51, 65, 85, 0.3);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(148, 163, 184, 0.2);
        }
        
        .glass-card:hover {
          background: rgba(51, 65, 85, 0.4);
          transform: translateY(-2px);
        }
        
        .neon-button {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
          transition: all 0.3s ease;
        }
        
        .neon-button:hover {
          box-shadow: 0 0 30px rgba(99, 102, 241, 0.5);
          transform: translateY(-2px);
        }
      `}</style>

      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Éléments géométriques flottants - style minimaliste */}
      <div className="absolute inset-0">
        <div className="floating-element absolute top-32 left-8 w-16 h-16 border-2 border-slate-600 rounded-full opacity-30"
             style={{ 'animationDelay': '0s' }}></div>
        <div className="floating-element absolute top-48 right-16 w-12 h-12 border-2 border-slate-600 opacity-20"
             style={{ 'animationDelay': '1s' }}></div>
        <div className="floating-element absolute bottom-32 left-16 w-20 h-20 border-2 border-slate-600 opacity-25"
             style={{ 'animationDelay': '2s' }}></div>
        <div className="floating-element absolute bottom-48 right-8 w-8 h-8 border-2 border-slate-600 rounded-full opacity-30"
             style={{ 'animationDelay': '1.5s' }}></div>
      </div>

      {/* Points lumineux décoratifs */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full opacity-60" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full opacity-60" />
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-60" />
      <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-pink-400 rounded-full opacity-60" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge technologique */}
          <div className={`inline-flex items-center px-6 py-3 rounded-full glass-card text-white mb-12 fade-in-up ${isVisible ? '' : 'opacity-0'}`}
               style={{ 'animationDelay': '0.2s' }}>
            <Zap className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="font-medium">
              Transferts blockchain ultra-rapides
            </span>
          </div>

          {/* Titre principal */}
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight fade-in-up ${isVisible ? '' : 'opacity-0'}`}
              style={{ 'animationDelay': '0.4s' }}>
            Envoyez de l&apos;argent{" "}
            <span className="text-cyan-400">
              partout
            </span>
            <br />
            <span>avec la blockchain</span>
          </h1>

          <p className={`text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed fade-in-up ${isVisible ? '' : 'opacity-0'}`}
             style={{ 'animationDelay': '0.6s' }}>
            Révolutionnez vos transferts d&apos;argent avec notre plateforme
            blockchain. Sécurisé, instantané et transparent - l&apos;avenir des
            paiements internationaux.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 fade-in-up ${isVisible ? '' : 'opacity-0'}`}
               style={{ 'animationDelay': '0.8s' }}>
            <button className="neon-button text-white font-bold px-10 py-4 rounded-xl text-lg group">
              <span className="flex items-center justify-center">
                Commencer maintenant
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>

          {/* Stats blockchain */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto fade-in-up ${isVisible ? '' : 'opacity-0'}`}
               style={{ 'animationDelay': '1s' }}>
            
            <div className="glass-card p-8 rounded-2xl text-center transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-yellow-400">
                <Zap className="w-8 h-8" />
              </div>
              <div className="text-4xl font-black text-white mb-3">&lt; 30s</div>
              <div className="text-gray-400 font-medium">
                Transferts instantanés
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-green-400">
                <Shield className="w-8 h-8" />
              </div>
              <div className="text-4xl font-black text-white mb-3">100%</div>
              <div className="text-gray-400 font-medium">
                Blockchain sécurisée
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-blue-400">
                <Globe className="w-8 h-8" />
              </div>
              <div className="text-4xl font-black text-white mb-2">190+</div>
              <div className="text-gray-400 font-medium">Pays soutenus</div>
            </div>
          </div>
        </div>
      </div>

      {/* Transition bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
};

export default HeroSection;