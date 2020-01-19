<template>
  <div id="app">
  <img src="./assets/sorting-hat.png" style="max-width: 20%;" alt="">
  <sorting-hat/>
  </div>
</template>

<script>
import SortingHat from "./components/SortingHat";
export default {
  name: 'app',
  components: {
    SortingHat
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
