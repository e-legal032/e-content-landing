export const itemsData = [
  {
    id: "ebook-1",
    title: "Vestigios del Incendio",
    description: "Vestigios del incendio reúne siete relatos cruzados por la memoria, la pérdida y la búsqueda de sentido sobre las cenizas del pasado y del presente. Desde fuegos silenciosos que consumen la infancia hasta chispas de resistencia, este libro invita a recorrer esos momentos de quiebre y sus nuevas formas.",
    cover: "/portada-vestigios.jpg",
    badge: "Gratis",
    category: "Narrativa",
    type: "free",
    downloads: [
      { label: "Descargar PDF", url: "/downloads/vestigios-incendio.pdf" },
      { label: "Descargar ePub", url: "/downloads/vestigios-incendio.epub" }
    ]
  },
  {
    id: "app-petcare",
    title: "Pet Care Planner",
    description: "Aplicación web progresiva (PWA) e independiente para la gestión, seguimiento de vacunación, turnos y organización diaria de tus mascotas. Podés usarla directamente en la web o agregarla a la pantalla de inicio de tu celular.",
    cover: "/portada-petcare.png",
    badge: "Web App",
    category: "Herramientas",
    type: "external",
    externalUrl: "https://petcare-planner.netlify.app",
    downloads: [
      { label: "Probar e Instalar App", url: "https://petcare-planner.netlify.app", isExternal: true }
    ]
  },
  // Cuando hagas un nuevo e-book o material, solo agregás un bloque similar aquí:
  /*
  {
    id: "ebook-2",
    title: "Próximo E-book / Guía",
    description: "Descripción de tu próximo material de pago o contenido exclusivo.",
    badge: "Próximamente",
    type: "paid",
    buyUrl: "https://link-de-pago.com", // O tu link de Gumroad / Mercado Pago
    downloads: []
  }
  */
];