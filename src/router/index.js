import { createRouter, createWebHistory } from 'vue-router';
import ListDestination from '../components/ListDestination.vue';

// import Formulaire from '../components/Formulaire.vue';
import DestinationDetail from '../components/DestinationDetail.vue';
import SouhaitDetail from '../components/SouhaitDetail.vue';

// import FormulaireCreate from '../components/FormulaireCreate.vue';
// import FormulaireUpdate from '../components/FormulaireUpdate.vue';

import ListSouhait from '../components/ListSouhait';
const router = new createRouter({
  routes: [
    { path: '/', component: ListDestination, name: 'destinations' },
    { path: '/destination/:id', component: DestinationDetail, name: 'destination_detail', props: true},
    { path: '/souhait/:id', component: SouhaitDetail, name: 'souhait_detail', props: true},

    // { path: '/formulaire-update', component: FormulaireUpdate, name: 'update', props: true},
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