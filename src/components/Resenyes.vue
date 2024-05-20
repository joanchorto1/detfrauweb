<script setup>

import IconEstrella from "@/components/icons/IconEstrella.vue";
</script>

<template>
  <div class="p-10">
    <div class="flex flex-col pt-10  items-center  space-y-3 justify-center">
      <h4 class="text-3xl text-amber-500 uppercase font-bold">Els nostres clients en's avalen</h4>
      <p class="text-sm font-light opacity-50 ">Totes les resenyes mostrades, provenen del perfil de DETFRAU de Googel Maps</p>
    </div>
    <div class="flex flex-col lg:flex-row space-y-7 md:space-y-0 lg:space-y-0 md:flex-row md:space-x-5 lg:space-x-5 p-10">
      <div class="flex flex-col md:w-1/4 lg:w-1/4 rounded-xl p-3 border-gray-300 border-2 bg-gray-50 space-y-3">
        <img src="/src/assets/D_user.png" alt="" class="mt-3 rounded-full size-10 mb-3">
        <div class="flex space-x-5">
          <div class="flex w-2/3 items-start justify-start space-x-5">
            <h5 class="font-bold text-lg">David Domingo Porres
            </h5>
          </div>
          <div class="flex w-1/3 items-end justify-end ">
            <p class=" text-gray-700">5</p>
            <IconEstrella class="fill-amber-500 size-20 h-6"/>

          </div>


        </div>
        <p class="font-thin text-sm">Excelentes profesionales. Contacté por un tema laboral y me ofrecieron un trato
          excepcional. Los resultados fueron también satisfactorios.
          Eternamente agradecido.</p>

      </div>
      <div class="flex flex-col md:w-1/4 lg:w-1/4 rounded-xl p-3 border-gray-300 border-2 bg-gray-50 space-y-3">
        <img src="/src/assets/R_user.png" alt="" class="mt-3 rounded-full size-10 mb-3">
        <div class="flex space-x-5">
          <div class="flex w-2/3 items-start justify-start space-x-5">
            <h5 class="font-bold text-lg">Roser Zwua
            </h5>
          </div>
          <div class="flex w-1/3 items-end justify-end ">
            <p class=" text-gray-700">5</p>
            <IconEstrella class="fill-amber-500 size-20 h-6"/>

          </div>


        </div>
        <p class="font-thin text-sm">Servicio profesional, eficiente y efectivo. Por fin y pasado mucho tiempo y haber invertido mucha energía y dinero, he podido resolver un problema personal/profesional de una manera bastante satisfactoria.</p>

      </div>
      <div class="flex flex-col md:w-1/4 lg:w-1/4 rounded-xl p-3 border-gray-300 border-2 bg-gray-50 space-y-3">
        <img src="/src/assets/S_user.png" alt="" class="mt-3 rounded-full size-10 mb-3">
        <div class="flex space-x-5">
          <div class="flex w-2/3 items-start justify-start space-x-5">
            <h5 class="font-bold text-lg">Sandra - Salvadó Assessors
            </h5>
          </div>
          <div class="flex w-1/3 items-end justify-end ">
            <p class=" text-gray-700">5</p>
            <IconEstrella class="fill-amber-500 size-20 h-6"/>

          </div>


        </div>
        <p class="font-thin text-sm">Discrets, interessats en la feina i molt professionals.</p>

      </div>
      <div class="flex flex-col md:w-1/4 lg:w-1/4 rounded-xl p-3 border-gray-300 border-2 bg-gray-50 space-y-3">
        <img src="/src/assets/C_user.png" alt="" class="mt-3 rounded-full size-10 mb-3">
        <div class="flex space-x-5">
          <div class="flex w-2/3 items-start justify-start space-x-5">
            <h5 class="font-bold text-lg">Carlos Aleixendri
            </h5>
          </div>
          <div class="flex w-1/3 items-end justify-end ">
            <p class=" text-gray-700">5</p>
            <IconEstrella class="fill-amber-500 size-20 h-6"/>

          </div>


        </div>
        <p class="font-thin text-sm">Muy profesional y muy buen trabajo</p>

      </div>



    </div>
    <div class="flex items-center justify-center ">
      <button class="bg-amber-500 text-gray-50 p-2 rounded-md"><a href="https://www.google.es/maps/place/DETFRAU+INVESTIGACIONS/@40.7663249,-0.5108985,9z/data=!4m10!1m2!2m1!1sDETFRAU!3m6!1s0x12a0e506fdab3b23:0xe9c440f0090b5fe2!8m2!3d40.775705!4d0.1484066!15sCgdERVRGUkFVkgEUcHJpdmF0ZV9pbnZlc3RpZ2F0b3LgAQA!16s%2Fg%2F11vdbq_1nj?hl=es&entry=ttu">Deixa la teva resenya</a></button>
    </div>

  </div>
</template>

<style scoped>

</style>