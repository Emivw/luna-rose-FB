<template>
  <div class="footer-section">
    <div class="container-fluid">
      <div class="footer-cta pt-5 pb-5">
        <div class="row">
          <div class="col-xs-12 col-md-4 mb-30">
            <div class="single-cta">
              <i class="fas fa-map-marker-alt"></i>
              <div class="cta-text">
                <h4>Find us</h4>
                <span>Shop O/3C high Street Shopping Village Durban Road , Bellvile Cape Town 7530</span>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-4 mb-30">
            <div class="single-cta">
              <i class="fas fa-phone"></i>
              <div class="cta-text">
                <h4>Call us</h4>
                <span>021-687-5321<br />
                    021-687-5322</span>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-4 mb-30">
            <div class="single-cta">
              <i class="far fa-envelope-open"></i>
              <div class="cta-text">
                <h4>Mail us</h4>
                <span>nfo@RoyalLunaRoseCompany.co.za</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-content pt-5 pb-5">
        <div class="row">
          <div class="col-xs-12 col-lg-4 mb-50">
            <div class="footer-widget">
              <div class="footer-logo">
                <a href="/"
                  ><img
                    src="https://i.postimg.cc/rm1yWbNT/logo-img.png"
                    class="img-fluid"
                    alt="logo"
                /></a>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-lg-4 col-md-6 mb-30">
            <div class="footer-widget">
              <div class="footer-widget-heading">
                <h3>Useful Links</h3>
              </div>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/about">Our Services</a></li>
                <li><a href="/about">Meet the Team</a></li>
                <li><a href="/contact">Contact us</a></li>
              </ul>
            </div>
          </div>
          <div class="col-xs-12 col-lg-4 col-md-6 mb-50">
            <div class="footer-social-icon">
              <span>Follow us</span>
              <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
              <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
              <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
            </div>
            <div class="footer-widget">
              <div class="footer-text">
                
              </div>
              <div class="copyright-text">
                <p>
                  Copyright &copy; 2022, All Right Reserved
                 
                </p>
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
ul {
  margin: 0px;
  padding: 0px;
}
.footer-section {
  background: transparent;
  position: relative;
}
.footer-cta {
  border-bottom: 1px solid #DD5E89;
}

.single-cta i {
  
  color:  #f8d4c0;
  font-size: 30px;
  float: left;
  margin-top: 8px;
}
.cta-text {
  padding-left: 15px;
  display: inline-block;
}
.cta-text h4 {
  color: #eb3349;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 2px;
}
.cta-text span {
  color: #eb3349;
  font-size: 15px;
}
.footer-content {
  position: relative;
  z-index: 2;
}
.footer-pattern img {
  position: absolute;
  top: 0;
  left: 0;
  height: 330px;
  background-size: cover;
  background-position: 100% 100%;
}
.footer-logo {
  margin-bottom: 30px;
}
.footer-logo img {
  max-width: 200px;
}
.footer-text p {
  margin-bottom: 14px;
  font-size: 14px;
  color: #eb3349;
  line-height: 28px;
}
.footer-social-icon span {
  color: #eb3349;
  display: block;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
}
.footer-social-icon a {
  color: #eb3349;
  font-size: 16px;
  margin-right: 15px;
}
.footer-social-icon i {
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 38px;
  border-radius: 50%;
}
.facebook-bg {
  background: white;
  color: #eb3349;
}
.twitter-bg {
  background: white;
  color: #eb3349;
}
.google-bg {
  background: white;
  color: #eb3349;
}
.footer-widget-heading h3 {
  color: #eb3349;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
  position: relative;
}
.footer-widget-heading h3::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -15px;
  height: 2px;
  width: 50px;
  background: #eb3349;
}
.footer-widget ul li {
  display: inline-block;
  /* float: left; */
  width: 50%;
  margin-bottom: 12px;
}
.footer-widget ul li a:hover {
  color: #eb3349;
}
.footer-widget ul li a {
  color: #eb3349;
  text-transform: capitalize;
}
.subscribe-form {
  position: relative;
  overflow: hidden;
}
.subscribe-form input {
  width: 100%;
  padding: 14px 28px;
  background: white;
  border: 1px solid #eb3349;
  color: #eb3349;
}
.subscribe-form button {
  position: absolute;
  right: 0;
  background: #eb3349;
  padding: 13px 20px;
  border: 1px solid #eb3349;
  top: 0;
}
.subscribe-form button i {
  color: #eb3349;
  font-size: 22px;
  transform: rotate(-6deg);
}
.copyright-area {
  background: transparent;
  padding: 25px 0;
}
.copyright-text p {
  margin: 0;
  font-size: 14px;
  color: #eb3349;
}
.copyright-text p a {
  color: #eb3349;
}
.footer-menu li {
  display: inline-block;
  margin-left: 20px;
}
.footer-menu li:hover a {
  color: #eb3349;
}
.footer-menu li a {
  font-size: 14px;
  color: #eb3349;
}
</style>