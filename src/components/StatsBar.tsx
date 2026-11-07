import React from 'react';
import { Star, ShieldCheck, Clock } from 'lucide-react';

export const StatsBar: React.FC = () => {
  return (
    <section className="bg-slate-100/90 py-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: 5.0 Google */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center flex-shrink-0">
              <Star className="w-6 h-6 fill-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-extrabold text-slate-900">5,0</span>
                <span className="text-amber-500 font-bold text-xl">★</span>
              </div>
              <h3 className="font-bold text-slate-800 text-sm mt-0.5">
                Puntuación en Google Maps
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                3 reseñas públicas reales con máxima puntuación en la ficha oficial.
              </p>
            </div>
          </div>

          {/* Card 2: Trato directo con Sergio */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900">Trato Directo</div>
              <h3 className="font-bold text-slate-800 text-sm mt-0.5">
                Atención con Sergio
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Enseñanza cercana, paciente y sin intermediarios tanto en teórica como al volante.
              </p>
            </div>
          </div>

          {/* Card 3: En Alcaudete */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900">En Alcaudete</div>
              <h3 className="font-bold text-slate-800 text-sm mt-0.5">
                Tr.ª Peñuelas, 8
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Mañanas de 10:30 a 13:30 h y tardes de 5 a 8 (17:00 a 20:00 h).
              </p>
            </div>
          </div>
        </div>

        {/* Sub-text info strip */}
        <div className="mt-8 text-center text-xs sm:text-sm text-slate-500 font-medium">
          Formación reglada y cercana en Alcaudete · Información 100% verificada
        </div>
      </div>
    </section>
  );
};
