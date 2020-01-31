 <template>
  <div>
    <img src="@/assets/azkaban-logo.jpg" alt />
    <h1>Have you seen this Wizard?</h1>
    <input type="text" v-model="text">
  </div>
</template>
 
 <script>
export default {
    name: "WizardHeader",
    data(){
        return{
            text: ""
        }
    },
    watch: {
        text(value){
            this.$emit('search-text', value)
        }
    }
};
</script>
 
 <style>
</style>