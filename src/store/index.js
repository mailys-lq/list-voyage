import { createStore } from 'vuex';
import formulaire from './formulaire';
import destinations from './destinations';
import souhaits from './souhaits';


const store = createStore({
  modules: {
    formulaire, 
    destinations, 
    souhaits
  },
});

export default store;