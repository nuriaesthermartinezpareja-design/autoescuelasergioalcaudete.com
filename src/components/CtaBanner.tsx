import React from 'react';
import { Sparkles, MessageSquare, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

interface CtaBannerProps {
  onScrollToBot: () => void;
  onScrollToBooking: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  onScrollToBot,
  onScrollToBooking,
}) => {
  return (
    <section className="bg-gradient-to-br from-[#061426] via-[#091f38] to-[#051322] py-16 sm:py-20 text-white relative overflow-hidden border-t border-b border-lime-500/20">
      {/* 25% Diffused Green / 75% Blue Atmosphere */}
      <div className="absolute -top-24 -left-20 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(132,204,22,0.22)_0%,rgba(34,197,94,0.12)_40%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-20 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(34,197,94,0.18)_0%,rgba(14,165,233,0.14)_45%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_45%,rgba(132,204,22,0.16),transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="text-xs font-semibold text-lime-400 tracking-wider uppercase block mb-2">
          El mejor momento de conducir es hoy
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          ¿Empezamos?
        </h2>
        <p className="text-slate-300 text-sm sm:text-lg mt-3 max-w-xl mx-auto leading-relaxed">
          Cuéntanos qué carnet buscas y te ayudamos a encontrar la opción
          adecuada para ti.
        </p>

        {/* 3 Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={onScrollToBooking}
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-extrabold px-6 py-3 rounded-xl text-sm transition-all flex items-center justify-center gap-2 active:scale-95 shadow-lg hover:shadow-emerald-500/20 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950 stroke-[#25D366]" />
            <span>Reservar por WhatsApp</span>
          </button>

          <button
            onClick={onScrollToBot}
            className="w-full sm:w-auto bg-[#0d223a] hover:bg-[#143254] text-slate-200 hover:text-white border border-slate-700 hover:border-lime-400 font-semibold px-6 py-3 rounded-xl text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-lime-400" />
            <span>¿No sabes qué carnet sacarte?</span>
          </button>

          <a
            href={`tel:${CONTACT_INFO.phone1Raw}`}
            className="w-full sm:w-auto bg-[#0d223a] hover:bg-[#143254] text-slate-200 border border-slate-700 font-semibold px-6 py-3 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-lime-400" />
            <span>Llamar ahora</span>
          </a>
        </div>

        {/* Footer address text strip */}
        <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-400">
          Autoescuela Sergio · Tr.ª Peñuelas, 8, Alcaudete (Jaén) · Tlf: 690 14 04 40
        </div>
      </div>
    </section>
  );
};
