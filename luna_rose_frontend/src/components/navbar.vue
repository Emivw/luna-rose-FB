<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <a  href="#">
        <img class="img image-fluid" src="https://i.postimg.cc/rm1yWbNT/logo-img.png" alt="logo"  ></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-md-auto">
          <li class="nav-item rounded">
            <a class="navbar-brand" href="#"
              ><i class="bi bi-house-fill me-2"></i
              ><router-link to="/">Home</router-link></a
            >
          </li>
          <li class="nav-item rounded">
            <a class="navbar-brand" href="#"
              ><i class="bi bi-people-fill me-2"></i
              ><router-link to="/about">About</router-link></a
            >
          </li>
          <li class="nav-item rounded">
            <a class="navbar-brand" href="#"
              ><i class="bi bi-cart-fill me-2"></i
              ><router-link to="/products">Products</router-link></a
            >
          </li>
          <li class="nav-item rounded">
            <a class="navbar-brand" href="#"
              ><i class="bi bi-telephone-fill me-2"></i
              ><router-link to="/contact">Contact</router-link></a
            >
          </li>
          
          <li class="nav-item dropdown rounded">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              ><i class="bi bi-person-fill me-2"></i
            ></a>
            <ul
              v-if="!users"
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            ><router-link to="/login">
              <li>
                <a class="dropdown-item" href="#"
                  >Login</a
                >
              </li>
              </router-link>
              <router-link to="/register">
              <li>
                <a class="dropdown-item" href="#"
                  >Register</a
                >
              </li>
                </router-link>
                   <router-link to="/admin/:id">
              <li>
                <a class="dropdown-item" href="#"
                  >Admin</a
                >
              </li>
                </router-link>
            </ul>

            <ul
              v-if="isLoggedIn"
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <router-link to="/admin">
              <li>
                <a class="dropdown-item" href="#"
                  >Admin</a
                >
              </li>
                </router-link>
              <router-link to="/">
              <li>
                <a class="dropdown-item" href="#"
                   @click="logout">logout</a
                >
              </li>
                </router-link>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
// export default {
//   computed: {
//     users() {
//       return this.$store.state.users;
//     },
//   },
//   methods: {
//     logout() {
//         window.location.reload();
//     //   return this.$store.state.user = null;
//     },
//   },
// };
</script>

<style scoped>
.navbar-expand-lg .navbar-collapse {
    align-self: flex-start;
    justify-content: flex-end !important;
}
nav[data-v-688b5e20] {
    padding: 0px;
}
.img{
  width: 120px !important;
  height: 140px;
  aspect-ratio: 1;

}

nav {
  padding: 30px;
}
/* body {

} */

nav a {
  font-weight: bold;
  color:  #f8d4c0;
}

nav a.router-link-exact-active {
  color: #a70000;
}
.bi{
  color: #dd4e4f;
}

</style>