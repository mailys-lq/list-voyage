import { createRouter, createWebHistory } from 'vue-router';
import { ListDestination } from '../components/ListDestination.vue';
import { Formulaire } from '../components/Formulaire.vue';

const router = new createRouter({
  routes: [
    { path: '/', component: ListDestination, name: 'destinations' },
    { path: '/formulaire', component: Formulaire, name: 'formulaire' },
  ], 
  history: createWebHistory()
});

export default router;