<template>
  <div id="formulaire">
    {{ start }}
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
        <label for="personNumber">Nombre de personnes</label>
        <input v-model.trim="personNumber" type="number" id="personNumber" name="personNumber">
      </div>
      <button type="submit" @click="addOrUpdateDestination(id)">Valider</button>
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
      personNumber : null, 
    }
  },
  mounted() {
    // if(this.update) {
      this.start = this.date_debut;
      this.end = this.date_fin;
      this.personNumber = this.nb_person;

      console.log(this.start)
      console.log(this.end)
      console.log(this.personNumber)

      console.log('mount update')
  },
  props: {
    id: String,
    date_debut: String, 
    date_fin: String, 
    nb_person: Number,
    update: Boolean,
  },

  methods:{

    addOrUpdateDestination(id){
      if(this.date_debut && this.date_fin) {
        this.updateSouhait({
          dateStart: this.start,
          dateEnd: this.end, 
          nbPerson: this.nb_person,  
          id: this.id
        })

        console.log('update');
        this.$router.push({ name: 'souhaits'});

      } else {
        console.log(this.start); 
        console.log(this.end);
        console.log(this.nb_person); 
        this.addDestinationSouhait({
          dateStart: this.start, 
          dateEnd: this.end, 
          nbPerson: this.nb_person, 
          id: id
        })
        console.log('add');

        this.$router.push({ name: 'souhaits'});

      }
      
    },

    ...mapActions('formulaire', ['addDestinationSouhait']),
    ...mapActions('souhaits', ['updateSouhait']),

  }
}
</script>
<style scoped>
  #formulaire {
    display: block;
    background-color: red;
  }
</style>