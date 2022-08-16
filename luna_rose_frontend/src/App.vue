<template>
<Navbar/>
<CartSidebar/>
  <router-view/>
  <Footer/>

</template>

<script>
import Navbar from "@/components/navbar.vue";
import Footer from "@/components/footer.vue";
import CartSidebar from "./components/cartSidebar.vue";
// import productCard from "@/components/productCard.vue";
export default {
  components: { Navbar, Footer //productCard}
    , CartSidebar }}
</script>
<style>
*{
  font-family: New Century Schoolbook, TeX Gyre Schola, serif;
  font-size: 21px;
}



</style>
