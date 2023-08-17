<template>
    <div class="w-full bg-[#D9D9D9] flex border-b-4 border-[#BBBBBB]"
        style="height: auto; min-height: 12vh; max-height: fit-content;">
        <div class="w-1/6 h-[12vh] border-r-4 border-[#BBBBBB] shadow-inner">
            <RouterView to="/">
                
            </RouterView>
            <img src="../assets/logoTonn.svg" class="w-full h-[12vh] hover:bg-[#ebebeb] shadow-inner">
        </div>
        <div class="w-1/6 h-[12vh] border-r-4  border-[#BBBBBB] shadow-inner hover:bg-[#ebebeb] drop-shadow-2xl ">
            <RouterView to="/">
                <div class="h-[12vh] flex justify-center items-center">
                    <h1 class="text-4xl font-bold italic font-padrao">HOME</h1>
                </div>
            </RouterView>
        </div>
        <div class="w-1/6 h-[12vh] border-r-4  border-[#BBBBBB] shadow-inner hover:bg-[#ebebeb] drop-shadow-2xl">
            <RouterView to="/">
                <div class="h-[12vh] flex justify-center items-center">
                    <h1 class="text-4xl font-bold italic font-padrao">HOME</h1>
                </div>
            </RouterView>
        </div>
        <div class="w-1/6 h-[12vh] border-r-4  border-[#BBBBBB] shadow-inner hover:bg-[#ebebeb] drop-shadow-2xl">
            <RouterView>
                <div class="h-[12vh] flex justify-center items-center">
                    <h1 class="text-4xl font-bold italic font-padrao">HOME</h1>
                </div>
            </RouterView>
        </div>
        <div class="w-1/6 h-[12v] border-r-4 border-[#BBBBBB] shadow-inner hover:bg-[#ebebeb] drop-shadow-2xl">
            <RouterView>
                <div class="h-[12vh] flex justify-center items-center">
                    <h1 class="text-4xl font-bold italic font-padrao">HOME</h1>
                </div>
            </RouterView>
        </div>
        <div class="w-1/6 h-[12v] flex">
            <div class="w-1/2 h-full border-r-2 border-[#BBBBBB] shadow-inner hover:bg-[#ebebeb] drop-shadow-2xl">
                <RouterView>
                    <div class="h-[12vh] flex justify-center items-center">
                        <img src="../assets/userIcon.svg" class="w-1/2 h-1/2">
                    </div>
                </RouterView>
            </div>
            <div class="w-1/2 h-full border-l-2 border-[#BBBBBB] shadow-inner hover:bg-[#ebebeb] drop-shadow-2xl ">
                <RouterView>
                    <div class="h-[12vh] flex justify-center items-center">
                        <img src="../assets/carIcon.svg" class="w-1/2 h-1/2">
                    </div>
                </RouterView>
            </div>
        </div>

    </div>
</template>
<script setup>

</script>
