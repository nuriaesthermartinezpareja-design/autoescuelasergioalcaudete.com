import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  MessageSquare,
  Navigation,
  ExternalLink,
  Star,
  CheckCircle2,
} from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

export const ContactSection: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState<number>(16);

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-slate-50 via-emerald-50/20 to-slate-50 border-b border-slate-200 relative overflow-hidden">
      {/* 25% Diffused Green / 75% Blue Lighting */}
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(132,204,22,0.14)_0%,rgba(14,165,233,0.06)_40%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(34,197,94,0.10)_0%,rgba(14,165,233,0.06)_40%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading matching PDF Page 4 */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            UBICACIÓN Y CONTACTO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Visítanos o Contacta con Nosotros
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Estamos a tu disposición en Alcaudete para resolver cualquier consulta sobre tu carnet.
          </p>
        </div>

        {/* 2 Columns Grid matching PDF Page 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Card with 25% diffused green / 75% blue blend */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#071628] via-[#091f38] to-[#062426] text-white rounded-2xl p-7 shadow-[0_15px_40px_-10px_rgba(132,204,22,0.18)] border border-lime-500/25 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-lime-500/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              {/* Header Box */}
              <div className="pb-5 border-b border-slate-800">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-extrabold text-white">
                    Autoescuela Sergio Alcaudete
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-300">
                  <span className="flex items-center text-amber-400 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 mr-1" />
                    5,0 en Google
                  </span>
                  <span>(3 reseñas)</span>
                </div>
              </div>

              {/* Address */}
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  DIRECCIÓN
                </span>
                <div className="flex items-start gap-2.5 text-sm text-slate-200">
                  <MapPin className="w-4 h-4 text-lime-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div>{CONTACT_INFO.address}</div>
                    <div className="text-xs text-lime-400/90 font-mono mt-0.5">
                      Plus Code: {CONTACT_INFO.plusCode}
                    </div>
                  </div>
                </div>
              </div>

              {/* Phones */}
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  TELÉFONO PRINCIPAL
                </span>
                <div className="flex items-center gap-2.5 text-lg font-bold text-white">
                  <Phone className="w-4 h-4 text-lime-400 flex-shrink-0" />
                  <a
                    href={`tel:${CONTACT_INFO.phone1Raw}`}
                    className="hover:text-lime-400 transition-colors"
                  >
                    {CONTACT_INFO.phone1}
                  </a>
                </div>
                <div className="text-xs text-slate-400 mt-1 pl-6">
                  Teléfono adicional:{' '}
                  <a
                    href={`tel:${CONTACT_INFO.phone2Raw}`}
                    className="hover:text-slate-200 font-semibold"
                  >
                    {CONTACT_INFO.phone2}
                  </a>
                </div>
              </div>

              {/* Schedule */}
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  HORARIO DE ATENCIÓN
                </span>
                <div className="flex items-start gap-2.5 text-sm text-slate-200">
                  <Clock className="w-4 h-4 text-lime-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Lunes a Viernes</div>
                    <div className="text-xs text-slate-300 mt-1 space-y-0.5">
                      <div>• <strong>Mañanas:</strong> 10:30 - 13:30 h</div>
                      <div>• <strong>Tardes:</strong> 17:00 - 20:00 h (de 5 a 8 de la tarde)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons matching PDF Page 4 */}
            <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-extrabold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors shadow-md active:scale-98"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Reservar o Consultar por WhatsApp</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${CONTACT_INFO.phone1Raw}`}
                  className="bg-[#0f243d] hover:bg-[#153457] text-white border border-slate-700 font-semibold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-lime-400" />
                  <span>Llamar</span>
                </a>

                <a
                  href={CONTACT_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0f243d] hover:bg-[#153457] text-white border border-slate-700 font-semibold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-sky-400" />
                  <span>Cómo llegar</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Google Maps matching user location */}
          <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xl flex flex-col min-h-[500px]">
            {/* Map Top Header */}
            <div className="bg-slate-100/95 px-4 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-800 font-medium">
                <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-semibold text-slate-900">{CONTACT_INFO.address}</span>
              </div>
              
              <div className="flex items-center gap-2">
                {/* Map Type Switcher */}
                <div className="flex items-center bg-slate-200/80 p-0.5 rounded-lg text-[11px] font-semibold text-slate-700">
                  <button
                    type="button"
                    onClick={() => setZoomLevel(17)}
                    className="px-2.5 py-1 rounded-md bg-white text-slate-900 shadow-xs font-bold"
                  >
                    Callejero
                  </button>
                  <a
                    href={CONTACT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-md hover:text-slate-900 transition-colors"
                  >
                    Satélite ↗
                  </a>
                </div>

                <a
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>Abrir Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Embedded Google Maps with street level zoom (z=17) and exact coordinates (37.588625, -4.080179) */}
            <div className="relative flex-1 w-full min-h-[420px] bg-slate-100">
              <iframe
                title="Ubicación oficial Autoescuela Sergio en Alcaudete (Google Maps)"
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${CONTACT_INFO.lat},${CONTACT_INFO.lng}&hl=es&z=17&output=embed`}
              />

              {/* Floating Google Maps Location Badge */}
              <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-lg border border-slate-200/80 text-xs pointer-events-auto max-w-[280px]">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                  </span>
                  <span className="font-extrabold text-slate-900">Autoescuela Sergio</span>
                </div>
                <div className="text-[11px] text-slate-600 mt-1 leading-snug">
                  Tr.ª Peñuelas, 8 · 23660 Alcaudete, Jaén
                </div>
                <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px]">
                  <span className="text-slate-400 font-mono">HWQC+52 Alcaudete</span>
                  <a
                    href={CONTACT_INFO.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:text-emerald-800 font-bold inline-flex items-center gap-1"
                  >
                    Cómo llegar ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Map Bottom Bar */}
            <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Ubicación verificada: Travesía Peñuelas, 8 (Alcaudete)</span>
              </div>
              <a
                href={CONTACT_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-800 hover:text-emerald-700 underline font-semibold inline-flex items-center gap-1"
              >
                <Navigation className="w-3 h-3 text-emerald-600" />
                Iniciar ruta GPS en Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
