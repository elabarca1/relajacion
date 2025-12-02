
import React from 'react';

export const Hero: React.FC = () => {
    const WHATSAPP_LINK = "https://chat.whatsapp.com/EjHfSRo1FOQCQSoJxsOBRl";

    return (
        <section className="relative text-white py-20 md:py-32 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1540206395-68808572332f?q=80&w=1974&auto=format&fit=crop" alt="Piedras zen apiladas en una playa al atardecer" className="absolute inset-0 w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-br from-teal-800/70 via-indigo-900/70 to-purple-800/70 animated-gradient"></div>
            <div className="absolute inset-0 bg-black opacity-30"></div>
            
            <div className="relative container mx-auto px-6 text-center z-10">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 tracking-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.6)'}}>
                    Protocolo de 21 Días de Relajación y Sanación Interior
                </h1>
                <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto font-light" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}}>
                    Armoniza cuerpo, mente y alma. Tu viaje hacia la serenidad comienza hoy.
                </p>
                <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                >
                    Únete al Reto Gratuito
                </a>
            </div>
        </section>
    );
};