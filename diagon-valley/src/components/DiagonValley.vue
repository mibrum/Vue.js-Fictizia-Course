<template>
  <div>
    <h2>Diagon Valley online Store</h2>
    <div class="flex-container">
      <div>
          <p>Basket:</p>
          <div v-for="(product, index) in productList" :key="index">
            {{product.title}} - Quantity: {{product.quantity}} - Price: {{product.price}} golden Galleons
          </div>
      </div>
      <div>
          <p>Total: {{totalPrice}} golden Galleons</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      productList: [
        {
          title: "Time Turner",
          quantity: 100,
          price: 10.5
        },
        {
          title: "Marauder's Map",
          quantity: 1,
          price: 100.5
        },
        {
          title: "Sword of Gryffindor",
          quantity: 5,
          price: 550
        }
      ]
    };
  },
  computed: {
      totalPrice({productList}){
        var totalPrice = "";
        productList.forEach(product => {
            totalPrice += product.quantity * product.price
         })
        return totalPrice;
      }
  }
};
</script>

<style>
.flex-container {
  display: flex;
  justify-content: space-around;
  align-items: center
}
</style>