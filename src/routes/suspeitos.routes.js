import { Router } from "express"

const suspeitosRoutes = Router()


// Array - suspeitos pré-cadastrados
let suspeitos = [
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "will Smith",
    idade: 56,
    envolvimento: "sim",
    descricao: ["Maluco no pedaço", "Cabelo escuro",]
  },

  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Beyonce",
    idade: 43,
    envolvimento: "sim",
    descricao: ["She knows", "Diva Pop",]
  },

  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Kanye West",
    idade: 47,
    envolvimento: "nao",
    descricao: ["louco", "Incompreendido",]
  },

  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Ariana Grande",
    idade: 31,
    envolvimento: "nao",
    descricao: ["pequena", "Ariana",]
  },
]


export default suspeitosRoutes

