<template v-if="TamanhoDaTela == 'Desktop'">
    <div v-if="loginNaTela == true">
        <ModalLoginDesktop v-on:fechaModal="mostrarLogin()"></ModalLoginDesktop>
    </div>
    <div class="w-full bg-[#D9D9D9] flex border-b-4 border-[#BBBBBB]"
        style="height: auto; min-height: 8vh; max-height: fit-content;">


        <RouterLink class="w-1/6" to="/">
            <div
                class=" h-[8vh] border-r-4 border-[#BBBBBB] hover:bg-[#ebebeb] shadow-inner cursor-pointer flex justify-center items-center">

                <div>
                    <img src="../assets/logoTonn.svg" class="w-[8vw] h-[9vh]  shadow-inner">
                </div>

            </div>
        </RouterLink>

        <div
            class="w-1/6 h-[8vh] border-r-4  border-[#BBBBBB] shadow-inner hover:bg-[#ebebeb] drop-shadow-2xl cursor-pointer ">
            <RouterLink to="/items">
                <div class="h-[8vh] flex justify-center items-center">
                    <h1 class="text-[2vw] font-bold italic font-padrao-bold-italic">ITEM</h1>
                </div>
            </RouterLink>
        </div>
        <div class="w-1/6 h-[8vh] border-r-4  border-[#BBBBBB] items-center justify-center shadow-inner hover:bg-[#ebebeb] drop-shadow-2xl cursor-pointer"
            @click="mostrarLogin()">
            <h1 class="flex justify-center items-center h-full text-[2vw] font-bold italic font-padrao">LOGIN</h1>

        </div>
        <div
            class="w-1/6 h-[8vh] border-r-4  border-[#BBBBBB] shadow-inner hover:bg-[#ebebeb] drop-shadow-2xl cursor-pointer">
            <RouterLink to="/">
                <div class="h-[8vh] flex justify-center items-center">
                    <h1 class="text-[2vw] font-bold italic font-padrao">HOME</h1>
                </div>
            </RouterLink>
        </div>
        <div
            class="w-1/6 h-[8vh] border-r-4 border-[#BBBBBB] shadow-inner hover:bg-[#ebebeb] drop-shadow-2xl cursor-pointer">
            <RouterLink to="/">
                <div class="h-[8vh] flex justify-center items-center">
                    <h1 class="text-[2vw] font-bold italic font-padrao">HOME</h1>
                </div>
            </RouterLink>
        </div>
        <div class="w-1/6 h-[8v] flex">
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

    </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import ModalLoginDesktop from './ModalLoginDesktop.vue'
import { ref } from 'vue'

const loginNaTela = ref(false)

function mostrarLogin() {
    this.loginNaTela = !this.loginNaTela;
}

</script>
