<template>
        <div class="w-[50vw]">
            <img :src="img" class="w-[50vw]">
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
        img: String,
    })

</script>