<template>
  <div>
    <div style="margin-top: 15px;" v-if="exists">No wizards found for this search.</div>
    <div v-for="(wizard, index) in filteredList" :key="index">
      <WizardCard
        :wizard="wizard"
        :index="index"
        @remove-wizard="removeWizard"
        @change-wizard-status="changeWizardStatus"
      />
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
      }
    ]
  }),
  props: {
    search: {
      required: false,
      type: String
    }
  },
  methods: {
    removeWizard(value) {
      this.filteredList.splice(this.filteredList[value], 1);
    },
    changeWizardStatus(value) {
      this.filteredList[value].status = !this.filteredList[value].status;
    }
  },
  computed: {
    filteredList() {
      if (this.search) {
        const list = this.wizardList.filter(wizard =>
          wizard.name.includes(this.search)
        );
        return list;
      } else return this.wizardList;
    },
    exists() {
      return this.filteredList.length === 0;
    }
  }
};
</script>

<style>
</style>