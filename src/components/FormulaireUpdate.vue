<template>
  <div id="formulaire">
    <form @submit.prevent>
      <div>
        <label for="start">Date de debut du voyage</label>
        {{date_debut}}
        <input  v-model.trim="start" type="date" id="start" name="start">
      </div>
      <div>
        <label for="end">Date de fin du voyage</label>
        {{date_fin}}
        <input v-model.trim="end" type="date" id="end" name="end">
      </div>
      <button type="submit" @click="updateSouhait(id)">Valider</button>
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
    }
  },
  props: {
    id: String,
    date_debut: String,
    date_fin: String,
  },

  methods:{

    updateSouhait(id){
      console.log(id);
      console.log(this.start); 
      console.log(this.end);
      // this.updateSouhait({dateStart: this.start, dateEnd: this.end, id: id})
    },

    ...mapActions('souhaits', ['updateSouhait']),



  }
}
</script>
<style scoped>
  /* #formulaire {
    display: block;
    background-color: red;
  } */
</style>