    <template>

    <div class="container">
      <form @submit.prevent="register">
        <h3>Register</h3>
            <input class="form-input" type="text" name="full_name" required v-model="full_name" placeholder="Full Name"/>
            <input class="form-input" type="text" name="email" required v-model="email" placeholder="Email:"/>
            <input class="form-input" type="text" name="password" required v-model="password" placeholder="Password:"/>
            <input class="user-type" type="text" name="user_type" required v-model="user_type" placeholder="User Type:" readonly/>
            <input class="form-btn" type="submit" value="Register" />
            <hr>
            <div class="form-extra">
              <router-link to="/"><p>Already have an Account</p></router-link>
            </div>
      </form>
  
      <!-- <div v-if="user">
        Welcome {{ user.full_name }}, Your sign up was successsul
      </div> -->
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
        full_name: "",
        email: "",
        password: "",
        user_type: "user",
      };
    },
    methods: {
      register() {
        this.$store.dispatch("register", {
          full_name: this.full_name,
          email: this.email,
          password: this.password,
          user_type: this.user_type
        });
      },
    },
  };
  </script>
  <style scoped>
  .container{
    height: 86vh;
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
    width: 500px;
    height: 650px;
    gap: 20px;
    color: white;
  }
  .form-input{
    width: 70%;
    border: 1px solid lightgray;
    border-radius: 5px;
    height: 50px;
  }
  .form-btn{
    width: 70%;
    border: none;
    border-radius: 5px;
    height: 50px;
  }
  .form-extra{
    display: flex;
    gap: 10px;
  }
  .form-extra p {
    width: 200px;
    border: none;
    border-radius: 5px;
    height: 25px;
    background: white;
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
  hr{
    width: 90%;
    
  }
  .user-type{
    display: none;
  }
  </style>