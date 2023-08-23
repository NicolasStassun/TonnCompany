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
                <label class=" ml-6 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 2vh; width: 2vw;">
                    <p class="text-xl ">P</p>
                </label>
                <label class=" ml-6 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 2vh; width: 2vw;">
                    <p class="text-xl ">M</p>
                </label>
                <label class=" ml-6 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 2vh; width: 2vw;">
                    <p class="text-xl ">G</p>
                </label>
                <label class=" ml-6 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 2vh; width: 2vw;">
                    <p class="text-xl">GG</p>
                </label>
            </div>
            <div class="mt-4">
                <h1 class="text-2xl font-bold text-center">Cor</h1>
            </div>
            <div class="mt-4 pb-4 flex flex-col border-b-4 border-[#BBBBBB]">
                <label class=" ml-6 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 2vh; width: 2vw;">
                    <p class="text-xl ">Preto</p>
                </label>
                <label class=" ml-6 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 2vh; width: 2vw;">
                    <p class="text-xl ">Branco</p>
                </label>
                <label class=" ml-6 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 2vh; width: 2vw;">
                    <p class="text-xl ">Marrom</p>
                </label>
                <label class=" ml-6 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 2vh; width: 2vw;">
                    <p class="text-xl ">Azul</p>
                </label>
            </div>
            <div class="mt-4">
                <h1 class="text-2xl font-bold text-center">Tamanho</h1>
            </div>
            <div class="mt-4 pb-4 flex flex-col border-b-4 border-[#BBBBBB]">
                <label class=" ml-6 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 2vh; width: 2vw;">
                    <p class="text-xl ">P</p>
                </label>
                <label class=" ml-6 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 2vh; width: 2vw;">
                    <p class="text-xl ">M</p>
                </label>
                <label class=" ml-6 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 2vh; width: 2vw;">
                    <p class="text-xl ">G</p>
                </label>
                <label class=" ml-6 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 2vh; width: 2vw;">
                    <p class="text-xl ">GG</p>
                </label>
            </div>
            <div class="mt-4">
                <h1 class="text-2xl font-bold text-center">Cor</h1>
            </div>
            <div class="mt-4 pb-4 flex flex-col border-b-4 border-[#BBBBBB]">
                <label class=" ml-6 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 2vh; width: 2vw;">
                    <p class="text-xl ">Preto</p>
                </label>
                <label class=" ml-6 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 2vh; width: 2vw;">
                    <p class="text-xl ">Branco</p>
                </label>
                <label class=" ml-6 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 2vh; width: 2vw;">
                    <p class="text-xl ">Marrom</p>
                </label>
                <label class=" ml-6 flex mt-2 mb-2 items-center">
                    <input type="checkbox" style="background-color: transparent; height: 2vh; width: 2vw;">
                    <p class="text-xl ">Azul</p>
                </label>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>