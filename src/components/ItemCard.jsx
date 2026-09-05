import React from 'react';
import { CafecitoBtn } from './CafecitoBtn';

export function ItemCard({ item }) {
  const getCategoryStyle = (category) => {
    switch (category?.toLowerCase()) {
      case 'narrativa':
      case 'literatura':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'códigos':
      case 'scripts':
      case 'programación':
      case 'herramientas':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        
        {/* Portada a la izquierda */}
        {item.cover && (
          <div className="w-full md:w-44 shrink-0 overflow-hidden rounded-xl border border-slate-800 bg-slate-950/50 flex justify-center items-center">
            <img 
              src={item.cover} 
              alt={`Portada de ${item.title}`}
              className="w-full h-auto max-h-64 object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}

        {/* Contenido a la derecha */}
        <div className="flex-1 flex flex-col justify-between w-full h-full">
          <div>
            <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              
              <div className="flex flex-wrap gap-2 shrink-0">
                {item.category && (
                  <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${getCategoryStyle(item.category)}`}>
                    {item.category}
                  </span>
                )}
                {item.badge && (
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {item.badge}
                  </span>
                )}
              </div>
            </div>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Botones de descarga y enlaces */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-800">
            {/* Ítems tipo 'free' o 'external' mapean el array downloads */}
            {(item.type === 'free' || item.type === 'external') && item.downloads?.map((dl, idx) => (
              <a
                key={idx}
                href={dl.url}
                {...(dl.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : { download: true })}
                className="flex-1 text-center text-sm font-medium px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                {dl.label}
                {dl.isExternal && (
                  <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                )}
              </a>
            ))}

            {item.type === 'paid' && (
              <a
                href={item.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center text-sm font-semibold px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-lg shadow-blue-500/20"
              >
                Comprar ahora
              </a>
            )}
          </div>

          {/* Bloque de apoyo al pie de la Card */}
          <div className="mt-4 pt-3 flex flex-col sm:flex-row items-center justify-between gap-2 bg-slate-950/40 p-3 rounded-xl border border-slate-800/50">
            <span className="text-xs text-slate-400 font-medium">
              ¿Te gustó esta publicación?
            </span>
            <CafecitoBtn username="anasposito32" text="Invitame un Cafecito" />
          </div>

        </div>

      </div>
    </div>
  );
}