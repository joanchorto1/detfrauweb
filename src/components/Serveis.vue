<script setup>

</script>

<template>
  <div>

  <div class="flex flex-col md:flex-row bg-stone-800 p-10 space-y-10 md:space-y-0 lg:space-y-0 pt-20 text-amber-500">
    <div class="flex flex-col md:w-1/2 lg:w-1/2  items-center justify-center content-center text-center ">
      <h3 class="font-semibold border-amber-500 border-b-2 pb-1 uppercase text-3xl">Serveis per empreses</h3>
      <ul class="space-y-5 text-start text-white pt-5">
        <li class="text-xl"><strong class="font-semibold text-amber-500 text-2xl">- </strong>Competència deslleial
        </li>
        <li class="text-xl"><strong class="font-semibold text-amber-500 text-2xl">- </strong>Detecció d'absentisme laboral</li>
        <li class="text-xl"><strong class="font-semibold text-amber-500 text-2xl">- </strong>Investigació de robatori i furt
        </li>
        <li class="text-xl"><strong class="font-semibold text-amber-500 text-2xl">- </strong>Investigació d’accidents</li>
        <li class="text-xl"><strong class="font-semibold text-amber-500 text-2xl">- </strong>Conflicte d’interessos
        </li>
      </ul>
      <div class="flex text-start items-start justify-start pt-5">

      <router-link to="/investigacio-privada-per-empreses" class="mt-10 text-gray-50  hover:text-amber-400">Més informació</router-link>
      </div>
    </div>
    <div class="flex flex-col md:w-1/2 lg:w-1/2  items-center justify-center content-center text-center ">
      <h3 class="font-semibold border-amber-500 border-b-2 pb-1 uppercase text-3xl">Serveis per a particulars</h3>
      <ul class="space-y-5 text-start text-white pt-5">
        <li class="text-xl"><strong class="font-semibold text-amber-500 text-2xl">- </strong>Detectar infidelitat conjugal
        </li>
        <li class="text-xl"><strong class="font-semibold text-amber-500 text-2xl">- </strong>Problemes d’herències</li>
        <li class="text-xl"><strong class="font-semibold text-amber-500 text-2xl">- </strong>Investigació de conductes dubtoses</li>
        <li class="text-xl"><strong class="font-semibold text-amber-500 text-2xl">- </strong>Insolvència fingida
        </li>
        <li class="text-xl"><strong class="font-semibold text-amber-500 text-2xl">- </strong>Modificació de mesures
        </li>
      </ul>
      <div class="flex text-start items-start justify-start pt-5">
        <router-link to="/investigació-privada-per-particulars" class="mt-10 text-gray-50  hover:text-amber-400">Més informació</router-link>
      </div>

    </div>
  </div>
  <div class="py-5 items-center text-amber-500 text-center w-full bg-stone-800">
    <p>També oferim serveis d'instal·lació de càmares ocultes ja que en molts casos són l'única eina d'averiguar i acreditar determinats successos.</p>
  </div>
  </div>

</template>

<style scoped>

</style>