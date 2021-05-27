<template>
  <div class="card">
    <img :src="image" alt="">
    <div class="card-right">
      <h2>Pays de destinations : {{ pays }}</h2>
      <p>{{ description }}</p>
      <span>Ville : {{ ville }}</span>
      <p>Départ le : {{ date_debut }}</p>
      <p>Retour le :{{ date_fin }}</p>
      <span>{{ prix}}</span>
      <button @click="deleteSouhait(id)">Delete</button>
      <button @click="updateSouhait(id, date_debut, date_fin)">Update</button>
    </div>

  </div>
</template>
<script>
import { mapActions } from 'vuex';
  // import Name from '@/components/Name.vue';
  
  export default {
    props: {
      id: String, 
      image: String,
      ville: String, 
      pays: String, 
      description: String, 
      prix: Number, 
      date_debut: String, 
      date_fin: String,
    }, 
    methods: {
      deleteSouhait(id) {
        this.deleteSouhait({id: id}); 
      }, 

      updateSouhait(id, date_debut, date_fin) {
        this.$router.push({ name: 'update', params: { id, date_debut, date_fin }});
      }, 

      ...mapActions('souhaits', ['deleteSouhait'])
    }
  };
</script>
<style>
    
</style>