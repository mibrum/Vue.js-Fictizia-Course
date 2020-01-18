<template>
  <div class="flex-container">
    <div>
      <h1>History House</h1>
    </div>
    <div>
      Select house:
      <select v-model="fetchHouse">
        <option value="5a05dc8cd45bd0a11bd5e071">Slytherin</option>
        <option value="5a05e2b252f721a3cf2ea33f">Gryffindor</option>
        <option value="5a05da69d45bd0a11bd5e06f">Ravenclaw</option>
        <option value="5a05dc58d45bd0a11bd5e070">Hufflepuff</option>
      </select>
    </div>
    <HouseCard :house="this.house"/>
  </div>
</template>

<script>
import HouseCard from "./HouseCard";
export default {
    name: "HistoryHouse",
    components: {
      HouseCard
    },
    data(){
        return{
            apiKey: '$2a$10$/mQ60IF5cZe7iUGMReRt.eCLASP7wovwIdqK1XO5uLOezMUbx.ZTi',
            houseId: '',
            fetchHouse: '',
            house: ''
        }
    },
    watch: {
        fetchHouse(houseId){

            fetch(`https://www.potterapi.com/v1/houses/${houseId}?key=${this.apiKey}`)
                .then(function(response){
                    return response.json();
                })
                .then((response) => {
                    this.house = response[0];
                })
        }
    }
};
</script>

<style>
.flex-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>