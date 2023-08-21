<template>
    <div class="w-[20vw] ml-[2vw] mr-[2vw] mt-[4vh] mb-[4vh]">
        <img :src="img" class="w-[20vw]">
        <div class="flex justify-between items-center">
            <h1 class="text-2xl">{{ nome }}</h1>
            <h2 class="text-xl">{{ preco }}</h2>
        </div>
    </div>
</template>
<script setup>

    const props = defineProps({
        nome: String,
        preco: String,
        img: String
    })

</script>