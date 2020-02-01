<template>
  <div class="home">
    <input type="text" placeholder="Find wizard..." v-model="text" />
    <button @click="filterWizards(text)">Search</button>
    <div v-for="(wizard, index) in filteredList" :key="index">
      <WizardCard :wizard="wizard" />
    </div>
  </div>
</template>

<script>
// $route.query.name
// $route.push({query: {name: "potter"}})
import WizardCard from "../components/WizardCard";

export default {
  name: "home",
  components: {
    WizardCard
  },
  data() {
    return {
      wizardList: [],
      filteredList: [],
      text: ""
    };
  },
  methods: {
    filterWizards(text) {
      debugger
      this.filteredList = this.wizardList.filter(wizard =>
        wizard.name.toLowerCase().includes(text.toLowerCase())
      );
      
      this.$router.push({query: {search: text}})
    },
    getWizards() {
      return fetch("http://hp-api.herokuapp.com/api/characters")
        .then(response => response.json())
        .then(response => {
          debugger
          this.wizardList = response;
          localStorage.setItem("wizards", JSON.stringify(response));
        });
    }
  },
  created() {
    this.getWizards().then(() => {
      debugger
      if (this.$route.query.search) {
        this.filterWizards(this.$route.query.search);
      }
    });
  }
};
</script>
<style>
input[type="text"],
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
