<template>
  <div>
    <h2>Diagon Valley online Store</h2>
    <div class="flex-container">
      <div>
        <p>Basket:</p>
        <div v-for="(product, index) in list" :key="index">
          <DiagonItem
            :product="product"
            :index="index"
          />
        </div>
      </div>
      <div>
        <p>Total: {{totalPrice}} golden Galleons</p>
      </div>
    </div>
  </div>
</template>

<script>
import DiagonItem from "@/components/DiagonItem";
export default {
  name: "DiagonValley",
  components: {
    DiagonItem
  },
  computed: {
    list(){
      return this.$store.state.productList;
    },
    totalPrice({ list }) {
      var totalPrice = "";
      list.forEach(product => {
        totalPrice += product.quantity * product.price;
      });
      return totalPrice;
    }
  }
};
</script>

<style>
.flex-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>