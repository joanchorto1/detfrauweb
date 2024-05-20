<script setup>

import LogoComplet from "@/components/icons/LogoComplet.vue";
import IconMail from "@/components/icons/IconMail.vue";
import IconPhoneç from "@/components/icons/IconPhone.vue";
</script>

<template>
  <header class="bg-stone-800 w-full flex flex-col">
    <nav class="container mx-auto flex flex-col md:flex-row lg:flex-row items-center justify-between ">
      <router-link to="/" class=""> <LogoComplet class="fill-gray-100 hover:fill-amber-500 size-40"/>  </router-link>
      <div>
        <ul class="flex flex-col md:flex-row lg:flex-row md:space-x-5 lg:space-x-5 pb-5">
          <li><router-link to="/" class="text-gray-50  text-lg pb-2 px-2 hover:text-xl hover:text-amber-500">Inici</router-link></li>
          <li><router-link to="/investigacio-privada-per-empreses" class="text-gray-50  text-lg pb-2 px-2 hover:text-xl hover:text-amber-500">Empreses</router-link></li>
          <li><router-link to="/investigació-privada-per-particulars" class="text-gray-50  text-lg pb-2 px-2 hover:text-xl hover:text-amber-500">Particulars</router-link></li>
          <li><router-link to="/blog-sobre-detectius-privats" class="text-gray-50  text-lg pb-2 px-2 hover:text-xl hover:text-amber-500">Blog</router-link></li>
          <li><router-link to="/contacte-detectiu-privat" class="text-gray-50  text-lg pb-2 px-2 hover:text-xl hover:text-amber-500">Contacte</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
  <div class="flex flex-col min-h-screen w-full">
    <slot />
  </div>
  <footer class="bg-stone-800 py-5 flex-col flex w-full">
    <div class="container flex flex-col md:flex-row lg:flex-row mx-auto text-center text-white">
      <div class="md:w-1/3 lg:w-1/3 w-full  flex mf:space-x-5 lg:space-x-5">
        <div class="flex items-center content-center">
          <IconMail class="fill-amber-500 size-20"/>
          <p>info@detfrau.com</p>
        </div>
        <div class="flex items-center content-center ">
          <IconPhoneç class="fill-amber-500 size-20"/>
          <p>643 69 19 72</p>
        </div>
      </div>
      <div class="md:w-1/3 lg:w-1/3 w-full items-center justify-center flex mf:space-x-5 lg:space-x-5">
        <p>&copy; 2021 DETFRAU</p>
      </div>
      <div class="md:w-1/3 lg:w-1/3 w-full items-center justify-center flex mf:space-x-5 lg:space-x-5">
        <LogoComplet class="fill-gray-50 size-40"/>
      </div>
    </div>
    <div class="justify-center items-center content-center text-center  p-5 border-t-2 border-amber-500">
      <p class="text-xl text-amber-500">T.I.P. núm: 3857 - COL. núm: 604 - RNSP núm: 11009</p>
    </div>
  </footer>
</template>

<style scoped>

</style>