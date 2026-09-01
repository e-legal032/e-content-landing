import React from 'react';

export function ItemCard({ item }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors">
      <div>
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            {item.badge}
          </span>
        </div>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          {item.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-800">
        {item.type === 'free' && item.downloads?.map((dl, idx) => (
          <a
            key={idx}
            href={dl.url}
            download
            className="flex-1 text-center text-sm font-medium px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all"
          >
            {dl.label}
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
    </div>
  );
}