<template>
  <main class="w-full bg-[#F9F9F9]" style="height: auto; min-height: 100vh; max-height: fit-content;">
    <header class="w-full" style="height: auto; min-height: 10vh; max-height: fit-content;">
      <div v-if="tamanhoDaTela == 'Mobile'">
        <HeaderMobile />
      </div>
      <div v-if="tamanhoDaTela == 'Desktop'">
        <HeaderDesktop/>
      </div>
    </header>
    <body style="height: auto; min-height: 90vh; max-height: fit-content;">
      <BannerHome/>
    </body>
  </main>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import HeaderDesktop from '@/components/HeaderDesktop.vue'
import HeaderMobile from '../components/HeaderMobile.vue';
import BannerHome from '../components/BannerHome.vue';

export default {
  components: {
    HeaderDesktop,
    HeaderMobile,
    BannerHome
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
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', updateTamanhoDaTela);
    });

    return {
      tamanhoDaTela
    };
  }
};
</script>
