import TheRat from '../assets/TheRat.png';

interface Camisa {
  nome: string;
  preco: string;
  img: string[];
  descricao: string;
  tamanhos: string[];
  cores: string[];
  quantidade: number;
}

const camisas = [
  {
    id: 0,
    nome: "The Rat - Rat Branco",
    preco: "R$ 90,00",
    img: [TheRat],
    descricao: "",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Branco"],
    "drop": "The Rat",
  },
  {
    id: 1,
    nome: "The Rat - Rat Preto",
    preco: "R$ 90,00",
    img: [TheRat],
    descricao: "",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto"],
    "drop": "The Rat",
  },
  {
    id: 2,
    nome: "The Rat - Rat Cinza",
    preco: "R$ 90,00",
    img: [TheRat],
    descricao: "",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Cinza"],
    "drop": "The Rat",
  },
  {
    id: 3,
    nome: "The Rat - Rat Vermelho",
    preco: "R$ 90,00",
    img: [TheRat],
    descricao: "",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Vermelho"],
    "drop": "The Rat",
  },
  {
    id: 4,
    nome: "The Rat - Rat Azul",
    preco: "R$ 90,00",
    img: [TheRat],
    descricao: "",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Azul"],
    "drop": "The Rat",
  },
  {
    id: 5,
    nome: "The Rat - Rat Verde",
    preco: "R$ 90,00",
    img: [TheRat],
    descricao: "",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Verde"],
    "drop": "The Rat",
  },
];

export { camisas, Camisa };