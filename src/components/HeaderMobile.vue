<template v-else>
    <div class="w-full  bg-[#D9D9D9] flex border-b-4 border-[#BBBBBB]"
        style="height: auto; min-height: 8vh; max-height: fit-content;">

        <div class="w-[25vw] h-[8vh] border-r-4  border-[#BBBBBB] shadow-inner hover:bg-[#ebebeb] drop-shadow-2xl cursor-pointer ">
            <RouterLink to="/items">
                <div class="flex items-center justify-center">
                <img src="../assets/menuIcon.svg" class="w-[15vw] h-[8vh]  shadow-inner">
                </div>
            </RouterLink>
        </div>
        
        <RouterLink class="w-[50vw]" to="/">
        <div class=" h-[8vh] border-r-4 border-[#BBBBBB] hover:bg-[#ebebeb] shadow-inner cursor-pointer flex justify-center items-center">

            <div>
                <img src="../assets/logoTonn.svg" class="w-[30vw] h-[9vh]  shadow-inner">
            </div>

        </div>
        </RouterLink>

        <div class="w-[50vw] h-[8v] flex">
            <div
                class="w-1/2 h-full border-r-2 border-[#BBBBBB] shadow-inner hover:bg-[#ebebeb] drop-shadow-2xl cursor-pointer">
                <RouterLink to="/perfil">
                    <div class="h-[8vh] flex justify-center items-center">
                        <img src="../assets/userIcon.svg" class="w-1/2 h-1/2">
                    </div>
                </RouterLink>
            </div>
            <div
                class="w-1/2 h-full border-l-2 border-[#BBBBBB] shadow-inner hover:bg-[#ebebeb] drop-shadow-2xl cursor-pointer">
                <RouterLink to="/">
                    <div class="h-[8vh] flex justify-center items-center">
                        <img src="../assets/carIcon.svg" class="w-1/2 h-1/2">
                    </div>
                </RouterLink>
            </div>
        </div>

</div></template>
<script setup>
    import { RouterLink } from 'vue-router'
    const props = defineProps({
        TamanhoDaTela: String
    })
</script>