<template>
    <main class="w-full bg-[#F9F9F9]" style="height: auto; min-height: 100vh; max-height: fit-content;">
            <div class="bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center">

                <div class="bg-[#D9D9D9] h-[70vh] w-[40vw] drop-shadow-2xl flex flex-col">
                    <div class="flex w-full justify-end mt-4">
                            <img src="../assets/x.svg" @click="$emit('fechaModal')" class="h-5 mr-3">
                        </div>
                    <div class="flex items-center justify-center">
                        <img src="../assets/logoTonn.svg" class="w-[15vw] h-[10vh]">
                    </div>
                    <h1 class="text-[5vh] text-center font-bold">LOGIN</h1>
                    
                    <div class="h-[40vh] flex flex-col items-center justify-around">
                        <label>
                            <p>E-mail</p>
                            <input type="email" class="border-2 border-black rounded-md w-[32.5vw] h-10">
                        </label>
                        <label>
                            <p>Senha</p>
                            <input class="border-2 border-black rounded-md w-[32.5vw] h-10">
                            <p class="cursor-pointer">Esqueceu sua senha?</p>
                        </label>

                    </div>
                    <div class="flex items-center flex-col">
                        <label class="flex mt-2 mb-2 items-center">
                            <input type="checkbox" style="background-color: transparent; height: 50%;">
                            <p class="t opacity-100 ">Lembre de mim</p>
                        </label>
                        <p class="cursor-pointer">Não possui registro? clique aqui</p>
                        <button
                            class="border-2 border-black rounded-md bg-[#D9D9D9] w-[32.5vw] h-14 mt-4 mb-4 text-center flex justify-center items-center">
                            <p>LOGIN</p>
                        </button>
                    </div>

                </div>


            </div>

    </main>
</template>
<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({

})
const modalAberto = ref(false)

function mudarModalNaTela() {
    this.modalAberto = !this.modalAberto;
}


</script>