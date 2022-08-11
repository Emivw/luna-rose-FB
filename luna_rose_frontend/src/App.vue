<template>
<Navbar/>

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
