<template>
    <div class="w-full h-[15vh] mt-6 bg-[#D9D9D9] flex">
        <div class="w-[150px] h-full flex justify-center items-center">
            <img class="w-[100px] h-[100px] border-[1px] border-black" :src="img">
        </div>
        <div class="flex items-center justify-between w-full">
            <div>
                <h1 class="text-[3vh] font-bold">{{ nome }}</h1>
                <p class="text-[2vh]">{{ tamanho }}</p>
            </div>
            <div>
                <h1 class="text-[3vh] pr-6">{{ preco }}</h1>
            </div>
            

        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    nome: String,
    preco: String,
    tamanho: String,
    img: String
})

</script>