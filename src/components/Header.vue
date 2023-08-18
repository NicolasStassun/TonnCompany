<template>
    <div class="w-full bg-[#D9D9D9] flex border-b-4 border-[#BBBBBB]"
        style="height: auto; min-height: 10vh; max-height: fit-content;">
        <div class="w-1/6 h-[10vh] border-r-4 border-[#BBBBBB] hover:bg-[#ebebeb] shadow-inner cursor-pointer flex justify-center items-center">
            <RouterLink to="/">
                <div>
                    <img src="../assets/logoTonn.svg" class="w-full h-[9vh]  shadow-inner">
                </div>
            </RouterLink>
        </div>
        <div class="w-1/6 h-[10vh] border-r-4  border-[#BBBBBB] shadow-inner hover:bg-[#ebebeb] drop-shadow-2xl cursor-pointer ">
            <RouterLink to="/items">
                <div class="h-[10vh] flex justify-center items-center">
                    <h1 class="text-4xl font-bold italic font-padrao">ITEM</h1>
                </div>
            </RouterLink>
        </div>
        <div class="w-1/6 h-[10vh] border-r-4  border-[#BBBBBB] shadow-inner hover:bg-[#ebebeb] drop-shadow-2xl cursor-pointer">
            <RouterLink to="/">
                <div class="h-[10vh] flex justify-center items-center">
                    <h1 class="text-4xl font-bold italic font-padrao">HOME</h1>
                </div>
            </RouterLink>
        </div>
        <div class="w-1/6 h-[10vh] border-r-4  border-[#BBBBBB] shadow-inner hover:bg-[#ebebeb] drop-shadow-2xl cursor-pointer">
            <RouterLink to="/">
                <div class="h-[10vh] flex justify-center items-center">
                    <h1 class="text-4xl font-bold italic font-padrao">HOME</h1>
                </div>
            </RouterLink>
        </div>
        <div class="w-1/6 h-[10vh] border-r-4 border-[#BBBBBB] shadow-inner hover:bg-[#ebebeb] drop-shadow-2xl cursor-pointer">
            <RouterLink to="/">
                <div class="h-[10vh] flex justify-center items-center">
                    <h1 class="text-4xl font-bold italic font-padrao">HOME</h1>
                </div>
            </RouterLink>
        </div>
        <div class="w-1/6 h-[10v] flex">
            <div class="w-1/2 h-full border-r-2 border-[#BBBBBB] shadow-inner hover:bg-[#ebebeb] drop-shadow-2xl cursor-pointer">
                <RouterLink to="/">
                    <div class="h-[10vh] flex justify-center items-center">
                        <img src="../assets/userIcon.svg" class="w-1/2 h-1/2">
                    </div>
                </RouterLink>
            </div>
            <div class="w-1/2 h-full border-l-2 border-[#BBBBBB] shadow-inner hover:bg-[#ebebeb] drop-shadow-2xl cursor-pointer">
                <RouterLink to="/">
                    <div class="h-[10vh] flex justify-center items-center">
                        <img src="../assets/carIcon.svg" class="w-1/2 h-1/2">
                    </div>
                </RouterLink>
            </div>
        </div>

    </div>
</template>
<script setup>
    import { RouterLink } from 'vue-router'
</script>
