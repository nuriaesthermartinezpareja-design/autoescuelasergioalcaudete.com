import React from 'react';
import { Heart, Star, CalendarDays, ShieldCheck } from 'lucide-react';

export const PilaresSection: React.FC = () => {
  const pilares = [
    {
      icon: <Heart className="w-5 h-5 text-rose-500" />,
      title: 'Trato cercano',
      desc: 'Atención personalizada durante tu aprendizaje.',
    },
    {
      icon: <Star className="w-5 h-5 text-amber-500" />,
      title: 'Profesionalidad',
      desc: 'Una formación enfocada en que aprendas con confianza.',
    },
    {
      icon: <CalendarDays className="w-5 h-5 text-sky-600" />,
      title: 'Organización',
      desc: 'Facilidad para consultar y reservar tus clases.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      title: 'Aprende con confianza',
      desc: 'Acompañamiento durante el proceso para conseguir tu carnet.',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            NUESTROS PILARES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            ¿Por qué elegirnos en Alcaudete?
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Una metodología honesta, directa y centrada en tu progreso al volante.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pilares.map((p, idx) => (
            <div
              key={idx}
              className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center mb-4">
                {p.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-base">{p.title}</h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
