<template>
    <div class="w-[100%] h-full flex fixed top-0 left-0 z-10">
        <div class="w-8/12 bg-[#D9D9D9] overflow-auto">
            <div class="mt-4 border-b-4 border-[#BBBBBB] flex items-center">
                <div class="w-[95%] flex justify-center">
                    <h1 class="text-4xl font-bold ml-8 text-center opacity-100">Filtros</h1>
                </div>
                <div class="w-[5%] flex justify-end">
                    <img src="../assets/x.svg" @click="$emit('fechaFiltro')" class="h-5 mr-3">
                </div>
            </div>
            <div class="mt-4">
                <h1 class="text-2xl opacity-100 font-bold text-center">Tamanho</h1>
            </div>
            <div class="mt-4 pb-4 flex flex-col border-b-4 border-[#BBBBBB]">
                <label class="ml-16 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 50%;">
                    <p class="text-xl opacity-100 ">P</p>
                </label>
                <label class="ml-16 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 50%;">
                    <p class="text-xl opacity-100 ">M</p>
                </label>
                <label class="ml-16 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 50%;">
                    <p class="text-xl opacity-100 ">G</p>
                </label>
                <label class="ml-16 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 50%;">
                    <p class="text-xl opacity-100">GG</p>
                </label>
            </div>
            <div class="mt-4">
                <h1 class="text-2xl font-bold text-center">Cor</h1>
            </div>
            <div class="mt-4 pb-4 flex flex-col border-b-4 border-[#BBBBBB]">
                <label class="ml-16 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 50%;">
                    <p class="text-xl opacity-100 ">Preto</p>
                </label>
                <label class="ml-16 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 50%;">
                    <p class="text-xl opacity-100 ">Branco</p>
                </label>
                <label class="ml-16 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 50%;">
                    <p class="text-xl opacity-100 ">Marrom</p>
                </label>
                <label class="ml-16 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 50%;">
                    <p class="text-xl opacity-100 ">Azul</p>
                </label>
            </div>
            <div class="mt-4">
                <h1 class="text-2xl font-bold text-center">Tamanho</h1>
            </div>
            <div class="mt-4 pb-4 flex flex-col border-b-4 border-[#BBBBBB]">
                <label class="ml-16 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 50%;">
                    <p class="text-xl opacity-100 ">P</p>
                </label>
                <label class="ml-16 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 50%;">
                    <p class="text-xl opacity-100 ">M</p>
                </label>
                <label class="ml-16 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 50%;">
                    <p class="text-xl opacity-100 ">G</p>
                </label>
                <label class="ml-16 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 50%;">
                    <p class="text-xl opacity-100 ">GG</p>
                </label>
            </div>
            <div class="mt-4">
                <h1 class="text-2xl font-bold text-center">Cor</h1>
            </div>
            <div class="mt-4 pb-4 flex flex-col border-b-4 border-[#BBBBBB]">
                <label class="ml-16 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 50%;">
                    <p class="text-xl opacity-100 ">Preto</p>
                </label>
                <label class="ml-16 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 50%;">
                    <p class="text-xl opacity-100 ">Branco</p>
                </label>
                <label class="ml-16 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 50%;">
                    <p class="text-xl opacity-100 ">Marrom</p>
                </label>
                <label class="ml-16 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 50%;">
                    <p class="text-xl opacity-100 ">Azul</p>
                </label>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>