import { createStore } from 'vuex'
import router from '../router/index'
import createPersistedState from "vuex-persistedstate";
export default createStore({
  state: {
    user:null,
    users: null,
    token: null,
    product: null,
    products: null,
  },
  mutations: {
    setCart: (state, cart) => {
      state.cart = cart;
    },
    setUser: (state, user) => {
      state.user = user;
     
    },
    setUsers: (state, users) => {
      state.users = users;
      
    },
    setToken: (state, token) => {
      state.token = token;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    setProducts: (state, products) => {
      state.products = products;
    },
    
  },
  actions: {
    login: async (context, payload) => {
      let res = await fetch("https://zachary-williams.herokuapp.com/users/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body:   
        JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      });

      let data = await res.json()
      console.log(data)

      if(data.token){
        context.commit('setToken', data.token)

        // Verify token
        // 
        fetch('https://zachary-williams.herokuapp.com/users/users/verify', {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": data.token
          }
        }).then((res) => res.json()).then((data) => {
          console.log(data.user);
          context.commit('setUser', data.user)
          // router.push('/products', alert("Successfully Logged In:"))
        })
      } 
      else {
        alert(data)
      }
    },
    register: async (context, payload) => {
      fetch("https://zachary-williams.herokuapp.com/users/register", {
        method: 'POST',
        body: JSON.stringify({
            full_name: payload.full_name,
            email: payload.email,
            password: payload.password,
            user_type: "Admin"
        }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
      router.push('/', alert("successfully registered"))

        },
            
    getUsers: async (context) => {
      fetch("https://zachary-williams.herokuapp.com/users")
        .then((response) => response.json())
        .then((json) => context.commit("setUsers", json));
    },
    getUser: async (context, id) => {
      fetch("https://zachary-williams.herokuapp.com/users/" +id)
        .then((response) => response.json())
        .then((user) => context.commit("setUser", user[0]));
    },
    getProducts: async (context) => {
      fetch("https://zachary-williams.herokuapp.com/products")
        .then((response) => response.json())
        .then((json) => context.commit("setProducts", json));
        // console.log(products)
    },
    getProduct: async (context, id) => {
      fetch("https://zachary-williams.herokuapp.com/products/" +id)
        .then((response) => response.json())
        .then((product) => context.commit("setProduct", product[0]));
    },
    addProduct: async (context, payload) => {
      fetch("https://zachary-williams.herokuapp.com/products/", {
        method: 'POST',
        body: JSON.stringify({
            name: payload.name,
            descriptions: payload.descriptions,
            image: payload.image,
            category: payload.category,
            created_date: payload.created_date
        }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
      router.push("/", alert("Successfully added new task"))
      

        },

  },

  plugins: [createPersistedState()]
})


