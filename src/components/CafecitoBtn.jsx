import React from 'react';

export function CafecitoBtn({ username = "anasposito32" }) {
  const cafecitoUrl = `https://cafecito.app/${username}`;

  return (
    <a
      href={cafecitoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-md hover:shadow-lg"
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 21h19v-2H2v2zm3-4h14V5H5v12zm2-10h10v8H7V7z" />
      </svg>
      <span>Invitame un Cafecito</span>
    </a>
  );
}