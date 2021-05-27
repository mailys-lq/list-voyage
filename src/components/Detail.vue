<template>

  <div class="card">
    <img :src="image" alt="">
    <div class=card-right>
      
      <h2>{{ pays }}</h2>
      <span>{{ ville }}</span>
      <p>{{ description }}</p>
      <span>{{ prix }}</span>
      <span>{{ nb_person }}</span>

      <formulaire :id = id
      :date_debut = date_debut
      :date_fin = date_fin
      :nb_person = nb_person></formulaire>
    </div>

  </div>
</template>
<script>
// import { mapActions, mapGetters } from 'vuex';
import Formulaire from './Formulaire.vue';

export default {
  // mounted() {
  //   if(this.date_debut && this.date_fin) {
  //     console.log('destination detail')
  //     this.showSouhait({id: this.id})

  //   } else {
  //     console.log(this.id);
  //     const id = this.id;
  //     this.showDestination({id})
  //   }
  // },
  components:{
    Formulaire
  },
  props: { 
    id: String, 
    date_debut: String, 
    date_fin: String, 
    update: Boolean,
    pays: String,
    prix: String, 
    image: String, 
    ville: String, 
    nb_person: Number, 
    description: String,
  }, 
  methods: {
    // goToForm(id, formulaire, image) {
    //   this.$router.push({ name: 'destination', params: { formulaire : formulaire, id: id, image: image }});
    // },
    // ...mapActions('destinations', ['showDestination']),
    // ...mapActions('souhaits', ['showSouhait'])

  }, 
  computed:{
    // ...mapGetters('destinations', ['getDestination'])
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