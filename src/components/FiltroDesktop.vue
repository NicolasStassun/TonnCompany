<template>
    <div class="w-[20vw] h-[80vh] bg-[#D9D9D9] overflow-auto">
        <div>
            <div class="mt-4 border-b-4 border-[#BBBBBB] flex items-center">
                <div class="w-[95%] flex justify-center">
                    <h1 class="text-4xl font-bold ml-8 text-center opacity-100">Filtros</h1>
                </div>
                <div class="w-[5%] flex justify-end">
                    <img src="../assets/x.svg" @click="$emit('fechaFiltro')" class="h-5 mr-3">
                </div>
            </div>
            <div class="mt-4">
                <h1 class="text-2xl font-bold text-center">Tamanho</h1>
            </div>
            <div class="mt-4 pb-4 flex flex-col border-b-4 border-[#BBBBBB]">
                <label class="ml-6 flex mt-2 mb-2 items-center" v-for="size in sizes" :key="size">
                    <input type="checkbox" style="background-color: transparent; height: 2vh; width: 2vw;"
                        :checked="filtrosTamanho.includes(size)" @click="toggleFilter('tamanho', size)" />
                    <p class="text-xl">{{ size }}</p>
                </label>
            </div>

            <div class="mt-4">
                <h1 class="text-2xl font-bold text-center">Cor</h1>
            </div>
            <div class="mt-4 pb-4 flex flex-col border-b-4 border-[#BBBBBB]">
                <label class="ml-6 flex mt-2 mb-2 items-center" v-for="color in colors" :key="color">
                    <input type="checkbox" style="background-color: transparent; height: 2vh; width: 2vw;"
                        :checked="filtrosCores.includes(color)" @click="toggleFilter('cor', color)" />
                    <p class="text-xl">{{ color }}</p>
                </label>
            </div>
        </div>
        <div class="flex justify-center">
            <button @click="$emit('aplicar-filtros', filtrosTamanho, filtrosCores)">Aplicar filtros</button>
        </div>
        <div class="flex justify-center">
            <button
                class="border-2 border-black rounded-md bg-[#D9D9D9] w-[90%] h-14 text-center flex justify-center items-center"
                @click="removerFiltros">
                <p class="w-[90%] h-[100%]">Remover filtros</p>
            </button>
        </div>

    </div>
</template>
<script setup>

import { defineProps, ref, onMounted, onBeforeUnmount, toRefs } from 'vue';

const props = defineProps({
  aplicarFiltros: Function, // Adicione outras propriedades aqui se necessário
  removerFiltros: Function
});

const sizes = ['P', 'M', 'G', 'GG'];
const colors = ['Preto', 'Branco', 'Marrom', 'Azul'];

const filtrosTamanho = ref([]);
const filtrosCores = ref([]);
const filtroNaTela = ref(false);

function mudaTextoDoBotao() {

    if (filtrosAdicionados) {
        return "Remover filtros";
    } else {
        return "Aplicar filtros";
    }
    return "Aplicar filtros";
}

function adicionarFiltroTamanho(filtro) {
    filtrosTamanho.push(filtro);
}
function adicionarFiltroCor(filtro) {
    filtrosCores.push(filtro);
}
function removeFiltroTamanho(filtro) {
    filtrosTamanho.splice(filtrosTamanho.indexOf(filtro), 1);
}
function removeFiltroCor(filtro) {
    filtrosCores.splice(filtrosCores.indexOf(filtro), 1);
}

function mudaFiltrosAdicionados() {
    filtrosAdicionados = !filtrosAdicionados;
}

function aplicarFiltros() {
    $emit('aplicar-filtros', filtrosTamanho, filtrosCores);
}

function removerFiltros() {
    filtrosTamanho.splice(0, filtrosTamanho.length);
    filtrosCores.splice(0, filtrosCores.length);
    $emit('remover-filtros');
}

function toggleFilter(type, value) {
    if (type === 'tamanho') {
        if (filtrosTamanho.includes(value)) {
            removeFiltroTamanho(value);
            console.log(filtrosTamanho);
        } else {
            adicionarFiltroTamanho(value);
            console.log(filtrosTamanho);
        }
    } else if (type === 'cor') {
        if (filtrosCores.includes(value)) {
            removeFiltroCor(value);
            console.log(filtrosCores);
        } else {
            adicionarFiltroCor(value);
            console.log(filtrosCores);
        }
    }
    $emit('update-filters', filtrosTamanho, filtrosCores);
    props.aplicarFiltros([...filtrosTamanho], [...filtrosCores]);
    props.removerFiltros();
}

</script>