<template>
  <div>
    <h2>Diagon Valley online Store</h2>
    <div class="flex-container">
      <div>
        <p>Basket:</p>
        <div v-for="(product, index) in productList" :key="index">
          <DiagonItem
            :product="product"
            :index="index"
            @add-product="addProduct"
            @remove-product="removeProduct"
            @remove-from-cart="removeFromCart"
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
    totalPrice({ productList }) {
      var totalPrice = "";
      productList.forEach(product => {
        totalPrice += product.quantity * product.price;
      });
      return totalPrice;
    }
  },
  methods: {
    addProduct(value) {
      this.productList[value].quantity++;
    },
    removeProduct(value) {
      if (this.productList[value].quantity > 1) {
        this.productList[value].quantity--;
      } else {
        this.productList.splice(this.productList[value], 1);
      }
    },
    removeFromCart(value){
      this.productList.splice(this.productList[value], 1);
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