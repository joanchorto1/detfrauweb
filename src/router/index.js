import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmpresesView from "@/views/EmpresesView.vue";
import ParticularsView from "@/views/ParticularsView.vue";
import BlogView from "@/views/BlogView.vue";
import ContecteView from "@/views/ContecteView.vue";
import DetectivePrivadoTarragona from "@/views/articles/DetectivePrivadoTarragona.vue";
import DetectiveInfidelidadCastellon from "@/views/articles/DetectiveInfidelidadCastellon.vue";
import DetectivePrivadoTTEE from "@/views/articles/DetectivePrivadoTTEE.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/investigacio-privada-per-empreses',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: EmpresesView
    },
    {
      path: '/investigació-privada-per-particulars',
      name: 'investigacio particular',
      component: ParticularsView
    },
    {
      path: '/blog-sobre-detectius-privats',
      name: 'investigacio blog',
      component: BlogView
    },
    {
      path: '/contacte-detectiu-privat',
      name: 'contacte',
      component: ContecteView
    },
    {
      path: '/detectiu-privat-tarragona',
      name: 'detectiu_tarragona',
      component: DetectivePrivadoTarragona
    },
    {
      path: '/detectiu-infidelitat-castellon',
        name: 'detectiu',
        component: DetectiveInfidelidadCastellon
    },
    {
      path: '/detectiu-privat-terres-de-lebre',
      name: 'detectiu_te',
      component: DetectivePrivadoTTEE
    }



  ]
})

export default router
