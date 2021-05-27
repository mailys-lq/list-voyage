<template>
  <div>
    <router-link :to="{ name: 'destinations' }">Destinations</router-link>
    <router-link :to="{ name: 'souhaits' }">Souhait</router-link>

  </div>
  <router-view></router-view>
</template>
<script>


export default {
  
}
</script>
<style>
  
</style>