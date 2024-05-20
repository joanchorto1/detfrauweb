<script setup>

import IconPhoneç from "@/components/icons/IconPhone.vue";
import IconMail from "@/components/icons/IconMail.vue";
</script>

<template>
  <div>

    <div class="flex flex-col md:flex-row lg:flex-row items-start  justify-center pt-10 pb-10">
      <div class="flex flex-col w-4/5 items-center space-y-6 justify-center">
        <slot/>
      </div>
      <div class="flex md:visible lg:visible invisible flex-col w-1/5 border-l-4 border-amber-500 p-2 items-start justify-start">
        <ul class="">
          <li class="flex items-center content-center">
            <icon-mail class="fill-amber-500 size-20"/>
            <p>info@detfrau.com</p>
          </li>
          <li class="flex items-center content-center">
            <icon-phoneç class="fill-amber-500 size-20"/>
            <p>643 69 19 72</p>
          </li>
          <li class="flex items-center text-center visible my-7 justify-center content-center">
            <router-link to="/contacte-detectiu-privat" class="bg-amber-500 text-gray-50 text-lg p-2 rounded-md hover:bg-amber-500 hover:text-gray-50">Contacta'ns</router-link>

          </li>
        </ul>
      </div>

    </div>

  </div>
</template>

<style scoped>

</style>