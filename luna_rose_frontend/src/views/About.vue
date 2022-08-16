<template>
  <div id="main" class="overlay">
    <div class="margi center-text">
      <div class="container-fluid marge">
        <div class="container-fluid">
          <div class="container-fluid" id="home">
            <div class="header">
              <h4>Meet The Team</h4>
              <p></p>
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
                    <h2 class="text-uppercase  text-center role">
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
                    <h2 class="text-uppercase  text-center role">
                      BackEnd Developer
                    </h2>
                  </div>
                </div>
              </div>
            </div>
             <div class="col-sm-12 col-md-12 col-xl-12 pt-5">
      <div class="card h-100 card shadow">
        <div class="text-center">
             <h3 class="display-3">About Us</h3>
<h2><ul>
  <li>
    We were created in January 2022
  </li> 
  <li>
Our company is still in the making but we do guarantee that our jewellry is the best  
  </li>
 
  <li>
    A word that modern Greeks use to describe doing something with soul, creativity, or love — putting “something of yourself” into your work.
Each Jewellery Design piece is hand crafted by Cape Town-based designer,  Using ethically sourced gemstones stones and solid metals, We create delicate, timeless pieces that draw inspiration from geometric forms, travels and an appreciation for well made objects and heirlooms.
Our jewellery pieces range from playful to effortlessly elegant, always with a subtle, sophisticated edge. Each piece is designed to age with grace and serves as an affirmation of each wearer's personal style.
Every piece of jewellery is hand made with care and given special attention to detail, embracing natural imperfections of the hand at work and staying true to the beauty of the materials used. Our team also offer bespoke design services specialising in custom designed and hand crafted commitment, engagement and wedding rings as well as gothic and rustic ,vinatge looks.
  </li>
 
  </ul> </h2>
        
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

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6{
      margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
}
.header {
  padding: 10px;
  text-align: center;
  background: #e74c3c;
  color:  white;

  font-weight: bold;
  font-size: xx-large;

  font-family: "Josefin Sans", sans-serif;
  margin:none;
}
.h4{
  margin:none;
  padding-top:10px;
}
#main {
  
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  color:  #dd4e4f ;
}

.marg {
  margin-bottom: 10rem;
}


.text-aqua {
  color: #f5a08a;
}
.h1,
h1 {
  font-size: 1.5rem;
  color:#dd4e4f;
}
h2{
  color: #dd4e4f ;
}
.container-fluid {
  max-width: 1400px;
}
.card {
  padding:10px;
 
  border: 2;
 
  color:#dd4e4f;
 border-radius: 10px;
background: linear-gradient(145deg, #e6e6e6, #ffffff);
box-shadow:  12px 12px 23px #c4c4c4,
             -12px -12px 23px #ffffff;
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
  color:#dd4e4f;
}
.card h5 a {
  color:#f5a08a;
  text-decoration: none;
}
.role {
  color:  #dd4e4f ;
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
  background-color:  #dd4e4f ;
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
