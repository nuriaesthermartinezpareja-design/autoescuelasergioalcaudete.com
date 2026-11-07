import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200 my-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="pr-10">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4" />
            Normativa Legal y Privacidad
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900">
            Aviso Legal y Protección de Datos
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Autoescuela Sergio · Alcaudete (Jaén)
          </p>
        </div>

        <div className="mt-6 space-y-4 text-xs sm:text-sm text-slate-600 max-h-[60vh] overflow-y-auto pr-2 leading-relaxed">
          <h4 className="font-bold text-slate-900">1. Identidad del Responsable</h4>
          <p>
            El responsable del tratamiento de los datos recabados en este sitio web es{' '}
            <strong>Autoescuela Sergio</strong>, con centro formativo ubicado en{' '}
            {CONTACT_INFO.address} y teléfonos de contacto {CONTACT_INFO.phone1} / {CONTACT_INFO.phone2}.
          </p>

          <h4 className="font-bold text-slate-900">2. Finalidad del Tratamiento</h4>
          <p>
            En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD) y la Ley Orgánica 3/2018 (LOPD-GDD), se informa a los usuarios de que los datos personales facilitados voluntariamente a través del formulario de reserva de cita o canales de contacto serán tratados exclusivamente con la finalidad de:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Gestionar, tramitar y confirmar las reservas de clases prácticas, teóricas o consultas formativas solicitadas.</li>
            <li>Dar respuesta a las consultas planteadas respecto a requisitos, tarifas o matriculación en permisos de conducir.</li>
            <li>Coordinar el calendario lectivo y de exámenes con la Dirección General de Tráfico (DGT).</li>
          </ul>

          <h4 className="font-bold text-slate-900">3. Legitimación y Conservación</h4>
          <p>
            La base legal para el tratamiento de sus datos es el consentimiento explícito manifestado al marcar la casilla de aceptación y enviar el formulario de reserva. Los datos se conservarán durante el tiempo estrictamente necesario para la prestación del servicio formativo y el cumplimiento de las obligaciones legales aplicables.
          </p>

          <h4 className="font-bold text-slate-900">4. Derechos del Interesado</h4>
          <p>
            Usted tiene derecho a acceder a sus datos personales, solicitar la rectificación de los datos inexactos, solicitar su supresión cuando ya no sean necesarios, así como ejercitar los derechos de limitación y oposición dirigiéndose a Autoescuela Sergio en la dirección postal indicada o a través del teléfono {CONTACT_INFO.phone1}.
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-colors"
          >
            Entendido y Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};
