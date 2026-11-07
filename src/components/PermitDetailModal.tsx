import React from 'react';
import { X, Check, ArrowRight, Shield, Award, Calendar } from 'lucide-react';
import { PermitInfo } from '../types';

interface PermitDetailModalProps {
  permit: PermitInfo | null;
  onClose: () => void;
  onBook: (permitId: string) => void;
}

export const PermitDetailModal: React.FC<PermitDetailModalProps> = ({
  permit,
  onClose,
  onBook,
}) => {
  if (!permit) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-md">
            Información Oficial del Permiso
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            {permit.title}
          </h3>
          <p className="text-slate-600 text-sm mt-1">{permit.subtitle}</p>
        </div>

        {/* Main Content Body */}
        <div className="mt-6 space-y-6 text-sm text-slate-700">
          {/* General Description */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 leading-relaxed">
            {permit.description}
          </div>

          {/* Age & Requirements */}
          <div>
            <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2.5">
              <Shield className="w-4 h-4 text-sky-600" />
              Requisitos y Edad Mínima ({permit.ageMin})
            </h4>
            <div className="space-y-2">
              {permit.requirements.map((req, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                  <Check className="w-4 h-4 text-lime-600 flex-shrink-0 mt-0.5" />
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Exam Structure */}
          <div>
            <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2.5">
              <Award className="w-4 h-4 text-amber-500" />
              Estructura de la Formación y Exámenes
            </h4>
            <div className="space-y-2">
              {permit.examSummary.map((ex, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 flex-shrink-0" />
                  <span>{ex}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights in Alcaudete */}
          <div>
            <h4 className="font-bold text-slate-900 mb-2.5">
              Ventajas con Autoescuela Sergio en Alcaudete:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
              {permit.features.map((feat, idx) => (
                <div key={idx} className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-lime-600 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold text-xs sm:text-sm transition-colors"
          >
            Cerrar
          </button>
          <button
            onClick={() => {
              onClose();
              onBook(permit.id);
            }}
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-1.5 active:scale-95"
          >
            <span>Reservar por WhatsApp para este carnet</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
