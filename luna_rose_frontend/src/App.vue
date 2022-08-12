<template>
<Navbar/>

  <router-view/>
<footer/>

</template>

<script>
import Navbar from "@/components/navbar.vue";
import footer from "@/components/footer.vue";
// import productCard from "@/components/productCard.vue";
export default {
  components: {Navbar, footer //productCard}
  }}
</script>
<style>
*{
  font-family: New Century Schoolbook, TeX Gyre Schola, serif;
  font-size: 21px;
}



</style>
