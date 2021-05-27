<template>
  <div class="header">
    <router-link class="link" :to="{ name: 'destinations' }">Destinations</router-link>
    <router-link class="link" :to="{ name: 'souhaits' }">Souhait</router-link>
  </div>
  <router-view></router-view>
</template>
<script>


export default {
  
}
</script>
<style>
  .header{
    border-bottom: 1px solid grey;
    margin: 0 auto; 
    width: 100%; 
    text-align: center;
    display: flex; 
    justify-content: center;
  }
  .link{
    text-decoration: none; 
    font-family: 'Roboto';
    font-weight: bold; 
    color: black;
    margin: 5px;
  }


  #app{
    margin: 0 auto; 
    width: 100%; 
  }
</style>
