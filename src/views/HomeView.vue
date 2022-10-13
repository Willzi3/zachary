<template>
  <div class="container">
    <div class="home">
      <div class="options">
      <router-link class="opt" to="/purchase">Buy</router-link>
      <div class="opt">RENT</div>
      <div class="opt">SELL</div>
    </div>
  <div class="searchBar">
    <input  type="text" name="search" id="search" placeholder="Enter Information Here">
    <button><i class="fa-solid fa-magnifying-glass"></i></button>
  </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
a{
  text-decoration: none;
}
.container{
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 100vw;
}
.options{
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  gap: 5px;
}
.opt{
  border: 1px solid lightgrey;
  border-radius: 6px;
  background: white;
  height: 2.2rem;
  width: 6rem;
  margin-bottom: -10px;

}
/* .opt a{
  color: black;
} */
.opt:hover{
  background: black;
  color: white;
  cursor: pointer;
}
/* Search Bar */
.searchBar{
  display: flex;
  width: 30rem;
}
.searchBar input{
  width: 90%;
  height: 3rem;
}
.searchBar button{
  border: none;
  background: black;
}
.searchBar button i{
  color: white;
font-size: 2.5rem;
padding: 2px;
}
</style>