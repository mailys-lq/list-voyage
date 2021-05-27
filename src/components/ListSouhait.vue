<template>
    <div>
        <souhait class="list"
        v-for="(souhait, index) in getSouhaits" :key="index"
        :ville = souhait.ville
        :pays = souhait.pays
        :date_debut = souhait.date_debut
        :date_fin = souhait.date_fin
        :image = souhait.image
        :prix = souhait.prix
        :description = souhait.description
        :id = index
        ></souhait>
        <button @click="getDestinationsSouhaitBdd">Test</button>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import Souhait from './Souhait.vue';

export default {
  components: { 
      Souhait 
  },

  
  mounted() {
    console.log(`souhait mount`);
    // console.log(this.$el.textContent) // Example component.
    this.getDestinationsSouhaitBdd()
  },
  computed:{
    ...mapGetters('souhaits', ['getSouhaits'])
  },
  methods:{
    ...mapActions('souhaits', ['getDestinationsSouhaitBdd'])
  }
}
</script>
<style scoped>
  .list{
    width: 100%;
    margin: 10px auto; 
  }
</style>