<template>
<div id="app">
    <div class="col-md-12 pt-5">
      <div class="site-heading text-center">
        <h2>Browse <span>Our Wares</span></h2>
        <h4></h4>
      </div>
    </div>
    <div class="container">

<div v-if="products" class="row my-5">
    <ProductCard 
    v-for="product in products" 
    :key="product" 
    :product="product"/>
    <!-- <ul>
    <li v-for="product in products" 
    :key="product.id" 
    :product="product">
    {{product.title}}
    </li>
    </ul> -->
</div>
<div v-else>Loading....</div>
    </div>
</div>
</template>

<script>
import ProductCard from "../components/productCard.vue";
export default {
  name: 'products',
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  components: {ProductCard}
};
</script>

<style scoped>
</style>
