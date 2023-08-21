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

    <body style="height: auto; min-height: 89vh; max-height: fit-content;" class="flex flex-row">
      <div v-if="filtroNaTela">
        <div v-if="tamanhoDaTela == 'Mobile'">
          <FiltroMobile/>
        </div>
        <div v-if="tamanhoDaTela == 'Desktop'">
          <FiltroDesktop class="mt-[5vh]"/>
        </div>
      </div>
      <div class="flex justify-center items-center flex-col">
        <div class="mt-[4vh] w-3/4 flex justify-end mr-[4vw]"
          style="height: auto; min-height: 5vh; max-height: fit-content; ">
          <div class="h-[6vh] w-[6vh] flex items-center justify-center bg-[#D9D9D9] cursor-pointer hover:bg-[#ebebeb]"
            @click="mudarFiltroNaTela()">
            <img class="h-[4vh] w-[4vw]" src="../assets/filtroIcon.svg">
          </div>
        </div>
        <div class="w-3/4 flex flex-wrap content-start" style="height: auto; min-height: 90vh; max-height: fit-content; ">
          <div v-for="produto in produtos" :key="produto">
            <ProdutoDisplay class="hover:contrast-[1.15] drop-shadow-2xl" :nome="produto.nome" :preco="produto.preco"
              :img="produto.img"></ProdutoDisplay>
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
import FiltroMobile from '../components/FiltroMobile.vue';
import FiltroDesktop from '../components/filtroDesktop.vue';


export default {
  components: {
    HeaderDesktop,
    HeaderMobile,
    ProdutoDisplay,
    FiltroMobile,
    FiltroDesktop
},
  methods: {
    mudarFiltroNaTela() {
      this.filtroNaTela = !this.filtroNaTela;
    }
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

      filtroNaTela: false,

      produtos: [
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