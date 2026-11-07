import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  Clock,
  Phone,
  CheckCircle2,
  CalendarCheck,
  Sparkles,
  ArrowRight,
  Send,
  User,
  ShieldCheck,
} from 'lucide-react';
import { CONTACT_INFO, getWhatsAppLink } from '../data/mockData';

interface WhatsAppBookingSectionProps {
  preselectedPermitId?: string;
}

export const WhatsAppBookingSection: React.FC<WhatsAppBookingSectionProps> = ({
  preselectedPermitId,
}) => {
  const [selectedPermit, setSelectedPermit] = useState<string>(
    preselectedPermitId === 'moto'
      ? 'Carnet de Moto'
      : preselectedPermitId === 'otros'
      ? 'Clases de Reciclaje / Consulta'
      : 'Carnet B (Coche)'
  );

  useEffect(() => {
    if (preselectedPermitId === 'moto') {
      setSelectedPermit('Carnet de Moto');
    } else if (preselectedPermitId === 'otros') {
      setSelectedPermit('Clases de Reciclaje / Consulta');
    } else if (preselectedPermitId === 'b') {
      setSelectedPermit('Carnet B (Coche)');
    }
  }, [preselectedPermitId]);

  const [preferredShift, setPreferredShift] = useState<'tarde' | 'manana' | 'flexible'>('tarde');
  const [userName, setUserName] = useState<string>('');
  const [additionalNote, setAdditionalNote] = useState<string>('');

  const getShiftText = () => {
    if (preferredShift === 'manana') return 'por las mañanas (10:30 - 13:30 h)';
    if (preferredShift === 'tarde') return 'por las tardes (de 5 a 8 de la tarde / 17:00 - 20:00 h)';
    return 'con horario flexible (mañana o tarde)';
  };

  const generatedMessage = `¡Hola Sergio! Me pongo en contacto desde la web de Autoescuela Sergio para reservar una clase / consultar información.
• Carnet/Servicio: ${selectedPermit}
• Horario preferido: ${getShiftText()}
${userName.trim() ? `• Mi nombre: ${userName.trim()}` : ''}
${additionalNote.trim() ? `• Nota: ${additionalNote.trim()}` : ''}
¿Qué disponibilidad tienes esta semana? ¡Gracias!`.trim();

  const handleOpenWhatsApp = () => {
    const url = getWhatsAppLink(generatedMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="como-reservar" className="py-20 bg-gradient-to-b from-slate-50 via-emerald-50/25 to-slate-50 border-b border-slate-200 relative overflow-hidden">
      {/* 25% Diffused Green / 75% Blue Ambient Lighting */}
      <div className="absolute -top-32 right-10 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(132,204,22,0.14)_0%,rgba(14,165,233,0.06)_40%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-10 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(34,197,94,0.12)_0%,rgba(14,165,233,0.08)_40%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 inline-flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
            RESERVA RÁPIDA Y SIN COMPLICACIONES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Cómo Reservar tu Clase por WhatsApp
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Olvídate de sistemas complicados: reserva tus prácticas y resuelve
            cualquier duda hablando directamente con Sergio por WhatsApp.
          </p>
        </div>

        {/* 3 Steps Guide ("Cómo funciona") */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Paso 1 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative group hover:border-slate-300 transition-all">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 font-extrabold text-base flex items-center justify-center mb-4">
              1
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">
              Elige tu permiso o consulta
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Indica si buscas Carnet B (coche), moto, clases de reciclaje o
              información general sobre matrícula.
            </p>
          </div>

          {/* Paso 2 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative group hover:border-slate-300 transition-all">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 font-extrabold text-base flex items-center justify-center mb-4">
              2
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">
              Elige tu horario de preferencia
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Disponibilidad de mañanas (10:30 - 13:30 h) o por las tardes de <strong>5 a 8</strong> (17:00 - 20:00 h).
            </p>
          </div>

          {/* Paso 3 */}
          <div className="bg-white rounded-2xl p-6 border border-[#25D366]/40 bg-emerald-50/20 shadow-sm relative group hover:border-[#25D366] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white font-extrabold text-base flex items-center justify-center mb-4 shadow-sm">
              3
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">
              Sergio te confirma la cita
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Recibirás respuesta personalizada inmediata para fijar la hora
              exacta que mejor encaje con tu ritmo.
            </p>
          </div>
        </div>

        {/* Interactive WhatsApp Booking Console */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Configuration Panel (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
              <CalendarCheck className="w-5 h-5 text-sky-700" />
              <span>Prepara tu mensaje para Sergio</span>
            </div>

            {/* Select Permit */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                ¿Qué tipo de permiso o clase deseas?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  'Carnet B (Coche)',
                  'Carnet de Moto',
                  'Clases de Reciclaje / Consulta',
                ].map((type) => {
                  const isSelected = selectedPermit === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedPermit(type)}
                      className={`py-3 px-3.5 rounded-xl text-xs font-bold border text-left transition-all ${
                        isSelected
                          ? 'bg-sky-50 text-sky-800 border-sky-600 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Select Shift with 5 to 8 PM clearly stated */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Horario de tu preferencia:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {/* Afternoon 5 to 8 */}
                <button
                  type="button"
                  onClick={() => setPreferredShift('tarde')}
                  className={`p-3.5 rounded-xl text-left border transition-all ${
                    preferredShift === 'tarde'
                      ? 'bg-lime-50 border-lime-600 text-slate-950 shadow-xs ring-1 ring-lime-500'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-xs sm:text-sm">Tardes (de 5 a 8)</span>
                    <span className="w-2 h-2 rounded-full bg-lime-500" />
                  </div>
                  <span className="block text-[11px] text-slate-500 mt-1">
                    17:00 a 20:00 h
                  </span>
                </button>

                {/* Morning */}
                <button
                  type="button"
                  onClick={() => setPreferredShift('manana')}
                  className={`p-3.5 rounded-xl text-left border transition-all ${
                    preferredShift === 'manana'
                      ? 'bg-sky-50 border-sky-600 text-slate-950 shadow-xs ring-1 ring-sky-500'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-xs sm:text-sm">Mañanas</span>
                    <span className="w-2 h-2 rounded-full bg-sky-500" />
                  </div>
                  <span className="block text-[11px] text-slate-500 mt-1">
                    10:30 a 13:30 h
                  </span>
                </button>

                {/* Flexible */}
                <button
                  type="button"
                  onClick={() => setPreferredShift('flexible')}
                  className={`p-3.5 rounded-xl text-left border transition-all ${
                    preferredShift === 'flexible'
                      ? 'bg-slate-100 border-slate-700 text-slate-950 shadow-xs ring-1 ring-slate-700'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-xs sm:text-sm">Flexible</span>
                    <span className="w-2 h-2 rounded-full bg-slate-400" />
                  </div>
                  <span className="block text-[11px] text-slate-500 mt-1">
                    Según tu disponibilidad
                  </span>
                </button>
              </div>
            </div>

            {/* Name and notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Tu nombre (opcional):
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Ej. Ana Belén"
                    className="w-full bg-slate-50 hover:bg-white text-slate-900 text-xs sm:text-sm pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-sky-600 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Comentario adicional (opcional):
                </label>
                <input
                  type="text"
                  value={additionalNote}
                  onChange={(e) => setAdditionalNote(e.target.value)}
                  placeholder="Ej. Empezar esta semana"
                  className="w-full bg-slate-50 hover:bg-white text-slate-900 text-xs sm:text-sm px-3 py-2.5 rounded-xl border border-slate-200 focus:border-sky-600 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Right Live WhatsApp Preview & Action Button (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#071628] via-[#091f38] to-[#062426] text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800 relative overflow-hidden">
            {/* Diffused green ambient light inside panel */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold shadow-md">
                    <MessageSquare className="w-5 h-5 fill-white stroke-[#25D366]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">
                      WhatsApp Autoescuela Sergio
                    </h4>
                    <p className="text-[11px] text-emerald-400">
                      En línea · 690 14 04 40
                    </p>
                  </div>
                </div>

                <span className="text-[11px] text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                  Alcaudete
                </span>
              </div>

              {/* Chat bubble preview */}
              <div className="text-xs text-slate-400 mb-2">
                Vista previa del mensaje:
              </div>
              <div className="bg-[#122842] border border-slate-700/80 rounded-2xl p-4 text-xs sm:text-sm text-slate-200 leading-relaxed font-mono relative">
                <p className="whitespace-pre-line text-slate-100">{generatedMessage}</p>
                <div className="text-[10px] text-slate-400 text-right mt-2 flex items-center justify-end gap-1">
                  <span>Ahora</span>
                  <CheckCircle2 className="w-3 h-3 text-[#25D366]" />
                </div>
              </div>

              {/* Schedule reminders in right panel */}
              <div className="mt-5 p-3.5 bg-slate-800/50 rounded-xl border border-slate-700/60 text-xs space-y-1 text-slate-300">
                <div className="flex items-center gap-2 font-bold text-white">
                  <Clock className="w-3.5 h-3.5 text-lime-400" />
                  <span>Horarios de atención y clases:</span>
                </div>
                <div className="pl-5 text-slate-300 space-y-0.5 text-[11px]">
                  <div>• <strong>Mañanas:</strong> 10:30 - 13:30 h</div>
                  <div>• <strong>Tardes de 5 a 8:</strong> 17:00 - 20:00 h</div>
                  <div className="text-slate-400 pt-0.5">De Lunes a Viernes en Alcaudete</div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-6 pt-5 border-t border-slate-800 space-y-2.5">
              <button
                type="button"
                onClick={handleOpenWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-extrabold py-3.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-emerald-500/20 active:scale-98 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-slate-950 stroke-[#25D366]" />
                <span>Enviar y Reservar por WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href={`tel:${CONTACT_INFO.phone1Raw}`}
                className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors border border-slate-700"
              >
                <Phone className="w-3.5 h-3.5 text-lime-400" />
                <span>O llámanos directamente al {CONTACT_INFO.phone1}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
