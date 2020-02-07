<template>
    <div class="card">
        <img :src="wizard.image" style="max-width: 250px; height: 350px">
        <p>Name: {{wizard.name}}</p>
        <p>Actor: {{wizard.actor}}</p>
        <p>Patronus: {{wizard.patronus}}</p>
        <p>Species: {{wizard.species}}</p>
        <p>House: {{wizard.house}}</p>
        <p>Alive: {{wizard.alive}}</p>
    </div>
</template>

<script>
export default {
  name: "WizardView",
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data(){
    return{
        wizard: {}
    }
  },
  created(){
      var wizards = localStorage.getItem('wizards');
      this.wizard = JSON.parse(wizards).find(wizard => wizard.name === this.id);
  }
};
</script>

<style>
</style>
