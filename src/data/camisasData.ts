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

const camisas: Camisa[] = [
  {
    nome: "The Rat",
    preco: "R$ 90,00",
    img: [TheRat],
    descricao: "",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto", "Branco", "Cinza", "Vermelho", "Azul", "Verde", "Amarelo", "Rosa", "Roxo", "Laranja", "Marrom"],
    quantidade: 50,
  },
  {
    nome: "The Rat",
    preco: "R$ 90,00",
    img: [TheRat],
    descricao: "",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto", "Branco", "Cinza", "Vermelho", "Azul", "Verde", "Amarelo", "Rosa", "Roxo", "Laranja", "Marrom"],
    quantidade: 50,
  },
  {
    nome: "The Rat",
    preco: "R$ 90,00",
    img: [TheRat],
    descricao: "",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto", "Branco", "Cinza", "Vermelho", "Azul", "Verde", "Amarelo", "Rosa", "Roxo", "Laranja", "Marrom"],
    quantidade: 50,
  },
  {
    nome: "The Rat",
    preco: "R$ 90,00",
    img: [TheRat],
    descricao: "",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto", "Branco", "Cinza", "Vermelho", "Azul", "Verde", "Amarelo", "Rosa", "Roxo", "Laranja", "Marrom"],
    quantidade: 50,
  },
  {
    nome: "The Rat",
    preco: "R$ 90,00",
    img: [TheRat],
    descricao: "",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto", "Branco", "Cinza", "Vermelho", "Azul", "Verde", "Amarelo", "Rosa", "Roxo", "Laranja", "Marrom"],
    quantidade: 50,
  },
  {
    nome: "The Rat",
    preco: "R$ 90,00",
    img: [TheRat],
    descricao: "",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto", "Branco", "Cinza", "Vermelho", "Azul", "Verde", "Amarelo", "Rosa", "Roxo", "Laranja", "Marrom"],
    quantidade: 50,
  },
];

export { camisas, Camisa };