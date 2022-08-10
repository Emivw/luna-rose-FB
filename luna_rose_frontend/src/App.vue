<template>
<Navbar/>
<!-- 
    <nav>
    <router-link to="/">home</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/admin">Admin</router-link>
  </nav> -->
  <router-view/>
<footer>
    <Footer />
  </footer>

</template>

<script>
import Navbar from "@/components/navbar.vue";
import footer from "@/components/footer.vue";
export default {
  components: {Navbar, footer}
}
</script>
<style>
*{
  font-family: New Century Schoolbook, TeX Gyre Schola, serif;
  font-size: 21px;
}



</style>
