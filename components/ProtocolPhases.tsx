
import React, { useState } from 'react';

const protocolData = [
  {
    phase: "FASE 1 (Días 1–7)",
    title: "Desprogramación del Estrés y Calma del Sistema Nervioso",
    days: [
      "Día 1 – Respiración Fundacional",
      "Día 2 – Escaneo Corporal Espiritual",
      "Día 3 – Liberación del Peso Interno",
      "Día 4 – Anclaje de Paz",
      "Día 5 – Expansión del Corazón",
      "Día 6 – Baño de Luz en Silencio",
      "Día 7 – Ritual de Descanso Profundo",
    ]
  },
  {
    phase: "FASE 2 (Días 8–14)",
    title: "Reprogramación Emocional y Energética",
    days: [
      "Día 8 – Visualización del “Yo en Paz”",
      "Día 9 – Círculo de Protección",
      "Día 10 – Desprogramación del Estrés Crónico",
      "Día 11 – Reemplazo Energético",
      "Día 12 – Respiración del Alma",
      "Día 13 – Reencuentro con tu Centro",
      "Día 14 – Ritual de Renacimiento",
    ]
  },
  {
    phase: "FASE 3 (Días 15–21)",
    title: "Expansión Interior y Consolidación de la Paz",
    days: [
      "Día 15 – Fusión con el Silencio",
      "Día 16 – Activación del “Yo Superior”",
      "Día 17 – Conexión con la Naturaleza",
      "Día 18 – Meditación del Corazón Luminoso",
      "Día 19 – Gratitud Profunda",
      "Día 20 – Integración Final",
      "Día 21 – Ritual de Coronación Espiritual",
    ]
  }
];

interface AccordionItemProps {
    phase: string;
    title: string;
    days: string[];
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ phase, title, days, isOpen, onClick }) => {
    return (
        <div className="border border-slate-200 rounded-lg overflow-hidden mb-4 bg-white">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center p-5 text-left font-semibold text-slate-800 bg-slate-50 hover:bg-slate-100 transition"
            >
                <div>
                    <span className="text-emerald-600 block text-sm font-bold">{phase}</span>
                    <span className="text-lg">{title}</span>
                </div>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="p-5 border-t border-slate-200">
                    <ul className="space-y-3 text-slate-600">
                        {days.map((day, index) => (
                            <li key={index} className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                {day}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export const ProtocolPhases: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">El Camino de 21 Días hacia tu Paz Interior</h2>
                    <p className="text-lg text-slate-600 mt-4 max-w-3xl mx-auto">
                        Un viaje estructurado en tres fases para desprogramar el estrés, reprogramar tu energía y expandir tu conciencia.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    {protocolData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            {...item}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
