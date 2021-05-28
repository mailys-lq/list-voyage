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
        }, 

        ADD_SOUHAIT(state, payload){
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
        }, 

        async addDestinationSouhait(context, payload) {
          // const id = payload.id; 
          // const urlGet = `https://listevoyage-eddc5-default-rtdb.europe-west1.firebasedatabase.app/Destination/${id}.json`;
          // console.log(payload);
          // // const dateStart = payload.dateStart;
          // // const dateEnd = payload.dateEnd;
          // const firebaseResponse = await axios.get(urlGet);
          // console.log(firebaseResponse.data.pays);
          const urlStore = 'https://listevoyage-eddc5-default-rtdb.europe-west1.firebasedatabase.app/Souhait.json';
          console.log(payload.dateStart); 
          console.log(payload.dateEnd);
          console.log(payload.nbPerson);
          console.log(context.state.destination.destination.pays)
          payload = { 
            'pays': context.state.destination.destination.pays, 
            'ville': context.state.destination.destination.ville, 
            'image': context.state.destination.destination.image, 
            'prix': context.state.destination.destination.prix, 
            'description': context.state.destination.destination.description, 
            'date_debut': payload.dateStart, 
            'date_fin': payload.dateEnd,
            'nb_person': payload.nbPerson,
          }
  
          try{
            // On ajoute les données dans la base de donnée 
            const response = await axios.post(urlStore, payload);
            console.log(response);
            if(response.statusText === 'OK') {
              console.log(response.statusText);
            }
          } catch (e) {
            console.log(e);
          }
          // payload = {'url': url, 'destinations': firebaseResponse.data}
          context.commit('ADD_SOUHAIT', payload);
          context.dispatch('destination/getDestinationsBdd', null, { root: true })
  
        },
    },
  }
  
export default destinations;