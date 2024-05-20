<script setup>

import IconMail from "@/components/icons/IconMail.vue";
import IconPhone from "@/components/icons/IconPhone.vue";
</script>

<template>
  <head >
    <title>DETFRAU - Blog</title>
    <link rel="canonical" href="https://detfrau.com/blog-sobre-detectius-privats" />
    <meta name="description" content="Articles sobre investigació corporativa. Detectius privats a Tarragona i Castelló. Detectiu d'infidelitats. Contacta'ns." />
  </head>
<div>
  <div class="items-center justify-center text-center  space-y-6  p-10">
    <h1 class="text-4xl font-bold text-amber-500">Blog</h1>
    <p class="text-lg">Aqui trobaras articles sobre investigació corporativa, on podras aprender curiositats i tecniques propies dels millors detectius privats.</p>
  </div>
  <div class="flex flex-col md:flex-row lg:flex-row  items-start  justify-center pt-10 pb-10">
    <div class="flex flex-col lg:w-4/5 w-full md:w-4/5 items-center space-y-6 justify-center">
      <div class="rounded-lg shadow-lg bg-gray-100 w-4/5 p-10 text-gray-50 text-start space-y-6">
        <h2 class="text-3xl font-bold text-stone-800"><strong class="text-amber-500 font-bold text-4xl">- </strong> Descifrando Misterios: La Importancia del Detective Privado en Tarragona</h2>
        <p class="text-lg pb-6 text-stone-800 ">En el corazón de Tarragona, donde el Mediterráneo susurra secretos y las calles cuentan historias entrelazadas, la necesidad de un detective privado se vuelve una realidad palpable. ¿Qué papel juegan estos investigadores en la trama de esta ciudad llena de encanto y enigmas? </p>
        <router-link to="/detectiu-privat-tarragona" class="bg-amber-500 text-gray-50  text-lg p-2 rounded-md hover:bg-amber-500 hover:text-gray-50">Llegir més</router-link>
      </div>
      <div class="rounded-lg shadow-lg bg-gray-100 w-4/5 p-10 text-gray-50 text-start space-y-6">
        <h2 class="text-3xl font-bold text-stone-800"><strong class="text-amber-500 font-bold text-4xl">- </strong> Descubriendo la Verdad: Detective de Infidelidades en Castellón</h2>
        <p class="text-lg pb-6 text-stone-800 ">En un mundo donde las relaciones personales pueden ser complicadas y los secretos a menudo se esconden en las sombras, contar con la ayuda de un detective de infidelidades en Castellón puede ser la clave para desentrañar la verdad oculta. </p>
        <router-link to="/detectiu-infidelitat-castellon" class="bg-amber-500 text-gray-50  text-lg p-2 rounded-md hover:bg-amber-500 hover:text-gray-50">Llegir més</router-link>
      </div>
      <div class="rounded-lg shadow-lg bg-gray-100 w-4/5 p-10 text-gray-50 text-start space-y-6">
        <h2 class="text-3xl font-bold text-stone-800"><strong class="text-amber-500 font-bold text-4xl">- </strong> Desvelando Misterios: Detectives Privados en Terres de l'Ebre</h2>
        <p class="text-lg pb-6 text-stone-800 ">En las tierras que baña el río Ebro, donde la historia se entrelaza con la modernidad y los secretos yacen entre los recodos de la naturaleza, la presencia de detectives privados en Terres de l'Ebre se convierte en un faro de esperanza para aquellos que buscan respuestas en medio de la incertidumbre.</p>
        <router-link to="/detectiu-privat-terres-de-lebre" class="bg-amber-500 text-gray-50  text-lg p-2 rounded-md hover:bg-amber-500 hover:text-gray-50">Llegir més</router-link>
      </div>
    </div>
    <div class="md:visible lg:visible invisible flex flex-col w-1/5 border-l-4 border-amber-500 p-2 items-start justify-start">
        <ul class="">
          <li class="flex items-center content-center">
            <icon-mail class="fill-amber-500 size-20"/>
            <p>info@detfrau.com</p>
          </li>
          <li class="flex items-center content-center">
            <icon-phone class="fill-amber-500 size-20"/>
            <p>643 69 19 72</p>
          </li>
          <li class="flex items-center text-center  my-7 justify-center content-center">
            <router-link to="/contacte-detectiu-privat" class="hover:p-1 bg-amber-500 text-gray-50 text-lg p-2 rounded-md hover:text-gray-50">Contacta'ns</router-link>

          </li>
        </ul>
    </div>

  </div>

</div>
</template>

<style scoped>

</style>