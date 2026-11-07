import React, { useState } from 'react';
import { Star, ExternalLink, CheckCircle } from 'lucide-react';
import { REVIEWS, CONTACT_INFO } from '../data/mockData';

export const ReviewsSection: React.FC = () => {
  const [showAllModal, setShowAllModal] = useState(false);

  return (
    <section id="opiniones" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching PDF Page 3 */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Ficha Oficial de Google Maps
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Opiniones de Alumnos en Google
          </h2>

          {/* Rating Stars Summary */}
          <div className="flex items-center justify-center gap-2 mt-3.5">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-base font-bold text-slate-900">5,0</span>
            <span className="text-sm text-slate-500">sobre 5 en Google Maps (3 reseñas)</span>
          </div>

          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Valoración máxima en Google. Los usuarios destacan la profesionalidad, el trato cercano y la calidad de la enseñanza en Alcaudete.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Author Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-sky-700 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                    {rev.avatarLetter}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-slate-900 text-sm">
                        {rev.author}
                      </h4>
                      <span title="Verificado en Google Maps">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400">{rev.date}</span>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center text-amber-400 mb-2.5">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Highlight */}
                <div className="text-xs font-bold text-sky-800 mb-2 bg-sky-100/60 p-2 rounded-lg">
                  {rev.highlight}
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {rev.text}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Google Maps
                </span>
                <span>Autoescuela Sergio</span>
              </div>
            </div>
          ))}
        </div>

        {/* Center Button: View all Google reviews */}
        <div className="mt-12 text-center">
          <a
            href={CONTACT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-sm transition-colors"
          >
            <span>Ver la ficha y reseñas oficiales en Google Maps</span>
            <ExternalLink className="w-4 h-4 text-slate-300" />
          </a>
        </div>
      </div>
    </section>
  );
};
