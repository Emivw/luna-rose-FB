<template>
  <div id="main" class="overlay">
    <div class="margi py-5">
      <div class="container-fluid marge">
        <div class="container-fluid">
          <div class="container-fluid" id="home">
            <div class="header">
              <h1></h1>
              <p>Meet The Team</p>
            </div>
          </div>
  
          <div class="row row-cols-12 row-cols-xs-12 row-cols-sm-12 row-cols-md-5 row-cols-lg-5">
    <div class="col-sm-12 col-md-12 col-xl-12 pb-5 pt-5">
      <div class="card h-100 card shadow">
        <div class="text-center">
             <h3 class="display-3">Royal Luna Rose Company</h3>
<h2>Fine Jewllers Since 2022</h2>
        <h2>Since 2022, we’ve provided our customers with gifting solutions to celebrate important milestones in their lives. we assure trust and quality at the best value.</h2>
        </div>
        
      </div>
    </div>
  
            <div class="col-sm-12 col-md-6 col-xl-6">
              <div class="card h-100 card shadow">
                <div class="text-center">
                  <div class="img-hover-zoom img-hover-zoom--colorize">
                    <img
                      class="shadow"
                      src="https://i.postimg.cc/xdH23dvZ/Super-3-1.jpg"
                      alt="Another Image zoom-on-hover effect"
                    />
                  </div>
                </div>

                <div class="card-body">
                  <div class="clearfix mb-3"></div>

                  <div class="my-2 text-white text-center h-80 w-80">
                    <h1>Taucia Jackson</h1>
                  </div>
                  <div class="mb-3">
                    <h2 class="text-uppercase text-white text-center role">
                      Frontend developer
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-xl-6">
              <div class="card h-100 card shadow">
                <div class="text-center">
                  <div class="img-hover-zoom img-hover-zoom--colorize">
                    <img
                      class="shadow"
                      src="https://i.postimg.cc/HkvB7Gbk/Emile.jpg"
                      alt="Another Image zoom-on-hover effect"
                    />
                  </div>
                </div>

                <div class="card-body">
                  <div class="clearfix mb-3"></div>

                  <div class="my-2 text-white text-center">
                    <h1>Emile van Wyk</h1>
                  </div>
                  <div class="mb-3">
                    <h2 class="text-uppercase text-white text-center role">
                      BackEnd Developer
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#logo {
  width: 200px;
}

.header {
  padding: 10px;
  text-align: center;
  background: #e74c3c;
  color: white;

  font-weight: bold;
  font-size: xx-large;

  font-family: "Josefin Sans", sans-serif;
}
.margi{
    background-color: none;
}
#main {
  background-image: linear-gradient(
    to right,
    #f5a08a 0%,
    #dd4e4f 51%,
    #f5a08a 100%
  );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  color: white;
}

.marg {
  margin-bottom: 10rem;
}
.marge {
  margin-bottom: 12rem;
}

.text-aqua {
  color: #f5a08a;
}
.h1,
h1 {
  font-size: 1.5rem;
}
.container-fluid {
  max-width: 1400px;
}
.card {
  background: transparent;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  border: 1;
  border-radius: 15px;
}
.img-hover-zoom--colorize img {
  border-radius: 10%;
  width: 150px;
  height: auto;
  margin-top: 20px;
  padding: 1px;
  transition: transform 0.5s;
  filter: grayscale(100%);
}
.img-hover-zoom--colorize:hover img {
  filter: grayscale(0);
  transform: scale(1.05);
}
.card h5 {
  overflow: hidden;
  height: 80px;
  font-weight: 300;
  font-size: 1rem;
}
.card h5 a {
  color: black;
  text-decoration: none;
}
.role {
  color: #7a7a7a;
}
.box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.fab {
  font-size: 1.5rem;
  color: black;
  transition: transform 0.5s;
}
.fab:hover {
  color: black;
  transform: scale(1.1);
}
.card h2 {
  font-size: 1rem;
}
/* MEDIA */
@media only screen and (min-width: 1200px) {
  .img-hover-zoom--colorize img {
    width: 200px;
  }
}
@media only screen and (min-width: 1200px) {
  .h1,
  h1 {
    font-size: 2rem;
  }
}
/* for headers */
section {
  padding: 60px 0;
  min-height: 100vh;
}
a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  outline: none;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.bg-gray {
  background-color: #f9f9f9;
}
.site-heading h2 {
  display: block;
  font-weight: 700;
  margin-bottom: 10px;
  text-transform: uppercase;
}
.site-heading h2 span {
  color: #a00000;
}
.site-heading h4 {
  display: inline-block;
  padding-bottom: 20px;
  position: relative;
  text-transform: capitalize;
  z-index: 1;
}
.site-heading h4::before {
  background: #a00000 none repeat scroll 0 0;
  bottom: 0;
  content: "";
  height: 2px;
  left: 50%;
  margin-left: -25px;
  position: absolute;
  width: 50px;
}
</style>
