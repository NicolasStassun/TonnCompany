<template>
  <main class="w-full bg-[#F9F9F9]" style="height: auto; min-height: 100vh; max-height: fit-content;">
    <header class="w-full" style="height: auto; min-height: 8vh; max-height: fit-content;">
      <div v-if="tamanhoDaTela == 'Mobile'">
        <HeaderMobile class="sticky top-0 z-40" />
      </div>
      <div v-if="tamanhoDaTela == 'Desktop'">
        <HeaderDesktop class="sticky top-0 z-40" />
      </div>
    </header>

    <body style="height: auto; min-height: 89vh; max-height: fit-content;" class="flex flex-row justify-center">
      <div>
        <div v-if="filtroNaTela">
          <div v-if="tamanhoDaTela == 'Mobile'">
            <FiltroMobile v-on:fechaFiltro="mudarFiltroNaTela" />
          </div>
          <div v-if="tamanhoDaTela == 'Desktop'">
            <FiltroDesktop :aplicar-filtros="receberFiltros" :remover-filtros="limparFiltros"
              :update-filters="atualizarFiltros" v-on:fechaFiltro="mudarFiltroNaTela" class="w-[20vw] mt-12" />

          </div>
        </div>
      </div>

      <div v-if="tamanhoDaTela == 'Mobile'" class="flex flex-wrap justify-center">
        <div class="mt-[4vh] w-3/4 flex justify-end mr-[4vw]"
          style="height: auto; min-height: 5vh; max-height: fit-content; ">
          <div class="h-[6vh] w-[6vh] flex items-center justify-center bg-[#D9D9D9] cursor-pointer hover:bg-[#ebebeb]"
            @click="mudarFiltroNaTela()">
            <img class="h-[4vh] w-[4vw]" src="../assets/filtroIcon.svg">
          </div>
        </div>
        <div class="w-3/4 flex flex-wrap content-start justify-center"
          style="height: auto; min-height: 90vh; max-height: fit-content; ">
          <div v-for="produto in camisas">
            <ProdutoDisplayMobile class="hover:contrast-[1.20] drop-shadow-2xl mt-[4vh] mb-[4vh] cursor-pointer"
              :nome="produto.nome" :preco="produto.preco" :img="produto.img" :tamanhoDaTela="tamanhoDaTela">
            </ProdutoDisplayMobile>
          </div>
        </div>
      </div>


      <div v-if="tamanhoDaTela == 'Desktop'" class="flex flex-wrap justify-center">
        <div class="mt-[4vh] w-3/4 flex justify-end mr-[4vw]"
          style="height: auto; min-height: 5vh; max-height: fit-content; ">
          <div class="h-[6vh] w-[6vh] flex items-center justify-center bg-[#D9D9D9] cursor-pointer hover:bg-[#ebebeb]"
            @click="mudarFiltroNaTela()">
            <img class="h-[4vh] w-[4vw]" src="../assets/filtroIcon.svg">
          </div>
        </div>
        <div class="w-3/4 flex flex-wrap content-center justify-center"
          style="height: auto; min-height: 90vh; max-height: fit-content; ">
          <div v-for="produto in camisas">
            <ProdutoDisplay class="hover:contrast-[1.20] drop-shadow-2xl cursor-pointer" :nome="produto.nome"
              :preco="produto.preco" :img="produto.img"></ProdutoDisplay>
          </div>
        </div>
        <button @click="verCamisas()">teste</button>
      </div>







    </body>
  </main>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import HeaderDesktop from '@/components/HeaderDesktop.vue';
import FiltroDesktop from '../components/FiltroDesktop.vue';
import { camisas } from '../data/camisasData.ts';

const filtroTamanho = ref([]);
const filtroCores = ref([]);
const filtroNaTela = ref(false);

const tamanhoDaTela = ref('Desktop');

function atualizarFiltros(tamanhos, cores) {
  filtroTamanho.value = [...tamanhos];
  filtroCores.value = [...cores];
}

const mudarFiltroNaTela = () => {
  filtroNaTela.value = !filtroNaTela.value;
};

function verCamisas() {
  console.log(camisas);
  console.log([...filtroTamanho.value]);
  console.log([...filtroCores.value]);
}

const updateTamanhoDaTela = () => {
  if (window.innerWidth <= 820) {
    tamanhoDaTela.value = 'Mobile';
  } else {
    tamanhoDaTela.value = 'Desktop';
  }
};

const resizeListener = () => {
  updateTamanhoDaTela();
};

onMounted(() => {
  window.addEventListener('resize', resizeListener);
  updateTamanhoDaTela();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeListener);
});
</script>