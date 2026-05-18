export interface Event {
  date: string
  title: string
  desc: string
  genre: string
}

export const events: Event[] = [
  {
    date: "15 JUN 2026",
    title: "Yoga com Gatos",
    desc: "Sessão de yoga relaxante acompanhada pelos nossos gatinhos. Todos os níveis são bem-vindos!",
    genre: "BEM-ESTAR",
  },
  {
    date: "22 JUN 2026",
    title: "Noite do Café & Adoção",
    desc: "Café especial, música ao vivo e a chance de encontrar seu novo melhor amigo felino.",
    genre: "ADOÇÃO",
  },
]
