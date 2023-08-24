<template>
    <main class="w-full bg-[#F9F9F9]" style="height: auto; min-height: 100vh; max-height: fit-content;">
        <header class="w-full" style="height: auto; min-height: 10vh; max-height: fit-content;">
            <div v-if="tamanhoDaTela == 'Mobile'">
                <HeaderMobile />
            </div>
            <div v-if="tamanhoDaTela == 'Desktop'">
                <HeaderDesktop />
            </div>
        </header>

        <body class=" bg-[#F9F9F9]" style="height: auto; min-height: 100vh;">
            <!--MOBILE-->
            <div v-if="tamanhoDaTela == 'Mobile'">

                <div class=" flex flex-wrap justify-center h-[full]">
                    <div class="w-[100vw] h-[89vh] flex flex-col  items-center">
                        <div class="flex h-[45vh]">
                            <div class="w-[100vw] h-[50vh] mt-8 flex justify-center items-center">
                                <div class="w-[300px] h-[300px] bg-slate-400 flex rounded-full">
                                    <img class="w-[300px] h-[300px] rounded-full">
                                </div>
                            </div>
                        </div>
                        <div class="w-[100vw] h-[35%] flex flex-col mt-16 items-center">
                            <div class="flex flex-col">
                                <label class="w-[100%]">

                                    <label>
                                        <p>Nome</p>
                                        <input class="border-2 border-black rounded-md w-[60vw] h-10">
                                    </label>
                                    <label>
                                        <p>Sobrenome</p>
                                        <input class="border-2 border-black rounded-md w-[60vw] h-10">
                                    </label>
                                    <label>
                                        <p>Telefone</p>
                                        <input class="border-2 border-black rounded-md w-[60vw] h-10">
                                    </label>

                                    <p>CPF</p>
                                    <input class="border-2 border-black rounded-md w-[60vw] h-10">



                                    <button
                                        class="border-2 border-black rounded-md bg-[#D9D9D9] w-[60vw] h-14 mt-4 text-center flex justify-center items-center">
                                        <p>Adicionar uma localização</p>
                                        <img src="../assets/localizacaoIcon.svg">
                                    </button>
                                </label>


                            </div>

                        </div>

                    </div>
                    <div class="w-[50vw] flex justify-center content-end mt-24 h-[89vh]">
                        <div class="h-[89vh] flex flex-col justify-center">
                            <div>
                                <h1 class="text-4xl font-bold italic font-sans">Histórico de pedidos</h1>
                                <div class="h-[59.5vh] w-[100%] overflow-auto border-b-4 border-black">
                                    <div v-for="produtoDoHistorico in userLogado.historicoDeCompras"
                                        :key="produtoDoHistorico">
                                        <ProdutoNoHistorico class="w-[100%] h-[15vh]" :nome="produtoDoHistorico.nome" :preco="produtoDoHistorico.preco" :tamanho="produtoDoHistorico.tamanho" :img="produtoDoHistorico.img"></ProdutoNoHistorico>
                                    </div>
                                </div>
                                <button
                                    class="border-2 border-black rounded-md mt-4 bg-[#D9D9D9] w-[60vw] h-14 text-center flex justify-center items-center">
                                    <p>Ver pedidos em andamento</p>
                                    <img src="../assets/entregaIcon.svg">
                                </button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <!--DESKTOP-->
            <div v-if="tamanhoDaTela == 'Desktop'">

                <div class=" flex flex-row h-[89vh]">
                    <div class="w-[50vw] h-[89vh]">
                        <div class="flex h-[45vh]">
                            <div class="w-[46vw] h-[50vh] mt-8 flex justify-center items-center">
                                <div class="w-[300px] h-[300px] bg-slate-400 flex rounded-full">
                                    <img class="w-[300px] h-[300px] rounded-full">
                                </div>
                            </div>
                        </div>
                        <div class="w-[24vw] h-[25%] flex flex-col">
                            <div class="flex flex-col ml-8">
                                <label class="w-[100%]">

                                    <label>
                                        <p>Nome</p>
                                        <input class="border-2 border-black rounded-md w-[42.5vw] h-10">
                                    </label>
                                    <label>
                                        <p>Sobrenome</p>
                                        <input class="border-2 border-black rounded-md w-[42.5vw] h-10">
                                    </label>
                                    <label>
                                        <p>Telefone</p>
                                        <input class="border-2 border-black rounded-md w-[42.5vw] h-10">
                                    </label>

                                    <p>CPF</p>
                                    <input class="border-2 border-black rounded-md w-[42.5vw] h-10">



                                    <button
                                        class="border-2 border-black rounded-md bg-[#D9D9D9] w-[42.5vw] h-14 mt-4 text-center flex justify-center items-center">
                                        <p>Adicionar uma localização</p>
                                        <img src="../assets/localizacaoIcon.svg">
                                    </button>
                                </label>


                            </div>

                        </div>

                    </div>
                    <div class="w-[50vw] flex justify-center h-[89vh] bg-[#F9F9F9]">
                        <div class="h-[89vh] flex flex-col justify-center">
                            <div>
                                <h1 class="text-4xl font-bold italic font-sans">Histórico de pedidos</h1>
                                <div class="h-[59.5vh] w-[100%] overflow-auto border-b-4 border-black">
                                    <div v-for="produtoDoHistorico in userLogado.historicoDeCompras"
                                        :key="produtoDoHistorico">
                                        <ProdutoNoHistorico class="w-[100%] h-[15vh]" :nome="produtoDoHistorico.nome" :preco="produtoDoHistorico.preco" :tamanho="produtoDoHistorico.tamanho" :img="produtoDoHistorico.img"></ProdutoNoHistorico>
                                    </div>
                                </div>
                                <button
                                    class="border-2 border-black rounded-md mt-4 bg-[#D9D9D9] w-[42.5vw] h-14 text-center flex justify-center items-center"
                                    @click="verificaUsuarios()">
                                    <p>Ver pedidos em andamento</p>
                                    <img src="../assets/entregaIcon.svg">
                                </button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>


        </body>
    </main>
</template>
<script>

import { ref, onMounted, onBeforeUnmount } from 'vue';
import HeaderDesktop from '@/components/HeaderDesktop.vue'
import HeaderMobile from '../components/HeaderMobile.vue';
import ProdutoNoHistorico from '../components/ProdutoNoHistorico.vue';
import {usuarios} from '../data/usuariosData.ts';

export default {
    components: {
        HeaderDesktop,
        HeaderMobile,
        ProdutoNoHistorico
    },
    methods: {
        mudarFiltroNaTela() {
            this.filtroNaTela = !this.filtroNaTela;
        },
        verificaUsuarios(){
            console.log(usuarios);
        }
    },
    setup() {
        const tamanhoDaTela = ref('Desktop');

        const updateTamanhoDaTela = () => {
            if (window.innerWidth <= 820) {
                tamanhoDaTela.value = 'Mobile';
            } else {
                tamanhoDaTela.value = 'Desktop';
            }
        };

        onMounted(() => {
            window.addEventListener('resize', updateTamanhoDaTela);
            updateTamanhoDaTela();
        });

        onBeforeUnmount(() => {
            window.removeEventListener('resize', updateTamanhoDaTela);
            updateTamanhoDaTela();
        });

        return {
            tamanhoDaTela
        };
    },
    data(){
        return{
            userLogado: usuarios[0]
        }
    }
}

</script>