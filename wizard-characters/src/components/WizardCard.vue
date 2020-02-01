<template>
  <div class="card">
    <img :src="wizard.image" style="max-width: 250px; height: 350px" />
    <p>{{wizard.name}}</p>
    <router-link :to="{path: `wizard/${wizard.name}`}">View detail</router-link>
  </div>
</template>

<script>
export default {
  name: "WizardCard",
  props: {
    wizard: {
      required: true,
      type: Object
    }
  }
};
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  width: 250px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  display: inline-block;
}

p {
  margin: 5px;
}
</style>