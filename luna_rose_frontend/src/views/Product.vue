<template>

   

 <div class="container">
      <div class="row">
    <router-link to="/products"><button class=" btn btn-grad">Go Back</button></router-link>
        <div v-if="product" id="item">
         
            <img :src="product[0].imgurl" alt="avatar" />
            <div class="information-area">
              <div id="details" class="info-top">
                <h1>{{product[0].title}}</h1>
                <p>{{product[0].description}}</p>
                <p>${{product[0].price}}</p>
              </div>
              <div class="btn btn-grad">
                <a class="text-white" @click="addProductToCart">Add To Cart</a>
              </div>
            </div>
          
        </div>
        <div v-else>Loading....</div>
      </div>
    </div>



 
</template>

<script>
export default {
  name: 'product',
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.$route.params.id);
  }
};
</script>

<style scoped>
a{text-decoration: none;}

#main {
  background-image: linear-gradient(
    to right,
    #eb3349 0%,
    #f45c43 51%,
    #eb3349 100%
  );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  color: white;
}

#item {
  padding: 50px;
}

.price {
  color: black;
  font-size: 22px;
}

.btn-grad {
  background-image: linear-gradient(
    to right,
    #eb3349 0%,
    #f45c43 51%,
    #eb3349 100%
  );

  font-size: 10px !important;
 
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  display: flex;
  justify-content: center;
  padding: none !important;
}
.btn {
    display: inline-block;
    font-weight: 400;
    font-size: 10px !important;
    line-height: 1.5;
    color: #f8d4c0;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    /* padding: 0.375rem 0.75rem; */
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;}
</style>







