import React from 'react';
import { CafecitoBtn } from './CafecitoBtn';

export function Header() {
  return (
    <header className="max-w-4xl mx-auto w-full px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-slate-800/80">
      <div className="font-bold text-xl tracking-tight text-white text-center sm:text-left">
        Free Biblio
      </div>
      
      {/* Contenedor con la frase destacada y el botón */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <span className="text-xs sm:text-sm font-medium text-amber-300 tracking-wide text-center sm:text-right flex items-center gap-1.5">
          <span>☕</span> Un café puede hacer la diferencia
        </span>
        <CafecitoBtn username="anasposito32" text="Apoyá la gestión independiente" />
      </div>
    </header>
  );
}