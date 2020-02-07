 <template>
  <div>
    <h4>Please, log in with your personal credentials:</h4>
    <label>User</label>
    <input type="text" v-model="user" />
    <label>Password</label>
    <input type="password" v-model="password" />
    <br />
    <button @click="saveLogin">Log in</button>
  </div>
</template>
 
 <script>
export default {
  name: "Log in",
  data() {
    return {
      user: "",
      password: ""
    };
  },
  methods: {
    saveLogin() {
      if (this.user && this.password) {
        localStorage.setItem(
          "login",
          JSON.stringify({
            user: this.user,
            password: this.password
          })
        );
        this.$router.push("/");
      }
    }
  }
};
</script>
 
 <style>
</style>