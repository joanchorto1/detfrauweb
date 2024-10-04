import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmpresesView from "@/views/EmpresesView.vue";
import ParticularsView from "@/views/ParticularsView.vue";
import BlogView from "@/views/BlogView.vue";
import ContecteView from "@/views/ContecteView.vue";
import DetectivePrivadoTarragona from "@/views/articles/DetectivePrivadoTarragona.vue";
import DetectiveInfidelidadCastellon from "@/views/articles/DetectiveInfidelidadCastellon.vue";
import DetectivePrivadoTTEE from "@/views/articles/DetectivePrivadoTTEE.vue";
import MejoresDetectivesTgn2024 from "@/views/articles/MejoresDetectivesTgn2024.vue";
import GiaContratarInvPriv2024 from "@/views/articles/GiaContratarInvPriv2024.vue";

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
    },
    {
      path: '/mejor-detective-privado-tarragona-2024',
        name: 'detectiu_mejor',
      component: MejoresDetectivesTgn2024
    },
    {
      path: '/como-contratar-un-detective-privado-tarragona',
        name: 'detectiu_contratar',
      component: GiaContratarInvPriv2024
    }



  ]
})

export default router
