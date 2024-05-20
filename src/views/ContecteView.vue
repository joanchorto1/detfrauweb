<script setup>

import IconMail from "@/components/icons/IconMail.vue";
import IconPhoneç from "@/components/icons/IconPhone.vue";
</script>

<template>
  <head>
    <title>DETFRAU - Contacte</title>
    <link rel="canonical" href="https://detfrau.com/contacte-detectiu-privat" />
    <meta name="description" content="Contacta amb nosaltres. Detectius privats a Tarragona i Castelló. Detectiu d'infidelitats. Contacta'ns." />
  </head>
<div class="items-center justify-center flex flex-col ">
<!--  <div class="justify-center items-center space-y-6 text-xl text-center p-10">-->
<!--    <h1 class="text-3xl font-bold text-amber-500">Contecte</h1>-->
<!--    <p>Si tens qualsevol dubte o consulta, no dubtis en contactar-nos. Estarem encantats d'ajudar-te.</p>-->
<!--  </div>-->
  <div class="flex-col md:w-2/3 lg:w-2/3    p-2 mt-28  border-amber-500 border-b-4  flex items-center justify-center">
    <h2 class="text-3xl font-bold pt-2">Informació de contacte</h2>
    <div class="flex flex-col md:flex-row lg:flex-row lg:space-x-8 md:space-x-8">
      <div class="flex items-center content-center">
        <icon-mail class="fill-amber-500 size-20"/>
        <p>info@detfrau.com</p>
      </div>
      <div class="flex items-center content-center">
        <icon-phoneç class="fill-amber-500 size-20"/>
        <p>643 69 19 72</p>
      </div>
    </div>

  </div>
    <div class="flex flex-col m-10 rounded-lg bg-stone-800   lg:w-1/3 w-full md:w-1/3  items-start p-10  justify-start">
      <div class="flex w-full justify-center items-center content-center text-center ">
        <h2 class="text-2xl font-bold text-gray-50 border-b-2 border-amber-500 px-5 pb-2">Formulari de contacte</h2>
      </div>
      <form class="flex-col p-5 space-y-3   w-full flex  ">
        <label class="font-bold text-gray-50">Nom</label>
        <input class="border-amber-500  p-2 rounded-md" type="text" >
        <label class="font-bold text-gray-50">Correu</label>
        <input class="border-amber-500  p-2 rounded-md" type="text" >
        <label class="font-bold text-gray-50">Missatge</label>
        <textarea  class="border-amber-500 p-2  rounded-md" ></textarea>
        <button class="mt-10 rounded-md bg-amber-500 p-2 text-gray-50 font-bold">Enviar</button>
      </form>
    </div>
</div>
</template>

<style scoped>

</style>