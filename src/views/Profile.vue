<template>
  
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

<style>

</style>