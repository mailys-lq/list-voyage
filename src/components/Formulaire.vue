<template>
  <div id="formulaire">
    {{ id }}
    <form @submit.prevent>
      <div>
        <label for="start">Date de debut du voyage</label>
        <input  v-model.trim="start" type="date" id="start" name="start">
      </div>
      <div>
        <label for="end">Date de fin du voyage</label>
        <input v-model.trim="end" type="date" id="end" name="end">
      </div>
      <div>
        <label for="nb_person">Nombre de personnes</label>
        <input v-model.trim="nb_person" type="number" id="nb_person" name="nb_person">
      </div>
      <button type="submit" @click="addDestination(id)">Valider</button>
    </form>
    
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  date(){
    return{
      start : '', 
      end : '',
      nb_person : null, 
    }
  },
  mounted() {
    
  },
  props: {
    id: String,
    date_debut: String, 
    date_fin: String, 
    update: Boolean,
    // nb_person: Number,
  },

  methods:{

    addDestination(id){
      // if(this.update) {
      //   this.updateSouhait({
      //     dateStart: this.start,
      //     dateEnd: this.end, 
      //     nbPerson: this.nb_person,  
      //     id: id})

      // } else {
        console.log(this.start); 
        console.log(this.end);
        console.log(this.nb_person); 
        this.addDestinationSouhait({
          dateStart: this.start, 
          dateEnd: this.end, 
          nbPerson: this.nb_person, 
          id: id})
        this.$router.push({ name: 'souhaits'});

      // }
      
    },

    ...mapActions('formulaire', ['addDestinationSouhait']),
    ...mapActions('souhait', ['updateSouhait']),

  }
}
</script>
<style scoped>
  #formulaire {
    display: block;
    background-color: red;
  }
</style>