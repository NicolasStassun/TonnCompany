<script setup>
  import Header from '@/components/Header.vue'
  import BannerHome from '../components/BannerHome.vue';
</script>

<template>
  <main class="w-full bg-[#F9F9F9]" style="height: auto; min-height: 100vh; max-height: fit-content;">
    <header class="w-full" style="height: auto; min-height: 10vh; max-height: fit-content;">
      <Header></header>
    </header>
    <body style="height: auto; min-height: 89vh; max-height: fit-content;">
        <BannerHome></BannerHome>
    </body>
  </main>
</template>
