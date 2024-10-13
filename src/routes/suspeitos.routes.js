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

// Rota para listar todos os suspeitos
suspeitosRoutes.get("/", (req, res) => {
  return res.status(200).json(suspeitos)
})

// Rota para cadastrar um novo suspeito
suspeitosRoutes.post("/", (req, res) => {
  const { nome, idade, envolvimento, descricao } = req.body

  // Validação dos campos obrigatórios
  if (!nome || !idade || !envolvimento) {
    return res.status(400).json({
      message: "Os campos nome, idade, envolvimento sao obrigatorios!",
    })
  }
  if (envolvimento != "sim" && envolvimento != "não") {
    return res.status(400).send({
      message: "Digite 'sim' ou 'não'! em envolvimento",
    })
  }
  if ((Number.isInteger(idade)) == false) {
    return res.status(400).send({
      message: "Digite um numero inteiro no campo idade",
    })
  }

  // Criação de um novo suspeito
  const novoSuspeito = {
    id: Math.floor(Math.random() * 1000000),
    nome,
    idade,
    envolvimento,
    descricao,
  }

  // Adicionar um novo suspeito ao array suspeitos
  suspeitos.push(novoSuspeito)

  return res.status(201).json({
    message: "novo suspeito cadastrado!",
    novoSuspeito,
  })
})

// Rota para buscar um suspeito pelo id
suspeitosRoutes.get("/:id", (req, res) => {
  const { id } = req.params

  // Buscar um suspeito pelo id 
  const suspeito = suspeitos.find((suspect) => suspect.id == id)

  // Verificar se o suspeito foi encontrado
  if (!suspeito) {
    return res
      .status(404)
      .json({ message: `suspeito com id ${id} não encontrado` })
  }
  return res.status(200).json(suspeito)
})



export default suspeitosRoutes

