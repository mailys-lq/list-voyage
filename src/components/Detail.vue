<template>

  <div class="card" v-if="getDestination.destination">
    <img :src="getDestination.destination.image" alt="">
    <div class=card-right>
      {{ getDestination.destination.id}}
      <h2>{{ getDestination.destination.pays }}</h2>
      <span>{{ getDestination.destination.ville }}</span>
      <p>{{ getDestination.destination.description }}</p>
      <span>{{ getDestination.destination.prix }}</span>
      <span>{{ getDestination.destination.nb_person }}</span>

      <formulaire :id = getDestination.id
      :date_debut = date_debut
      :date_fin = date_fin
      :update = update></formulaire>
    </div>

  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import Formulaire from './Formulaire.vue';

export default {
  mounted() {
    if(this.date_debut && this.date_fin) {
      console.log('destination detail')
      this.showSouhait({id: this.id})

    } else {
      console.log(this.id);
      const id = this.id;
      this.showDestination({id})
    }
  },
  components:{
    Formulaire
  },
  props: { 
    id: String, 
    date_debut: String, 
    date_fin: String, 
    update: Boolean,
  }, 
  methods: {
    // goToForm(id, formulaire, image) {
    //   this.$router.push({ name: 'destination', params: { formulaire : formulaire, id: id, image: image }});
    // },
    ...mapActions('destinations', ['showDestination']),
    ...mapActions('souhaits', ['showSouhait'])

  }, 
  computed:{
    ...mapGetters('destinations', ['getDestination'])
  } 
  };
</script>
<style>
  .card{
    width: 80%; 
    display: flex;
    border: 1px solid grey;
    border-radius: 25px;
    margin: 5px; 
  }

  .card img{
    width: 50%;
    margin-right: 10px;
    border-radius: 25px 0 0 25px;
  }

  .card-right{
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
</style>