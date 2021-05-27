<template>
    <div>
        <destination class="list"
        v-for="(destination, index) in getDestinations" :key="index"
        :ville = destination.ville
        :pays = destination.pays
        :image = destination.image
        :description = destination.description
        :prix = destination.prix
        :id = index
        ></destination>
        <button @click="getDestinationsBdd">Test</button>
    </div>
</template>
<script>
import Destination from './Destination.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    components: { 
        Destination 
    },

    mounted() {
        console.log(`At this point, vm.$el has been created and el has been replaced.`);
        // console.log(this.$el.textContent) // Example component.
        this.getDestinationsBdd()
    },
    computed:{
        ...mapGetters('destinations', ['getDestinations'])
    },
    methods:{
        ...mapActions('destinations', ['getDestinationsBdd'])
    }
}
</script>
<style scoped>
    .list{
      width: 100%;
      margin: 10px auto; 
    }
</style>