<template>
  <div class="about">
    <h3>About page</h3>
    <div id="nav">
      <router-link to="/about/history">History</router-link><br>
      <router-link to="/about/books">Books</router-link>
      <router-view/>
    </div>
  </div>
</template>
