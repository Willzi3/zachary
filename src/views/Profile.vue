<template>
  <div class="container" v-if="user">
   <div class="box">

   </div>
  </div>
  <div v-else>
    <h1>Access Denied</h1>
  </div>
</template>

<script>
export default {
    computed: {
        user() {
    
    return  this.$store.state.user
}
    },
methods: {
    getData() {
        alert("function called")
    }
}
}
</script>

<style scoped>
.project{
    border: 1px solid black;
    height: 50vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
.project-input{
    border: 1px solid black;
    width: 45%;
    height: 45%;
    
}
</style>