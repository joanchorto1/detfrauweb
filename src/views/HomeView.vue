<script setup>
import Banner1 from "@/components/Banner1.vue";
import Serveis from "@/components/Serveis.vue";
import Welcome from "@/components/Welcome.vue";
import Cta from "@/components/Cta.vue";
import Mapa from "@/components/Mapa.vue";
import Resenyes from "@/components/Resenyes.vue";
</script>

<template>
  <head lang="cat">
    <title>DETFRAU - Detectius Privats</title>
    <link rel="canonical" href="https://detfrau.com" />
    <meta name="description" content="Detectius privats a Tarragona. Serveis d'investigació privada per empreses i particulars. Detectiu d'infidelitats a Castelló. Contacta'ns." />
  </head>
  <main class="w-full">
    <Banner1 />
    <Welcome/>
    <Serveis/>
    <Cta/>
    <Mapa/>
    <Resenyes/>

  </main>
</template>
