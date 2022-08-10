<template>
<div class="col-sm-3 my-5 px-5">
        <div class="card h-100 shadow-sm" > 
          <a href="#">
            <img
              :src="product.img"
              class="card-img-top"
              alt="product.title"
            />
          </a>

          <div class="label-top shadow-sm">
            <h5 class="card-title font-weight-bold">{{ product.title }}</h5>
          </div>
          <div class="card-body">
            <div class="clearfix mb-3">
              <span class="float-start badge rounded-pill bg-success"
                >${{ product.price }}</span
              >
            </div>
<div>
              <span class=""
                ><a href="#" class="small text-muted text-uppercase aff-link btn"
                  >used by {{product.used_by}}</a
                ></span
              >

</div>
            <!-- <h5 class="card-title">
              <a target="_blank" href="#"
                >{{ product.desc }}</a
              >
            </h5> -->
            <div>
            <h5 class="card-title">
              <a target="_blank" href="#">
                {{product.category}}
              </a>
            </h5>

            </div>

            <div class="d-grid gap-2 my-4">
                <router-link :to="{name: 'product', params: {id: product.id}}">
              <a href="#" class="btn button">view product
                </a>
                </router-link>
            </div>
            <div class="clearfix mb-1">
              <span class="float-start"
                ><a href="#"><i class="fas fa-question-circle"></i></a
              ></span>

              <span class="float-end">
                <i class="far fa-heart" style="cursor: pointer"></i>
              </span>
            </div>
          </div>
        </div>

</div>
   
</template>

<script>
export default {
props: ["product"]
};
</script>

<style scoped>
/* @import url("../assets/main.css"); */
.card-img-top{
    height: 200px;
    object-fit: cover;
}
 .button {
  background-color: #000000;
  color: rgb(255, 255, 255) ;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  padding: 0.5rem 2rem;
  margin: 0.5rem 0rem;
  border-radius: 10px;
}
.button:hover {
  background-color: #FFFFFF;
  color: rgb(0, 0, 0);
}
</style>