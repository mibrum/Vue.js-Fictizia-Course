<template>
  <span>
    {{product.title}} - Quantity: {{product.quantity}} - Price: {{product.price}} golden Galleons
    <button
      @click="addProduct(index)"
    >Add</button>
    <button @click="removeProduct(index)">Revome</button>
    <button @click="removeFromCart(index)">Remove from cart</button>
  </span>
</template>

<script>
export default {
    name: "DiagonItem",
    props: {
        product: {
            required: true, 
            type: Object
        },
        index: {
            required: true,
            type: Number
        }
    },
    methods: {
        addProduct(index){
            this.$store.dispatch('addProduct', index)
        },
        removeProduct(index){
            this.$store.dispatch('removeProduct', index)
        },
        removeFromCart(index){
            this.$store.dispatch('removeFromCart', index)
        }
    }
};
</script>

<style>
</style>