 <template>
  <div>
    <h1>Sorting Hat</h1>
    <button @click="getHouse">Get your house</button>
    <p>{{selectedHouse}}</p>
    <img v-show="loader" src="../assets/loader.gif" style="max-width: 20%;" alt="">
  </div>
</template>
 
 <script>
export default {
  data() {
    return {
      hogwartsHouses: ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"],
      selectedHouse: "",
      loader: false
    };
  },
  methods: {
      getHouse(){
        this.loader = true;
        setTimeout(() => {
            this.loader = false;
            this.selectedHouse = this.hogwartsHouses[Math.floor(Math.random()*this.hogwartsHouses.length)];
        }, 5000)
      }
  }
};
</script>
 
 <style>
</style>