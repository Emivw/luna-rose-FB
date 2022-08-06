<template>
<!-- <Navbar/> -->
    <nav>
    <router-link to="/">home</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/admin">Admin</router-link>
  </nav>
  <router-view/>
</template>

<script>
import Navbar from "@/components/navbar.vue";
export default {
  components: Navbar
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
