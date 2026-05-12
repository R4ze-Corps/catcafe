export interface Event {
  date: string
  title: string
  desc: string
  genre: string
}

export const events: Event[] = [
  {
    date: "INDEFINIDA",
    title: "Festa das Máscaras",
    desc: "A noite mais misteriosa da cidade. Máscaras obrigatórias. Prêmio para a melhor fantasia.",
    genre: "BAILE",
  },
  {
    date: "INDEFINIDA",
    title: "Anos 2000 Revival",
    desc: "Viagem no tempo com os maiores sucessos dos anos 2000. Nostalgia e diversão garantidas.",
    genre: "FUNK",
  },
]
