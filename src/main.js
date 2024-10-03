import 'aos/dist/aos.css'; // Importar estilos de AOS
import AOS from 'aos'; // Importar AOS
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

// Inicializar AOS
AOS.init({
    duration: 1000, // Duración de la animación
    easing: 'ease-in-out', // Efecto de easing
    once: true, // Animar solo una vez
});
