<template>
  <div class="container">
    <form @submit.prevent="login" v-if="!user">
      <h3>Log in:</h3>
      <input class="form-input" type="text" name="email" required v-model="email" placeholder="Email:"/>
      <input class="form-input" type="text" name="password" required v-model="password" placeholder="Password:"/>
      <input class="form-btn" type="submit" value="Login" />
    </form>
    <div v-else>
      <div class="list">
        <form @submit.prevent="addProduct">
        <h3>Add Product</h3>
            <input class="form-input" type="text" name="name" required v-model="name" placeholder="Name:"/>
            <input class="form-input" type="text" name="descriptions" required v-model="descriptions" placeholder="Descriptions:"/>
            <input class="form-input" type="text" name="image" required v-model="image" placeholder="Image:"/>
            <input class="form-input" type="text" name="category" required v-model="category" placeholder="Category:"/>
            <input class="form-input" type="text" name="created_date" required v-model="created_date" placeholder="Created Date:"/>
            <input class="form-btn" type="submit" value="Add" />
      </form>
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
      name: "",
      descriptions: "",
      image: "",
      category: "",
      created_date: ""
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
    addProduct() {
        this.$store.dispatch("addProduct", {
        name: this.name,
        descriptions: this.descriptions,
        image: this.image,
        category: this.category,
        created_date: this.created_date
        });
      },
  },
};
</script>
<style scoped>
.container{
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
 
}
form{
  background: black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  gap: 20px;
  color: white;
}
.form-input{
  width: 30%;
  border: 1px solid lightgray;
  border-radius: 5px;
  height: 20px;
}
.form-btn{
  width: 30%;
  border: none;
  border-radius: 5px;
  height: 20px;
}
.form-extra{
  display: flex;
  gap: 10px;
}
.form-extra p {
  width: 170px;
  height: 30px;
  background: white;
  border-radius: 5px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-extra a{
  text-decoration: none;
  color: black;
}
h3{
  font-weight: bold;
  font-size: 1.4rem;
}
.list{
  border: 1px solid black;
  height: 80vh;
  width: 90vw;
  margin-top: 10px;
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