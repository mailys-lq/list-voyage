import axios from 'axios';

const destinations = {
    namespaced: true,
    state() {
      return {
        destinations: {}, 
        destination: {},

        url : 'https://listevoyage-eddc5-default-rtdb.europe-west1.firebasedatabase.app/Destination',
      };
    },

    getters: {
        getDestinations(state){
            console.log(state.destinations);
            return state.destinations;
        }, 

        getDestination(state){
          console.log(state.destination)
          return state.destination;

        }
    }, 

    mutations: {
        GET_DESTINATION(state, payload){
            console.log(payload.destinations);
            return state.destinations = payload.destinations;
        }, 
        SHOW_DESTINATION(state, payload){
          console.log(payload);
          return state.destination = payload;
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
        },

        async showDestination(context, payload){
          const url = 'https://listevoyage-eddc5-default-rtdb.europe-west1.firebasedatabase.app/Destination';
          console.log('showDetail',payload)
          const firebaseResponse = await axios.get(`${url}/${payload.id}.json`);
          console.log(firebaseResponse);
          payload = {'id': payload.id, 'destination': firebaseResponse.data}
          context.commit('SHOW_DESTINATION', payload);
        }
    },
  }
  
export default destinations;