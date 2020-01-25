<template>
  <div>
      <img src="@/assets/azkaban-logo.jpg" alt="">
      <h1>Have you seen this Wizard?</h1>
      <div v-for="(wizard, index) in wizardList" :key="index">
          <WizardCard :wizard="wizard" :index="index" @remove-wizard="removeWizard" @change-wizard-status="changeWizardStatus"/>
      </div>
  </div>
</template>

<script>
import WizardCard from "./WizardCard";
export default {
    name: "WizardList",
    components: {
        WizardCard
    },
    data: () => ({
        wizardList: [
           {
            name: "Sirius Black",
            price: 20000,
            image: require("../assets/wizard-sirius-black.jpg"),
            status: true
           },
           {
            name: "Bellatrix Lestrange",
            price: 500000,
            image: require("../assets/wizard-bellatrix-lestrange.png"),
            status: true
           },
           {
            name: "Lucius Malfoy",
            price: 150000,
            image: require("../assets/wizard-lucius-malfoy.jpg"),
            status: true
           },
        ],
    }),
    methods: {
        removeWizard(value){
            this.wizardList.splice(this.wizardList[value], 1);
        },
        changeWizardStatus(value){
            this.wizardList[value].status = !this.wizardList[value].status
        }
    }
}
</script>

<style>
</style>