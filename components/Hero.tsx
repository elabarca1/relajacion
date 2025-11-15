
import React from 'react';

export const Hero: React.FC = () => {
    const WHATSAPP_LINK = "https://chat.whatsapp.com/EjHfSRo1FOQCQSoJxsOBRl";

    return (
        <section className="relative text-white py-20 md:py-32">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <img src="https://picsum.photos/id/1015/1920/1080" alt="Paisaje sereno" className="absolute inset-0 w-full h-full object-cover"/>
            
            <div className="relative container mx-auto px-6 text-center z-10">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 tracking-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.6)'}}>
                    Protocolo de 21 Días de Relajación Espiritual
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
