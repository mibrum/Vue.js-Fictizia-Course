<template>
  <div>
    <img class="image" :src="`${wizard.image}`" alt />
    <h3>{{wizard.name}}</h3>
    <p>{{wizard.price}} Galeons</p>
    <p>{{ statusChange }}</p>
    <button style="margin-right: 10px;" @click="changeWizardStatus(index)">Change status</button>
    <button @click="removeWizard(index)">Wizard is dead</button>
  </div>
</template>

<script>
export default {
  name: "WizardCard",
  props: {
    wizard: {
      required: true,
      type: Object
    },
    index: {
      required: true,
      type: Number
    }
  },
  computed: {
      statusChange({ wizard }){
          return wizard.status ? "Wanted" : "Captured"
      }
  },
  methods: {
    removeWizard(id) {
      this.$emit("remove-wizard", id);
    },
    changeWizardStatus(id){
        this.$emit("change-wizard-status", id)
    }
  }
};
</script>

<style>
.image {
  width: 350px;
  height: 500px;
  margin-top: 50px;
}
</style>