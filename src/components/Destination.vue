<template>
  <div class="card">
    <img :src="image" alt="">
    <div class=card-right>
      <h2>{{ pays }}</h2>
      <span>{{ ville }}</span>
      <p>{{ description }}</p>
      <span>{{ Prix }}</span>
      <button @click="goToForm(id)">Go to form</button>
    </div>

  </div>
</template>
<script>
  // import Name from '@/components/Name.vue';
  
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
        this.$router.push({ name: 'create', params: { id }});

      }
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