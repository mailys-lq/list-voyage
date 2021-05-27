import axios from "axios";

const formulaire = {
    namespaced: true,
    state() {
      return {
        souhait: [],
      };
    },
    mutations: {
        ADD_SOUHAIT(state, payload){
          console.log(payload);
          return state.souhait
        }
    },
    actions: {

      async addDestinationSouhait(context, payload) {
        const id = payload.id; 
        const urlGet = `https://listevoyage-eddc5-default-rtdb.europe-west1.firebasedatabase.app/Destination/${id}.json`;
        console.log(payload);
        // const dateStart = payload.dateStart;
        // const dateEnd = payload.dateEnd;
        const firebaseResponse = await axios.get(urlGet);
        console.log(firebaseResponse.data.pays);
        const urlStore = 'https://listevoyage-eddc5-default-rtdb.europe-west1.firebasedatabase.app/Souhait.json';
        console.log(payload.dateStart); 
        console.log(payload.dateEnd);
        console.log(payload.nbPerson);
        payload = { 
          'pays': firebaseResponse.data.pays, 
          'ville': firebaseResponse.data.ville, 
          'image': firebaseResponse.data.image, 
          'prix': firebaseResponse.data.prix, 
          'description': firebaseResponse.data.description, 
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
    getters: {
        // 
    }
  }
  
  export default formulaire;