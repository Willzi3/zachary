<template>
    <!-- <router-link class="product_box" :to="{ name: 'ProductDetails', params: { id: product.product_id } }"> -->
      <div class="card">
        <p class="product_title">{{ product.image }}</p>
        <!-- <p class="product_title">R{{ product.price }}.00</p> -->
      </div>
    <!-- </router-link> -->
  </template>
  <script>
  export default {
    props: ["product"],
  };
  </script>
  <style scoped>
  .card{
    border: 1px solid black;
      border-radius: 6px;
      width: 300px;
      height: 20px;
  }
  .product_img{
      height: 200px;
      width: 200px;
  }
  .product_price{
    margin: none;
  }
  </style>