<template>
  <div>
    <h2>{{ pays }}</h2>
    <p>{{id}}</p>
    <span>{{ ville }}</span>
    <span>{{ date_debut }}</span>
    <span>{{ date_fin }}</span>
    <button @click="deleteSouhait(id)">Delete</button>
    <button @click="updateSouhait(id, date_debut, date_fin)">Update</button>

  </div>
</template>
<script>
import { mapActions } from 'vuex';
  // import Name from '@/components/Name.vue';
  
  export default {
    props: {
      id: String, 
      ville: String, 
      pays: String, 
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
<style scoped>
    
</style>