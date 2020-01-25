<template>
  <span>
    {{product.title}} - Quantity: {{product.quantity}} - Price: {{product.price}} golden Galleons
    <button
      @click="addProduct(index)"
    >Add</button>
    <button @click="removeProduct(index)">Remove</button>
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
        addProduct(id){
            this.$emit('add-product', id)
        },
        removeProduct(id){
            this.$emit('remove-product', id)
        },
        removeFromCart(id){
            this.$emit('remove-from-cart', id)
        }
    }
};
</script>

<style>
</style>