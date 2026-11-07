import React from 'react';
import { Car, Bike, GraduationCap, Check, ArrowRight } from 'lucide-react';
import { PERMITS } from '../data/mockData';
import { PermitInfo } from '../types';

interface PermisosSectionProps {
  onSelectPermit: (permit: PermitInfo) => void;
  onBookPermit: (permitId: string) => void;
}

export const PermisosSection: React.FC<PermisosSectionProps> = ({
  onSelectPermit,
  onBookPermit,
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'b':
        return <Car className="w-6 h-6 text-sky-600" />;
      case 'moto':
        return <Bike className="w-6 h-6 text-emerald-600" />;
      default:
        return <GraduationCap className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section id="carnets" className="py-20 bg-gradient-to-b from-slate-50 via-emerald-50/20 to-slate-50 border-b border-slate-200 relative overflow-hidden">
      {/* 25% Diffused Green / 75% Blue Atmosphere */}
      <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(132,204,22,0.12)_0%,rgba(14,165,233,0.06)_40%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-32 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(34,197,94,0.10)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            OFERTA FORMATIVA
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Categorías de Permisos en Alcaudete
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Formación práctica y teórica adaptada a tus necesidades. Selecciona el
            permiso que te interesa para consultar detalles.
          </p>
        </div>

        {/* 3 Permisos Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PERMITS.map((permit) => (
            <div
              key={permit.id}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(permit.id)}
                  </div>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {permit.id === 'b' ? 'El más popular' : permit.id === 'moto' ? 'Movilidad ágil' : 'A medida'}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  {permit.title}
                </h3>
                <h4 className="text-sm font-semibold text-sky-700 mt-1">
                  {permit.subtitle}
                </h4>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                  {permit.description}
                </p>

                {/* Checklist Features */}
                <div className="mt-5 pt-5 border-t border-slate-100 space-y-2.5">
                  {permit.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-lime-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="mt-7 pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectPermit(permit)}
                  className="text-xs font-bold text-slate-600 hover:text-sky-700 inline-flex items-center gap-1 group/btn"
                >
                  Más información
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onBookPermit(permit.id)}
                  className="bg-[#25D366] hover:bg-[#20ba59] text-slate-950 text-xs font-bold px-3.5 py-2 rounded-lg shadow-sm hover:shadow-emerald-500/20 transition-all active:scale-95 flex items-center gap-1.5"
                >
                  <span>Reservar por WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
