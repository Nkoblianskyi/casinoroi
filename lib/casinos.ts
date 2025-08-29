export interface Casino {
  rank: number
  name: string
  logo: string
  rating: number
  bonus: string
  features: string[]
  isTopChoice?: boolean
  url: string
}

export const casinos: Casino[] = [
  {
    rank: 1,
    name: "Casino Portugal",
    logo: "/brand-ccasino.svg",
    rating: 9.8,
    bonus: "Aposta Grátis de 2€ Atualmente",
    features: ["Casino Oficial", "Jogos Exclusivos", "Pagamentos Rápidos"],
    isTopChoice: true,
    url: "https://www.casinoportugal.pt/",
  },
  {
    rank: 2,
    name: "Lebull",
    logo: "/lebull.svg",
    rating: 9.7,
    bonus: "250% até 400€ + 50€ de Aposta Grátis",
    features: ["Bónus Generoso", "Variedade de Jogos", "Suporte Português"],
    url: "https://www.lebull.pt/",
  },
  {
    rank: 3,
    name: "Betclic",
    logo: "/betclic.svg",
    rating: 9.4,
    bonus: "100% Até 20€",
    features: ["Popular", "Apostas Desportivas", "Casino ao Vivo"],
    url: "https://www.betclic.pt/",
  },
  {
    rank: 4,
    name: "Solverde",
    logo: "/solverde.svg",
    rating: 9.2,
    bonus: "300% até 30€ em Aposta Grátis",
    features: ["Licenciado SRIJ", "Casino Português", "Suporte 24/7"],
    url: "https://www.solverde.pt/",
  },
  {
    rank: 5,
    name: "Luckia",
    logo: "/luckia.svg",
    rating: 9.0,
    bonus: "Aposta Grátis de Atualmente",
    features: ["Melhor Avaliado", "Oferta Exclusiva", "App Móvel"],
    url: "https://www.luckia.pt/",
  },
]

// Get top casino (rank 1)
export const getTopCasino = (): Casino => {
  return casinos.find((casino) => casino.rank === 1) || casinos[0]
}
