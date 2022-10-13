<template>
  <div class="container" v-if="user">
    <div class="sidebar">
      <div class="search">
        <input type="text" name="search" placeholder="Enter Information Here!">
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      <form>
        <!--Property Type-->
        <div class="property_type">
          <select name="" id="">
            <option value="All">Property Type</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="TownHouse">TownHouse</option>
            <option value="Land">Land</option>
          </select>
        </div>
        <!-- Min Price-->
        <div class="min_price">
          <select name="" id="">
            <option value="All">Min Price</option>
            <option value="100 000">R100 000</option>
            <option value="1 000 000">R1 000 000</option>
            <option value="5 000 000">R5 000 000</option>
            <option value="10 000 000">R10 000 000</option>
          </select>
        </div>
        <!-- Max Price-->
        <div class="max_price">
          <select name="" id="">
            <option value="All">Max Price</option>
            <option value="100 000">R100 000</option>
            <option value="1 000 000">R1 000 000</option>
            <option value="5 000 000">R5 000 000</option>
            <option value="10 000 000">R10 000 000</option>
          </select>
        </div>
        <!-- Bedrooms -->
        <div class="bedrooms">
          <select name="" id="">
            <option value="All">Bedroom</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
            <option value="6">6+</option>
          </select>
        </div>
        <!-- Bathrooms -->
        <div class="bathrooms">
          <select name="" id="">
            <option value="All">Bathrooms</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
            <option value="6">6+</option>
          </select>
        </div>
        <!-- Parking-Space -->
        <div class="parking_space">
          <select name="" id="">
            <option value="All">Parking Space</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="TownHouse">TownHouse</option>
            <option value="Land">Land</option>
          </select>
        </div>
      </form>
      <div class="output" v-if="products">
        {{ products.bedroom }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products
    },
    user() {
      return this.$store.state.user
    }
},
mounted() {
    this.$store.dispatch("getProducts");
    // this.$store.dispatch("getUser");
  }
}
</script>

<style scoped>
.container{
  align-items: center;
  border: 1px solid black;
  display: flex;
  gap: 10px;
  height: 100vh;
  justify-content: center;
}
form{
  align-items: center;
  display: flex;
  gap: 10px;
  justify-content: center;
}
.max_price{
  align-items: center;
  display: flex;
  gap: 10px;
  justify-content: space-between;
}
.min_price{
  align-items: center;
  display: flex;
  gap: 10px;
  justify-content: center;
}
.output{
  background: white;
  border: 1px solid black;
  height: 82%;
  margin-inline: 10px;
  z-index: 1;
}
.property_type{
  align-items: center;
  display: flex;
  gap: 10px;
  justify-content: center;
}
.search{
  align-items: center;
  display: flex;
  height: 4rem;
  justify-content: flex-end;
  padding-right: 5.5rem;
}
.search i{
  font-size: 1.6rem;
  padding: 2px;
}
.search input{
  width: 30%;
}
select{
  width: 8rem;
  height: 2rem;
}
.sidebar{
  border: 1px solid black;
  height: 80%;
  width: 90%;
}
.search input{
  width: 30%;
}
</style>