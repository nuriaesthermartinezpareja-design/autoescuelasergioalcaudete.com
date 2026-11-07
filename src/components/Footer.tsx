import React from 'react';
import { Phone, MapPin, Mail, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

interface FooterProps {
  onOpenLegal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-gradient-to-b from-[#05101f] via-[#071628] to-[#040c16] text-slate-400 text-xs border-t border-lime-500/20 relative overflow-hidden">
      {/* Diffused green ambient glow in footer */}
      <div className="absolute -bottom-24 right-10 w-96 h-96 bg-[radial-gradient(circle,rgba(132,204,22,0.12)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Column 1: Autoescuela Sergio Alcaudete (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-[#0d233e] p-0.5 border border-slate-700 flex-shrink-0">
                <img
                  src="/assets/logo_emblem.png"
                  alt="Autoescuela Sergio Alcaudete"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="text-white font-extrabold text-base tracking-tight">
                  Autoescuela Sergio
                </h4>
                <p className="text-slate-400 text-xs">Alcaudete (Jaén)</p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm text-xs sm:text-sm">
              Autoescuela con amplia experiencia. Te preparamos en Alcaudete con
              cercanía, método y compromiso para que obtengas tu permiso de conducir
              con total confianza.
            </p>

            <div className="space-y-1.5 pt-2 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-lime-400" />
                <span>
                  Teléfonos:{' '}
                  <a
                    href={`tel:${CONTACT_INFO.phone1Raw}`}
                    className="hover:text-white font-semibold"
                  >
                    {CONTACT_INFO.phone1}
                  </a>{' '}
                  /{' '}
                  <a
                    href={`tel:${CONTACT_INFO.phone2Raw}`}
                    className="hover:text-white font-semibold"
                  >
                    {CONTACT_INFO.phone2}
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-lime-400" />
                <span>Tr.ª Peñuelas, 8, 23660 Alcaudete (Jaén)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navegación (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Navegación
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-lime-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#carnets" className="hover:text-lime-400 transition-colors">
                  Permisos y Carnets
                </a>
              </li>
              <li>
                <a
                  href="#sergiobot"
                  className="hover:text-lime-400 transition-colors flex items-center gap-1.5"
                >
                  <span>¿No sabes qué carnet? (SergioBot)</span>
                </a>
              </li>
              <li>
                <a href="#como-reservar" className="hover:text-lime-400 transition-colors">
                  Cómo reservar por WhatsApp
                </a>
              </li>
              <li>
                <a href="#opiniones" className="hover:text-lime-400 transition-colors">
                  Opiniones de alumnos
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-lime-400 transition-colors">
                  Ubicación y Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & RGPD (4 cols) matching PDF Page 4 */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Aviso Legal y Protección de Datos
            </h4>
            <p className="text-slate-400 leading-relaxed text-xs">
              En cumplimiento del nuevo Reglamento General de Protección de Datos
              (RGPD) UE 2016/679 y la Ley Orgánica 3/2018 (LOPD-GDD), los datos
              facilitados a través de esta web son tratados exclusivamente para la
              gestión de citas y solicitudes informativas de Autoescuela Sergio en
              Alcaudete.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenLegal}
                className="text-lime-400 hover:text-lime-300 underline font-semibold text-xs"
              >
                Consultar Política de Privacidad y Términos
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-12 pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} Autoescuela Sergio Alcaudete · Todos los
            derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenLegal}
              className="hover:text-slate-400 transition-colors"
            >
              Aviso Legal
            </button>
            <span>·</span>
            <button
              onClick={onOpenLegal}
              className="hover:text-slate-400 transition-colors"
            >
              Privacidad y Cookies
            </button>
            <span>·</span>
            <span>Alcaudete (Jaén)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
