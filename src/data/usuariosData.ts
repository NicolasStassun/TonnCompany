import TheRat from '../assets/TheRat.png';
import { Camisa } from './camisasData';

interface Usuario {
  nome: string;
  sobrenome: string;
  telefone: string;
  cpf: string;
  localizacao: {
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
  };
  historicoDeCompras: {
    produto: Camisa;
  }[];
}

const usuarios: Usuario[] = [
  {
    nome: 'João',
    sobrenome: 'Silva',
    telefone: '999999999',
    cpf: '99999999999',
    localizacao: {
      rua: 'Rua das Flores',
      numero: '123',
      bairro: 'Centro',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '12345678',
    },
    historicoDeCompras: [
      {
        produto: {
          nome: 'The Rat',
          preco: 'R$ 90,00',
          img: [TheRat],
          descricao: '',
          tamanhos: ['P', 'M', 'G', 'GG'],
          cores: [
            'Preto',
            'Branco',
            'Cinza',
            'Vermelho',
            'Azul',
            'Verde',
            'Amarelo',
            'Rosa',
            'Roxo',
            'Laranja',
            'Marrom',
          ],
          quantidade: 50,
        },
      },
    ],
  },
];

export { Usuario, usuarios };