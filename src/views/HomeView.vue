<template>
  <div class="container">
    <form @submit.prevent="login" v-if="!user">
      <h3>Log in:</h3>
      <input class="form-input" type="text" name="email" required v-model="email" placeholder="Email:"/>
      <input class="form-input" type="password" name="password" required v-model="password" placeholder="Password:"/>
      <input class="form-btn" type="submit" value="Login" />
    </form>
    <div v-else>
      <h1>Welcome {{user.full_name}}</h1>
    </div>
  </div>
</template>
<script>
  import Card from "../components/Card.vue";
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
    products() {
      return this.$store.state.products;
    }
  },
 
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    }
  },
  components: { Card },
  mounted() {
    this.$store.dispatch("getProducts");
    // this.$store.dispatch("getUser");
  }
};
</script>
<style scoped>
.container{
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
 
}
.list{
  border: 1px solid black;
  height: 80vh;
  width: 98vw;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
}
.display{
  border: 1px solid black;
  width: 98%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.add{
  border: 1px solid black;
  width: 99%;
}
form{
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 250px;
  height: 200px;
}
.form-input{
width: 80%;
height: 2rem;
}
.form-btn{
width: 80%;
height: 2rem;
}

@media (min-width: 300px) and (max-width: 400px) {
  .container{
    height: 80vh;
  }
  .form-input{
    width: 170px;
    height: 30px;
  }
  .form-btn{
    width: 170px;
     height: 30px;
  }
  .form-extra{
    display: flex;
    flex-direction: column;
  }
  form{
    width: 400px;
  }
  h3{
    display: none;
  }
}
@media (min-width: 200px) and (max-width: 300px) {
  .form-input{
    width: 140px;
  }
  .form-btn{
    width: 140px;
  }
  .form-extra{
    display: flex;
    flex-direction: column;
  }
  form{
    width: 350px;
  }
}
</style>