<template>
  <main class="w-full bg-[#F9F9F9]" style="height: auto; min-height: 100vh; max-height: fit-content;">
    <header class="w-full" style="height: auto; min-height: 10vh; max-height: fit-content;">
      <div v-if="tamanhoDaTela == 'Mobile'">
        <HeaderMobile />
      </div>
      <div v-if="tamanhoDaTela == 'Desktop'">
        <HeaderDesktop />
      </div>
    </header>

    <body style="height: auto; min-height: 89vh; max-height: fit-content;">
      <div class="flex justify-center">
        <div class="w-3/4 flex flex-wrap content-start" style="height: auto; min-height: 90vh; max-height: fit-content; ">
          <div v-for="produto in produtos" :key="produto">
            <ProdutoDisplay class="hover:contrast-[1.15] drop-shadow-2xl" :nome="produto.nome" :preco="produto.preco" :img="produto.img"></ProdutoDisplay>
          </div>
        </div>
      </div>

    </body>
  </main>
</template>
<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import HeaderDesktop from '@/components/HeaderDesktop.vue';
import HeaderMobile from '../components/HeaderMobile.vue';
import ProdutoDisplay from '../components/ProdutoDisplay.vue';
import TheRat from '../assets/TheRat.png';


export default {
  components: {
    HeaderDesktop,
    HeaderMobile,
    ProdutoDisplay
  },
  setup() {
    const tamanhoDaTela = ref('Desktop');

    const updateTamanhoDaTela = () => {
      if (window.innerWidth <= 820) {
        tamanhoDaTela.value = 'Mobile';
      } else {
        tamanhoDaTela.value = 'Desktop';
      }
    };

    onMounted(() => {
      window.addEventListener('resize', updateTamanhoDaTela);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', updateTamanhoDaTela);
    });

    return {
      tamanhoDaTela
    };
  },
  data() {
    return {
      produtos:[
      {
        nome: "The Rat",
        preco: "R$ 90,00",
        img: [
          TheRat,
        ],
        descricao: "",
        tamanhos: [
          "P",
          "M",
          "G",
          "GG"
        ],
        cores: [
          "Preto",
          "Branco",
          "Cinza",
          "Vermelho",
          "Azul",
          "Verde",
          "Amarelo",
          "Rosa",
          "Roxo",
          "Laranja",
          "Marrom"
        ],
        quantidade: 50
      },
      {
        nome: "The Rat",
        preco: "R$ 90,00",
        img: [
          TheRat,
        ],
        descricao: "",
        tamanhos: [
          "P",
          "M",
          "G",
          "GG"
        ],
        cores: [
          "Preto",
          "Branco",
          "Cinza",
          "Vermelho",
          "Azul",
          "Verde",
          "Amarelo",
          "Rosa",
          "Roxo",
          "Laranja",
          "Marrom"
        ],
        quantidade: 50
      },
      {
        nome: "The Rat",
        preco: "R$ 90,00",
        img: [
          TheRat,
        ],
        descricao: "",
        tamanhos: [
          "P",
          "M",
          "G",
          "GG"
        ],
        cores: [
          "Preto",
          "Branco",
          "Cinza",
          "Vermelho",
          "Azul",
          "Verde",
          "Amarelo",
          "Rosa",
          "Roxo",
          "Laranja",
          "Marrom"
        ],
        quantidade: 50
      },
      {
        nome: "The Rat",
        preco: "R$ 90,00",
        img: [
          TheRat,
        ],
        descricao: "",
        tamanhos: [
          "P",
          "M",
          "G",
          "GG"
        ],
        cores: [
          "Preto",
          "Branco",
          "Cinza",
          "Vermelho",
          "Azul",
          "Verde",
          "Amarelo",
          "Rosa",
          "Roxo",
          "Laranja",
          "Marrom"
        ],
        quantidade: 50
      },

      ]
      
    }
  }
};


</script>