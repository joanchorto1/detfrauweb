<script setup>

</script>

<template>
<div class="flex flex-col items-center hero h-96 justify-center content-center text-center p-10bg-no-repeat bg-cover bg-top" >
  <div class="flex flex-col w-3/4 space-y-5 items-center text-center">
    <h1 class="text-4xl text-gray-50 font-bold uppercase">DETFRAU INVESTIGACIONS</h1>
    <h2 class="text-3xl font-semibold uppercase text-amber-500">La teva agència de detectius privats de confiança</h2>
    <p class="text-lg text-gray-50 font-semibold">Detectius privats i criminòlegs</p>
    <div class="pt-16">
      <router-link to="/contacte-detectiu-privat" class=" whitespace-nowrap bg-gray-50 text-gray-950 text-lg p-3 rounded-md hover:bg-amber-500 hover:text-gray-50">Contacta amb nosaltres
      </router-link>
    </div>
  </div>
</div>
</template>

<style scoped>
.hero {
  background-image: url('/src/assets/homebanner.jpg');
  height: 50vh;
}
</style>