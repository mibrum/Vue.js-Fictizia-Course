<template>
  <form>
    <input type="text" v-model="name" placeholder="Wizard name" />
    <br />
    <input type="number" v-model="price" placeholder="Reward price" />
    <br />
    <input type="text" v-model="imageUrl" placeholder="Image url" />
    <br />
    <button @click.prevent="submitForm">Submit form</button>
  </form>
</template>

<script>
export default {
  name: "WizardForm",
  data() {
    return {
      name: "",
      price: null,
      imageUrl: ""
    };
  },
  methods: {
      submitForm(){
        this.$emit('new-wizard', {name: this.name, price: this.price, imageUrl: this.imageUrl})
      }
  }
};
</script>

<style>
input[type="text"],
input[type="number"],
select {
  width: 500px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 250px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid steelblue;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>