<template>

<div
    class="col-md-6 col-lg-4 col-sm-10"
    v-for="item in AboutArray"
    :key="item.id"
  >
    <section class="card-content">
      <div class="card-content">
        <div class="card">
          <div class="layer"></div>
          <div class="content">
            <div class="image">
              <img :src="item.icon" alt="avatar" />
            </div>
            <br />
            <div class="details ">
              <span>{{ item.title }}</span>
              <div class="col-12">
             <span>
               {{item.text}}
                </span> </div>
                <div class="btn-flex">
                  
<button type="button" class="btn btn-grad">View</button>
                </div>
                
                 
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script scoped>
export default {
  data() {
    return {
      AboutArray: [
        {
          id: 1,
          icon: "https://i.postimg.cc/2yhkBhXq/Chain-Earrings-w-Skull-Posts-and-Dagger-Drops.jpg",
          title: "Gothic Dagger Earing",
          text: "Price: R399.99",
         
        },
        
      ],
    };
  },
};
</script>

<style scoped>
.image {
  width: fit-content;
  border-radius:5px;
  height: fit-content;
  display: flex;
  justify-content: center;
}
.details{
  color: #e74c3c;
}
article{
    overflow-x: hidden;
}
.btn-flex{
  display: flex;
  justify-content: center;
}
.btn-grad {
  background-image: linear-gradient(
    to right,
    #eb3349 0%,
    #f45c43 51%,
    #eb3349 100%
  );

 
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
.card-content {
  /* margin: 200px auto 100px; */
   padding-top:20px; 
}

.card-content .card {

  position: relative;
  margin: 0 auto;
  width: 250px;
  background: white;
  color: black;
  /* padding: 20px; */
  box-sizing: border-box;
  
  text-align: center;
  
  overflow: hidden;

}

.card-content .card .content .image {
  width: 100%;
  height: 180px;
  /* object-position: -30px 0; */
  /* margin: 0 auto; */

  overflow: hidden;

  box-shadow: 0 10px 20px rgba(206, 31, 246, 0.2);
  object-fit: cover;
}
.card-content .card .content .details h2 {
  font-size: 18px;
}
.card-content .card .content .details span {
  color: black;
  font-size: 14px;
  transition: 0.5s;
}



@media all and (max-width: 1250px) {
    .card{
    width: 15em !important;
    }


}
</style>
