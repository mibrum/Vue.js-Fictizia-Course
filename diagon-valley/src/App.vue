<template>
  <div id="app">
    <DiagonValley/>
  </div>
</template>

<script>
import DiagonValley from "./components/DiagonValley";

export default {
  name: 'app',
  components: {
    DiagonValley
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
