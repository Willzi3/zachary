<template>
   <div class="container">
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
</template>

<script>
export default {
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
    addProduct() {
        this.$store.dispatch("addProduct", {
        name: this.name,
        descriptions: this.descriptions,
        image: this.image,
        category: this.category,
        created_date: this.created_date
        });
      }
  }
}
</script>

<style scoped>
    .container{
        height: 100vh;
        width: 100vw;
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


</style>