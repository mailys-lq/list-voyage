import axios from 'axios';

const destinations = {
    namespaced: true,
    state() {
      return {
        destinations: {}, 
        url : 'https://listevoyage-eddc5-default-rtdb.europe-west1.firebasedatabase.app/Destination',
      };
    },

    getters: {
        getDestinations(state){
            console.log(state.destinations);
            return state.destinations;
        }
    }, 

    mutations: {
        GET_DESTINATION(state, payload){
            console.log(payload.destinations);
            return state.destinations = payload.destinations;
        }
    },

    actions: {

        async getListData(state) {
            const url = `${state.url}.json`;
            const firebaseResponse = await axios.get(url);    
            return state.listData = firebaseResponse.data;
          },
        async getDestinationsBdd(context, payload){
            const url = 'https://listevoyage-eddc5-default-rtdb.europe-west1.firebasedatabase.app/Destination.json';
            const firebaseResponse = await axios.get(url);
            payload = {'url': url, 'destinations': firebaseResponse.data}
            context.commit('GET_DESTINATION', payload);
        }
    },
  }
  
export default destinations;