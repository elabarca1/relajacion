
import React from 'react';

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


export const Schedule: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-slate-50/70 rounded-xl shadow-lg p-8 md:p-12 text-center border border-slate-200">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
                        Fechas y Horarios para tu Transformación
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-10 text-left my-8">
                        <div className="flex items-start space-x-4">
                            <div className="bg-emerald-100 text-emerald-700 rounded-full p-4 flex-shrink-0">
                                <CalendarIcon />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-slate-800 mb-2">Inicio y Frecuencia</h3>
                                <p className="text-slate-600 text-lg"><strong>INICIO:</strong> Lunes 1 de Diciembre</p>
                                <p className="text-slate-600 text-lg">Lunes a sábado.</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                             <div className="bg-emerald-100 text-emerald-700 rounded-full p-4 flex-shrink-0">
                                <ClockIcon />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-slate-800 mb-2">Horarios por Región</h3>
                                <ul className="text-slate-600 text-lg space-y-1">
                                    <li><strong>6am:</strong> LIMA - Colombia - Ecuador</li>
                                    <li><strong>7am:</strong> Venezuela</li>
                                    <li><strong>8am:</strong> Argentina - Chile</li>
                                    <li><strong>12m:</strong> España</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-200 pt-8 mt-4">
                         <p className="text-xl text-slate-700 mb-4 font-semibold">
                            Solo necesitas <span className="text-emerald-600">15 minutos al día</span> para sentir más paz, más claridad y más energía.
                        </p>
                        <p className="text-lg italic text-slate-600">
                            Si estás listo para relajarte, sanar y crecer…<br/>entonces este protocolo es para ti.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};