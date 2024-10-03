<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';
import IconMail from "@/components/icons/IconMail.vue";
import IconPhoneç from "@/components/icons/IconPhone.vue";


// Variables para manejar el estado del formulario y los campos
const isFormSubmitted = ref(false);
const formFields = ref({
  nombre: '',
  email: '',
  mensaje: '',
});

// Función para manejar el envío del formulario
const handleSubmit = (e) => {
  e.preventDefault();

  // Envío del formulario utilizando Email.js
  emailjs.sendForm('service_sm2120f', 'template_nnb9myr', e.target, 'I8I5YY9azHdD4NKPI')
      .then((result) => {
        console.log(result.text);
        isFormSubmitted.value = true;

        // Vaciar los campos del formulario después del envío exitoso
        formFields.value = {
          nombre: '',
          email: '',
          mensaje: '',
        };
        alert('Correo enviado con éxito!');
      })
      .catch((error) => {
        console.log(error.text);
        isFormSubmitted.value = false;
        alert('Hubo un error al enviar el correo.');
      });
};
</script>

<template>
  <div data-aos="fade-up" class="items-center justify-center flex flex-col">
    <div data-aos="fade-up" class="flex-col md:w-2/3 lg:w-2/3 p-2 mt-28 border-amber-500 border-b-4 flex items-center justify-center">
      <h2 class="text-3xl font-bold pt-2">Informació de contacte</h2>
      <div class="flex flex-col md:flex-row lg:flex-row lg:space-x-8 md:space-x-8">
        <div class="flex items-center content-center">
          <IconMail class="fill-amber-500 size-20" />
          <p>info@detfrau.com</p>
        </div>
        <div class="flex items-center content-center">
          <IconPhoneç class="fill-amber-500 size-20" />
          <p>643 69 19 72</p>
        </div>
      </div>
    </div>

    <div class="flex flex-col m-10 rounded-lg bg-stone-800 lg:w-1/3 w-full md:w-1/3 items-start p-10 justify-start">
      <div class="flex w-full justify-center items-center content-center text-center">
        <h2 data-aos="zoom-in" class="text-2xl font-bold text-gray-50 border-b-2 border-amber-500 px-5 pb-2">
          Formulari de contacte
        </h2>
      </div>

      <!-- Formulario de contacto -->
      <form @submit.prevent="handleSubmit" data-aos="fade-up" class="flex-col p-5 space-y-3 w-full flex">
        <label class="font-bold text-gray-50">Nom</label>
        <input v-model="formFields.nombre" class="border-amber-500 p-2 rounded-md" type="text" name="nombre" required>

        <label class="font-bold text-gray-50">Correu</label>
        <input v-model="formFields.email" class="border-amber-500 p-2 rounded-md" type="email" name="email" required>

        <label class="font-bold text-gray-50">Missatge</label>
        <textarea v-model="formFields.mensaje" class="border-amber-500 p-2 rounded-md" name="mensaje" required></textarea>

        <button type="submit" class="mt-10 rounded-md bg-amber-500 p-2 text-gray-50 font-bold">
          Enviar
        </button>
      </form>

      <!-- Mensaje de confirmación -->
      <div v-if="isFormSubmitted" class="mt-4 text-green-500">
        El correo se ha enviado correctamente.
      </div>
    </div>
  </div>
</template>
