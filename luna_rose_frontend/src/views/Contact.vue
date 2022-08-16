<template>
  
 <div class="container-fluid pt-0">
    <section class="contact-page-section">
      <div class="container">
        <div class="sec-title">
          <div class="title">Contact Us</div>
          <h2>Let's Get in Touch.</h2>
        </div>
        <div class="inner-container">
          <div class="row clearfix">
            <!--Form Column-->
            <div class="form-column col-md-8 col-sm-12 col-xs-12">
              <div class="inner-column">
                <!--Contact Form-->
                <div class="contact-form">
                  <form action="https://formspree.io/f/xknenpae" method="POST">
                    <div class="row clearfix">
                      <div class="form-group col-md-6 col-sm-6 co-xs-12">
                        <input
                          type="text"
                          name="name"
                          value=""
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div class="form-group col-md-6 col-sm-6 co-xs-12">
                        <input
                          type="email"
                          name="email"
                          value=""
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div class="form-group col-md-6 col-sm-6 co-xs-12">
                        <input
                          type="text"
                          name="subject"
                          value=""
                          placeholder="Subject"
                          required
                        />
                      </div>
                      <div class="form-group col-md-6 col-sm-6 co-xs-12">
                        <input
                          type="text"
                          name="phone"
                          value=""
                          placeholder="Phone"
                          required
                        />
                      </div>
                      <div class="form-group col-md-12 col-sm-12 co-xs-12">
                        <textarea
                          name="message"
                          placeholder="Massage"
                        ></textarea>
                      </div>
                      <div class="form-group col-md-12 col-sm-12 co-xs-12">
                        <button type="submit" class="theme-btn btn-style-one">
                          Send Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <!--End Contact Form-->
              </div>
            </div>

            <!--Info Column-->
            <div class="info-column col-md-4 col-sm-12 col-xs-12">
              <div class="inner-column">
                <h2>Contact Info</h2>
                <ul class="list-info">
                  <li>
                    <i class="fas fa-globe"></i> Shop O/3C high Street Shopping Village Durban Road , Bellvile Cape Town 7530
                  </li>
                  <li>
                    <i class="far fa-envelope"></i>info@RoyalLunaRoseCompany.co.za</li>
                  <li>
                    <i class="fas fa-phone"></i> 021-687-5321<br />
                    021-687-5322
                  </li>
                </ul>
                <ul class="social-icon-four">
                  <li class="follow">Follow on:</li>
                  <li>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-google-plus-g"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-dribbble"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-pinterest-p"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> 
      </section>
      </div>
    
 
</template>

<script>
export default {};
</script>

<style>
.bord{
  border-color:#e74c3c;
  border:bold;
  width:30px;
  height:30px;
  position: relative;
}
li,
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.btn-style{
  color:#e74c3c;
}
.sec-title {
  position: relative;
  padding-bottom: 40px;
}
.sec-title .title {
  position: relative;
  color: #e74c3c;;
  font-size: 18px;
  font-weight: 700;
  padding-right: 50px;
  margin-bottom: 15px;
  display: inline-block;
  text-transform: capitalize;
}
.sec-title .title:before {
  position: absolute;
  content: "";
  right: 0;
  bottom: 7px;
  width: 40px;
  height: 1px;
  background-color: #bbb;
}
.sec-title h2 {
  position: relative;
  color: #252525;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.5em;
  display: block;
}
.sec-title.light h2 {
  color: #fff;
}
.contact-page-section {
  position: relative;
  
  padding-bottom: 110px;
}
.contact-page-section .inner-container {
  position: relative;
  z-index: 1;
  background-color: #e74c3c;;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.1);
}
.contact-page-section .form-column {
  position: relative;
  padding: 0 0 0 15px;
}
.contact-page-section .form-column .inner-column {
  position: relative;
  padding: 60px 45px 30px;
  background-color: #fff;
}
.contact-page-section .info-column {
  position: relative;
}
.contact-page-section .info-column .inner-column {
  position: relative;
  padding: 60px 35px;
}
.contact-page-section .info-column h2 {
  position: relative;
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.4em;
  margin-bottom: 45px;
}
.contact-page-section .info-column .list-info {
  position: relative;
  margin-bottom: 60px;
}
.contact-page-section .info-column .list-info li {
  position: relative;
  margin-bottom: 25px;
  font-size: 18px;
  color: #fff;
  line-height: 1.8em;
  padding-left: 45px;
}
.contact-page-section .info-column .list-info li:last-child {
  margin-bottom: 0;
}
.contact-page-section .info-column .list-info li i {
  position: absolute;
  left: 0;
  top: 8px;
  color: #fff;
  font-size: 30px;
}
.contact-form {
  position: relative;
}
.contact-form .form-group {
  position: relative;
  margin-bottom: 20px;
}
.contact-form input[type="text"],
.contact-form input[type="email"],
.contact-form textarea {
  position: relative;
  display: block;
  width: 100%;
  height: 60px;
  color: #222;
  font-size: 14px;
  line-height: 38px;
  padding: 10px 30px;
  border: 1px solid #ddd;
  background-color: #fff;
  transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
}
.contact-form input[type="text"]:focus,
.contact-form input[type="email"]:focus,
.contact-form textarea:focus {
  border-color: #00b8ca;
}
.contact-form textarea {
  height: 250px;
  resize: none;
}
.contact-form .theme-btn {
  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
  text-transform: capitalize;
  padding: 16px 39px;
  border: 2px solid #e74c3c;;
  font-family: Arimo, sans-serif;
  background: #e74c3c;
  display: inline-block;
  position: relative;
  line-height: 24px;
  cursor: pointer;
  color: #fff;
}
.contact-form .theme-btn:hover {
  color: #e74c3c;;
  border-color: #e74c3c;;
  background: 0 0;
}
.contact-form input.error,
.contact-form select.error,
.contact-form textarea.error {
  border-color: #e74c3c !important;
}
.contact-form label.error {
  display: block;
  line-height: 24px;
  padding: 5px 0 0;
  margin: 0;
  text-transform: uppercase;
  font-size: 12px;
  color: red;
  font-weight: 500;
}
.social-icon-four {
  position: relative;
}
.social-icon-four li {
  position: relative;
  margin-right: 18px;
  display: inline-block;
}
.social-icon-four li.follow {
  color: #fff;
  font-weight: 600;
  font-size: 24px;
  display: block;
  margin-bottom: 20px;
}
.social-icon-four li a {
  position: relative;
  font-size: 20px;
  color: #fff;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.social-icon-four li a:hover {
  color: #222;
}
</style>
