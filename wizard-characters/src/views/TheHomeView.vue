<template>
  <div class="home">
    <input type="text" placeholder="Find wizard..." v-model="text" />
    <button @click="inputFiltered(text)">Search</button>
    <div v-for="(wizard, index) in filteredList" :key="index">
      <WizardCard :wizard="wizard" />
    </div>
  </div>
</template>

<script>
// $route.query.name
// $route.push({query: {name: "potter"}})
import WizardCard from "../components/WizardCard";
import { mapActions, mapState } from 'vuex';

export default {
  name: "home",
  components: {
    WizardCard
  },
  data() {
    return {
      filteredList: [],
      text: ""
    };
  },
  methods: {
    ...mapActions(['getWizards']),
    filterWizards(text) {
      this.filteredList = this.wizards.filter(wizard =>
        wizard.name.toLowerCase().includes(text.toLowerCase())
      );
    },
    inputFiltered(text){
      this.filterWizards(text)
      if(text){
        this.$router.push({query: {search: search}})
      }
    }
  },
  computed: {
    ...mapState({
      wizards: state => state.wizards,
      search: state => state.search,
    }),
    filteredWizards(){
      return this.$store.getters.filteredWizards(this.text);
    }
  },
  created() {
    this.getWizards()
    .then(() => {
      if (this.$route.query.search) {
        this.filterWizards(this.$route.query.search);
      }
      else if(!this.$route.query.search){
        this.filteredList = this.wizards;
      }
    });
  }
};
</script>
<style>
input[type="text"],
input[type="password"],
select {
  width: 500px;
  padding: 12px 20px;
  margin: 30px 15px 10px 15px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 500px;
  padding: 12px 20px;
  margin: 0px 0px 40px 0px;
  display: inline-block;
  border: 1px solid #42b983;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
