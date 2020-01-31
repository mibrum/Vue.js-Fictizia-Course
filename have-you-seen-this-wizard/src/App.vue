<template>
  <div id="app">
    <WizardHeader @search-text="searchText"/>
    <WizardList :search="search"/>
  </div>
</template>

<script>
import WizardList from "./components/WizardList";
import WizardHeader from "./components/WizardHeader";

export default {
  name: 'app',
  components: {
    WizardList,
    WizardHeader
  },
  data(){
    return{
      search: ""
    }
  },
  methods: {
    searchText(val){
      this.search = val;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
