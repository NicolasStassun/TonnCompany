<script setup>
  import HeaderDesktop from '@/components/HeaderDesktop.vue'
  import BannerHome from '../components/BannerHome.vue';

  const tamanhoDaTela = window.innerWidth;

  window.addEventListener('resize', () => {
    console.log(tamanhoDaTela)
  })

  
</script>

<template>
  <main class="w-full bg-[#F9F9F9]" style="height: auto; min-height: 100vh; max-height: fit-content;">
    <header class="w-full" style="height: auto; min-height: 10vh; max-height: fit-content;">
      <div v-if="tamanhoDaTela <= 820">
        <HeaderMobile></HeaderMobile>
      </div>
      <div v-esle="tamanhoDaTela > 820">
        <HeaderDesktop></HeaderDesktop>
      </div>
    </header>
    <body style="height: auto; min-height: 89vh; max-height: fit-content;">
        <BannerHome></BannerHome>
    </body>
  </main>
</template>
