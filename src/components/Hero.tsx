import React, { useState } from 'react';
import { Star, Check, ArrowRight, ShieldCheck, Award, Sparkles, MessageSquare, HelpCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

interface HeroProps {
  onScrollToBot: () => void;
  onScrollToBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToBot, onScrollToBooking }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: 1,
      title: 'Elige tu carnet (o te orientamos si dudas)',
      desc: 'Coche B, Moto o Reciclaje. Si dudas entre permisos o edad, usa el test opcional.',
    },
    {
      num: 2,
      title: 'Formación teórica clara',
      desc: 'Explicaciones actualizadas y apoyo continuo.',
    },
    {
      num: 3,
      title: 'Prácticas al volante en Alcaudete',
      desc: 'Aprende con tranquilidad y seguridad en las rutas reales.',
    },
    {
      num: 4,
      title: '¡Tu carnet en el bolsillo!',
      desc: 'Libertad total para moverte a donde quieras.',
    },
  ];

  return (
    <section
      id="inicio"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-[#061426] via-[#081d36] to-[#051222] text-white overflow-hidden"
    >
      {/* 25% Diffused Green / 75% Deep Blue Ambient Atmosphere */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(132,204,22,0.22)_0%,rgba(34,197,94,0.14)_35%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(34,197,94,0.18)_0%,rgba(16,185,129,0.10)_45%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_60%_30%,rgba(132,204,22,0.15),transparent_70%)] pointer-events-none" />

      {/* Subtle road line styling in background */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top kicker meta info */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
              <span className="flex items-center gap-1 text-amber-400 font-bold">
                <Star className="w-4 h-4 fill-amber-400" />
                5.0
              </span>
              <span>Valoración en Google</span>
              <span className="text-slate-600">·</span>
              <span>Alcaudete, Jaén</span>
              <span className="text-slate-600">·</span>
              <a
                href={`tel:${CONTACT_INFO.phone1Raw}`}
                className="text-lime-400 hover:underline font-semibold"
              >
                {CONTACT_INFO.phone1}
              </a>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Tu carnet{' '}
              <span className="text-[#84cc16] drop-shadow-sm">
                empieza aquí
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Aprende a conducir con una autoescuela cercana, profesional y
              preparada para ayudarte a conseguir tu carnet.
            </p>

            {/* CTA Buttons - Direct booking as primary, test as optional helper */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onScrollToBooking}
                className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-extrabold px-6 py-3.5 rounded-lg text-base shadow-lg hover:shadow-emerald-500/25 transition-all transform active:scale-98"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950 stroke-[#25D366]" />
                <span>Reservar clase por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToBot}
                className="flex items-center justify-center gap-2 bg-[#0e2238] hover:bg-[#153150] text-slate-200 hover:text-white border border-slate-700/80 hover:border-lime-400 font-semibold px-6 py-3.5 rounded-lg text-base transition-colors group"
              >
                <HelpCircle className="w-4 h-4 text-lime-400" />
                <span>¿No sabes qué carnet sacarte?</span>
              </button>
            </div>

            {/* Clarifying guidance: the test is not mandatory */}
            <p className="text-xs text-slate-400 leading-snug">
              ¿Ya tienes claro tu carnet? Escríbenos directamente. Si tienes dudas de edad o requisitos, el test te orienta en 1 minuto.
            </p>

            {/* 3 Value propositions */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-lime-400 flex-shrink-0" />
                <span>Prácticas adaptadas a tu horario</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-lime-400 flex-shrink-0" />
                <span>Teórica y prácticas a tu ritmo</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-lime-400 flex-shrink-0" />
                <span>Matrícula directa y sin rodeos</span>
              </div>
            </div>
          </div>

          {/* Right Column: "TU CAMINO AL VOLANTE" Progression Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#091e36]/90 border border-lime-500/30 rounded-2xl p-6 sm:p-7 shadow-[0_15px_50px_-10px_rgba(132,204,22,0.18)] backdrop-blur-md relative">
              {/* Card Header with Spanish L learner plate */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-700/60 mb-5">
                <div className="flex items-center gap-3.5">
                  {/* Spanish L Badge */}
                  <div className="w-12 h-12 bg-[#008f39] text-white font-extrabold text-2xl flex items-center justify-center rounded-lg shadow-inner border border-emerald-400/40">
                    L
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-lime-400 tracking-wider uppercase">
                      Tu Camino al Volante
                    </span>
                    <h2 className="text-base sm:text-lg font-bold text-white leading-tight">
                      Autoescuela Sergio Alcaudete
                    </h2>
                  </div>
                </div>

                <span className="bg-slate-800/80 border border-slate-700 text-xs text-slate-300 px-2.5 py-1 rounded-md font-semibold">
                  Paso {activeStep}
                </span>
              </div>

              {/* Steps List */}
              <div className="space-y-4">
                {steps.map((s) => {
                  const isActive = activeStep === s.num;
                  return (
                    <div
                      key={s.num}
                      onClick={() => setActiveStep(s.num)}
                      className={`p-3.5 rounded-xl transition-all cursor-pointer border ${
                        isActive
                          ? 'bg-[#122744] border-lime-500/50 shadow-md shadow-lime-950/20'
                          : 'bg-[#0a182b]/60 border-slate-800 hover:border-slate-700 text-slate-400'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${
                            isActive
                              ? 'bg-lime-400 text-slate-950 font-extrabold'
                              : 'bg-slate-800 text-slate-300'
                          }`}
                        >
                          {s.num}
                        </div>
                        <div className="flex-1">
                          <h4
                            className={`text-sm font-bold ${
                              isActive ? 'text-white' : 'text-slate-300'
                            }`}
                          >
                            {s.title}
                          </h4>
                          <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                            {s.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs">
                <span className="text-slate-400">
                  Consultas y matrícula abiertas
                </span>
                <button
                  onClick={onScrollToBot}
                  className="text-lime-400 hover:text-lime-300 font-bold inline-flex items-center gap-1 group"
                >
                  Empieza ahora
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
