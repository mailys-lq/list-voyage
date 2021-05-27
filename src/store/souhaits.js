import axios from "axios";

const souhaits = {
    namespaced: true,
    state() {
      return{
        souhaits:{}, 
        souhait:{}, 
      }
    },
    getters: {
      getSouhaits(state) {
        return state.souhaits
      } 
    },

    mutations: {
        GET_DESTINATION_SOUHAIT(state, payload) {
          console.log(payload); 
          return state.souhaits = payload.souhait;
        }, 

        DELETE_SOUHAIT(state, payload) {
          console.log(payload); 
          // state.souhait.$forceUpdate();
          return state.souhaits = payload;
        },

        UPDATE_SOUHAIT(state, payload) {
          console.log(payload); 
          return state.souhaits = payload;
        },

        SHOW_SOUHAIT(state, payload){
          console.log(payload);
          return state.souhait = payload;
        }
    },
    actions: {
      async getDestinationsSouhaitBdd(context, payload){
        const url = 'https://listevoyage-eddc5-default-rtdb.europe-west1.firebasedatabase.app/Souhait.json';
        const firebaseResponse = await axios.get(url);
        payload = {'url': url, 'souhait': firebaseResponse.data}
        console.log(payload);
        context.commit('GET_DESTINATION_SOUHAIT', payload);
      },

      async deleteSouhait(context, payload) {
        console.log(payload);
        try {
          // suppression de la ressource dans la base
          const url = 'https://listevoyage-eddc5-default-rtdb.europe-west1.firebasedatabase.app/Souhait';

          const response = await axios.delete(`${url}/${payload}.json`);
          console.log(response); 
          if(response.statusText !== 'OK') {
            console.log('erreur');
            throw new Error("Une erreur est survenue !");
          }
          // un nouveau get pour pouvoir réactualiser la liste des ressources 
          console.log('coucou')
          payload = {'souhait': response.data}
          context.commit('DELETE_SOUHAIT', payload);
          context.dispatch('getDestinationsSouhaitBdd', payload)


        } catch(error) {
          alert(error.message);
        }
      },

      async updateSouhait(context, payload) {
        console.log(payload);
        try {
          const id = payload; 
          console.log(id); 
          const url = 'https://listevoyage-eddc5-default-rtdb.europe-west1.firebasedatabase.app/Souhait';
          payload = {'date_debut': payload.dateStart, 'date_fin': payload.dateEnd}
          console.log(payload);
          const response = await axios.patch(`${url}/${id}.json`, payload);
          console.log(response); 
          if(response.statusText !== 'OK') {
            console.log('erreur');
            throw new Error("Une erreur est survenue !");
          }
          // un nouveau get pour pouvoir réactualiser la liste des ressources 
          console.log('coucou')
          payload = {'souhait': response.data}
          context.commit('UPDATE_SOUHAIT', payload);

        } catch(error) {
          alert(error.message);
        }
      },

      async showSouhait(context, payload){
        const url = 'https://listevoyage-eddc5-default-rtdb.europe-west1.firebasedatabase.app/Souhait';
        console.log('showDetail',payload)
        const firebaseResponse = await axios.get(`${url}/${payload.id}.json`);
        console.log(firebaseResponse);
        payload = {'id': payload.id, 'destination': firebaseResponse.data}
        console.log(payload);
        context.commit('SHOW_SOUHAIT', payload);
      }
    },
    
  }
  
  export default souhaits;