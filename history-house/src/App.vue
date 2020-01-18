<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/hogwards-icon.jpg" style="max-width: 25%;">
    <HistoryHouse/>
  </div>
</template>

<script>
import HistoryHouse from './components/HistoryHouse.vue'

export default {
  name: 'app',
  components: {
    HistoryHouse
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
