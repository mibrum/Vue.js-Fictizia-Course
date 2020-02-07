<template>
  <div id="app">
    <div id="nav">
      <the-header/>
      <router-link to="/">Wizard List</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Log in</router-link>
    </div>
    <router-view/>
    <the-footer/>
  </div>
</template>

<script>
import theHeader from "./components/theHeader";
import theFooter from "./components/theFooter";

export default {
  name: "App",
  components: {
    theHeader, 
    theFooter
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
