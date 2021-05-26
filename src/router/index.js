import { createRouter, createWebHistory } from 'vue-router';
import ListDestination from '../components/ListDestination.vue';
import FormulaireCreate from '../components/FormulaireCreate.vue';
import FormulaireUpdate from '../components/FormulaireUpdate.vue';

import ListSouhait from '../components/ListSouhait';
const router = new createRouter({
  routes: [
    { path: '/destinations', component: ListDestination, name: 'destinations'
    // , children: 
    //   [
    //     { path: ':id/formulaire', component: Formulaire, name: 'formulaire', props: true}
    //   ] 
    },
    { path: '/formulaire-create', component: FormulaireCreate, name: 'create', props: true},
    { path: '/formulaire-update', component: FormulaireUpdate, name: 'update', props: true},
    { path: '/souhaits', component: ListSouhait, name: 'souhaits' },


    // { name: 'resource-list', path: '/', component: ResourceList, children: 
    //   [
    //     { name: 'resource-detail', path: 'detail/:id', component: ResourceDetail, props: true },
    //   ] 
    // },

  ], 
  history: createWebHistory(),
  linkActiveClass: 'active'

});

export default router;