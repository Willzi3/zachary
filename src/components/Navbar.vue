<template>
    <div>
      <nav role="navigation" class="nav">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
         <!-- <h1 @click="logout">Logout</h1> -->
         <div class="link"><a href="#" class="active">Profile</a></div>
         <div class="link"></div>
         <div class="link"></div>
        </ul>
        <div class="social-icons">
                <div class="pro" v-if="!user">

                </div>
                <div class="pron" v-else><div class="icon"><i class="fa-solid fa-shop"></i></div>
                <div class="icon">
                  <i class="fa-solid fa-user"></i>
                </div>
                <div class="icon" @click="logout()">
                  <i class="fa-sharp fa-solid fa-arrow-right-from-bracket"></i>
                </div></div>
        </div>
      </div>
    </nav>
    </div>
    <router-view/>
  </template>
 <script>
 export default {
     computed: {
     user() {
       return this.$store.state.user
     },
     users() {
       return this.$store.state.users
     },
   },
   mounted() {
     // this.$store.dispatch("getUser");
   },
   methods: {
     logout() {
       console.log("object");
       this.$store.state.user = null;
       this.$store.state.cart = null;
       localStorage.removeItem("users");
       this.$router.push("/");
     },
     deleteuser(id) {
       return this.$store.dispatch("Deleteuser", id);
     },
   }
 }
 </script>
 
  <style>
  /* Navbar */
  .nav {
    z-index: 1000;
  }
  .text {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    float: left;
    margin-top: 20%;
  }
  #menuToggle {
    color: black;
    display: block;
    position: fixed;
    top: 50px;
    left: 50px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }
  .bck {
    text-decoration: none;
    position: sticky;
    top: 0;
    float: right;
    margin-right: 50px;
    color: white;
  }
  #menuToggle a {
    text-decoration: none;
    color: #FFFFFF;
    transition: color 0.3s ease;
  }
  #menuToggle a:hover {
    color: rgb(2, 117, 162);
  }
  #menuToggle input {
    display: block;
    width: 40px;
    margin-left: -15px;
    margin-top: -17px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */
    -webkit-touch-callout: none;
    color: black;
  }
  /*
  * Just a quick hamburger
  */
  #menuToggle span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    margin-left: -15px;
    margin-top: -17px;
    position: relative;
    background: black;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    
  }
  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }
  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
  /*
  * Transform all the slices of hamburger
  * into a crossmark.
  */
  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: black;
  }
  /*
  * But let's hide the middle one.
  */
  #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  /*
  * Ohyeah and the last one should go the other direction
  */
  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }
  /*
  * Make this absolute positioned
  * at the top left of the screen
  */
  #menu {
    position: absolute;
    width: 380px;
    height: 120vh;
    margin: -80px 0 0 -95px;
    padding: 50px;
    padding-top: 125px;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }
  #menu li {
    padding: 10px 0;
    font-size: 22px;
  }
  #menuToggle input:checked ~ ul {
    transform: none;
  }
  /* End of Navbar */
  .link{
    border: 1px solid black;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    margin-left: 1rem;
   
  }
  
  a{
    font-size: 2rem;
    display: none;
    color: white;
    text-decoration: none;
  }

 
  /* .link:hover {
    border-radius: 20%;
    width: 200px;
    transition: all 1s ease-in-out;
    z-index: 150;
  } */
  .social-icons {
    position: fixed;
    z-index: 20;
    left: 1%;
    bottom: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 5px;
    border-radius: 10px;
   
}
.icon i{
  font-size: 3rem;
}
.pron .icon{
margin-bottom: 20px;
}
  </style>