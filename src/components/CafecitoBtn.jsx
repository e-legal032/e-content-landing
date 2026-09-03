import React from 'react';

export function CafecitoBtn({ username = "anasposito32", text = "Invitame un Cafecito" }) {
  const cafecitoUrl = `https://cafecito.app/${username}`;

  return (
    <a
      href={cafecitoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm transition-all shadow-md hover:shadow-lg shrink-0"
    >
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 21h19v-2H2v2zm3-4h14V5H5v12zm2-10h10v8H7V7z" />
      </svg>
      <span>{text}</span>
    </a>
  );
}