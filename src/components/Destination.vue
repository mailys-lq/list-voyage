<template>
  <div class="card">
    <img :src="image" alt="">
    <div class=card-right>
      <h2>{{ pays }}</h2>
      <span>{{ ville }}</span>
      <p>{{ description }}</p>
      <span>{{ prix }}</span>
      {{ id }}
      <button @click="goToForm(id)">Voir</button>
    </div>

  </div>
</template>
<script>
  
  export default {
  
    props: {
      image: String, 
      description: String, 
      prix: Number, 
      id: String, 
      ville: String, 
      pays: String, 
    }, 

    methods: {
      goToForm(id) { 
        this.$router.push({ name: 'destination_detail', params: { id: id, }});
      }
    }
  };
</script>
<style>
  
</style>