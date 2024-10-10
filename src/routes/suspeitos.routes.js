import { Router } from "express";

const suspeitoRoutes = Router();

// Array com suspeito pré-cadastrados
let suspeito = [
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Beyonce",
    idade: 43,
    envolvimento: true,
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "will Smith",
    idade: 56,
    envolvimento: true,
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Ariana Grande",
    idade: 31,
    envolvimento: false,
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Kanye West",
    idade: 47,
    envolvimento: false,
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Jay Z",
    idade: 54,
    envolvimento: true,
  },
];

