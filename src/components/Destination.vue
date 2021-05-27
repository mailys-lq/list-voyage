<template>
  <div>
    <h2>{{ pays }}</h2>
    <p>{{id}}</p>
    <span>{{ ville }}</span>
    <button @click="goToForm(id)">Go to form</button>

  </div>
</template>
<script>
  // import Name from '@/components/Name.vue';
  
  export default {
    props: {
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
<style scoped>
    
</style>