<template>
<h1 v-if="products">
{{products.name}}</h1>

</template>

<script>
export default {
computed: {
    products() {
        return this.$store.state.products
    }
},
mounted() {
    this.$store.dispatch("getProducts");
  }
}
</script>

<style>

</style>