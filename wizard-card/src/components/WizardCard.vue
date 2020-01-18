<template>
  <div class="flex-container">
    <div>
        <img src="../assets/hogwards-icon.jpg" style="max-width: 10%;">
    </div>
    <div>
        <form>
      <p>
        Name:
        <input type="text" name="name" v-model="name"/>
      </p>
      <p>
        Alias:
        <input type="text" name="alias" v-model="alias"/>
      </p>
      <p>
        Role:
        <input type="text" name="role" v-model="role"/>
      </p>
      <p>
        Hause:
        <input type="text" name="house" v-model="house"/>
      </p>
      <p>
        School:
        <input type="text" name="school" v-model="school"/>
      </p>
      <p>
        Wand:
        <input type="text" name="wand" v-model="wand"/>
      </p>
    </form>
    </div>
    <div>
        <h2>Wizard Card</h2>
        <p>
            Name: {{name}}
        </p>
        <p>
            Alias: {{alias}}
        </p>
        <p>
            Role: {{role}}
        </p>
        <p>
            House: {{house}}
        </p>
        <p>
            School: {{school}}
        </p>
        <p>
            Wand: {{wand}}
        </p>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            name: "",
            alias: "",
            role: "",
            house: "",
            school: "",
            wand: ""
        }
    },

};
</script>

<style>
.flex-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>