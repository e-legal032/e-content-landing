import React from 'react';
import { CafecitoBtn } from './CafecitoBtn';

export function Header({ username }) {
  return (
    <header className="max-w-4xl mx-auto w-full px-6 py-8 flex justify-between items-center border-b border-slate-800/80">
      <div className="font-bold text-lg tracking-tight text-white">MiBiblioteca</div>
      <CafecitoBtn username={username} />
    </header>
  );
}