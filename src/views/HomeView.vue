<template>
  <div class="container">
    <form @submit.prevent="login" v-if="!user">
      <h3>Log in:</h3>
      <input class="form-input" type="text" name="email" required v-model="email" placeholder="Email:"/>
      <input class="form-input" type="password" name="password" required v-model="password" placeholder="Password:"/>
      <input class="form-btn" type="submit" value="Login" />
    </form>
    <div class="Home" v-else>
      
      <!-- <div class="user">
      <router-link to="/profile">
      <div class="user-icon"><i class="fa-solid fa-user"></i></div>
      <div class="user_name">{{ user.full_name}}</div>
    </router-link>
    </div> -->
     <div class="box-container">
      <div class="box">
      
    </div>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Add
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
 <div class="modal-dialog">
   <div class="modal-content">
     <div class="modal-body">
      <form @submit.prevent="addProduct">
            <input class="form-input" type="text" name="name" required v-model="name" placeholder="Name"/>
            <input class="form-input" type="text" name="descriptions" required v-model="descriptions" placeholder="Description:"/>
            <input class="form-input" type="text" name="image" required v-model="image"  placeholder="Image:" />
            <input class="form-input" type="text" name="category" required v-model="category" placeholder="Category"/>
            <input class="form-input" type="date" name="created_date" required v-model="created_date" placeholder="Created Date:"/>
            <input class="form-btn" type="submit" value="Add" />
      </form>
     </div>
     <div class="modal-footer">
       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       
     </div>
   </div>
 </div>
</div>
     </div>
     <hr/>
     <div v-if="products" class="output">
      <img class="img" :src="products.image" />
     </div>
    </div>
  </div>
</template>
<script>
  import Card from "../components/Card.vue";
export default {
  data() {
      return {
        name: "",
        descriptions: "",
        image: "",
        category: "",
        created_date: "",

      };
    },
  computed: {
    user() {
      return this.$store.state.user;
    },
    product() {
      return this.$store.state.product;
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
    },
       addProduct() {
        this.$store.dispatch("addProduct", {
        name: this.name,
        descriptions: this.descriptions,
        image: this.image,
        category: this.category,
        created_date: this.created_date,
  
        });
      },
    },
  components: { Card },
 
};
</script>
<style scoped>
  a{
    border: 1px solid black;
    display: flex;
    gap: 5px;
    text-decoration: none;
  }
  .btn{
    width: 200px;
  }
   .box{
        width: 200px;
        height: 200px;
        border: 1px solid black;
        border-radius: 5px;
        
    }
    .box-container{
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: center;
      padding: 10px;
      gap: 10px;
    }
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
  padding: 10px;
  width: 250px;
  height: 350px;
}
.form-input{
width: 80%;
height: 2rem;
}
.form-btn{
width: 80%;
height: 2rem;
}
.Home{
  border: 1px solid black;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
}
img{
  border: 1px solid black;
  width: 20px;
  height: 20px;
}
.user{
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
  margin-right: 10px;
}
.user-icon{
  border: 1px solid black;
  border-radius: 50%;
  width: 50px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.user_name{
  border: 1px solid black;
  width: 130px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.user_name:hover{
  background: black;
  color: white;
  cursor: pointer;
}
.modal-body{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.output{
  border: 1px solid black;
  width: 90%;
  height: 400px;
  margin-bottom: 60px;
  
}

</style>