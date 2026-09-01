
import React from 'react';
import { itemsData } from './data/items';
import { Header } from './components/Header';
import { ItemCard } from './components/ItemCard';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between font-sans antialiased">
      {/* Header modularizado */}
      <Header username="tu_usuario" />

      {/* Main content */}
      <main className="max-w-4xl mx-auto w-full px-6 py-12 flex-1">
        <section className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            E-books y Recursos
          </h1>
          <p className="text-lg text-slate-400">
            Descargá mis publicaciones gratuitas en formato PDF y ePub o apoyá el proyecto colaborando con un cafecito.
          </p>
        </section>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {itemsData.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto w-full px-6 py-8 text-center text-sm text-slate-500 border-t border-slate-800/80">
        <p>© {new Date().getFullYear()} — Desarrollado con ♥ por anaSposito.</p>
      </footer>
    </div>
  );
}