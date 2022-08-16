<template>
  <div class="container ">
    <div class="row  d-flex flex-row justify-content-center">
      <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
        <form role="form"  @submit.prevent="register">
          <h2>Please Sign Up</h2>
          <hr class="colorgraph" />
          <div class="form-group mb-1">
            <input
              type="text"
              name="display_name"
              id="display_name"
              class="form-control input-lg"
              placeholder="Full Name"
              tabindex="3"
              v-model="fullName"
            />
          </div>
          <div class="form-group mb-1">
            <input
              type="email"
              name="email"
              id="email"
              class="form-control input-lg"
              placeholder="Email Address"
              tabindex="4"
              v-model="email"
            />
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6 mb-1">
              <div class="form-group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  v-model="userPassword"
                  class="form-control input-lg"
                  placeholder="Password"
                  tabindex="5"
                />
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 mb-1">
              <div class="form-group">
                <input
                  type="password"
                  name="password_confirmation"
                  id="password_confirmation"
                  v-model="password_repeat"
                  class="form-control input-lg"
                  placeholder="Confirm Password"
                  tabindex="6"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-4 col-sm-3 col-md-3">
              <span class="button-checkbox">
                <button
                  type="button"
                  class="btn-c"
                  data-color="info"
                  tabindex="7"
                >
                  I Agree
                </button>
                <input
                  type="checkbox"
                  name="t_and_c"
                  id="t_and_c"
                  class="hidden"
                  value="1"/>
              </span>
            </div>
            <div class="col-xs-8 col-sm-9 col-md-9 reg">
              By clicking <a href="./signup.vue"><strong class="label label">Register</strong>,</a>
              you agree to the
              <a href="#" data-toggle="modal" data-target="#t_and_c_m"
                >Terms and Conditions</a>
              set out by this site, including our Cookie Use.
            </div>
          </div>

          <hr class="colorgraph" />
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <input
                type="submit"
                value="Register"
                class="btn1 btn btn-block btn-lg"
                tabindex="7"
              />
            </div>
            <div class="col-xs-12 col-md-6">
              <a
                href="/login"
                class="btn2 btn btn-block btn-lg"
                >Sign In</a
              >
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="t_and_c_m"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              ×
            </button>
            <h4 class="modal-title" id="myModalLabel">Terms & Conditions</h4>
          </div>
          <div class="modal-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique, itaque, modi, aliquam nostrum at sapiente consequuntur
              natus odio reiciendis perferendis rem nisi tempore possimus ipsa
              porro delectus quidem dolorem ad.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique, itaque, modi, aliquam nostrum at sapiente consequuntur
              natus odio reiciendis perferendis rem nisi tempore possimus ipsa
              porro delectus quidem dolorem ad.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique, itaque, modi, aliquam nostrum at sapiente consequuntur
              natus odio reiciendis perferendis rem nisi tempore possimus ipsa
              porro delectus quidem dolorem ad.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique, itaque, modi, aliquam nostrum at sapiente consequuntur
              natus odio reiciendis perferendis rem nisi tempore possimus ipsa
              porro delectus quidem dolorem ad.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique, itaque, modi, aliquam nostrum at sapiente consequuntur
              natus odio reiciendis perferendis rem nisi tempore possimus ipsa
              porro delectus quidem dolorem ad.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique, itaque, modi, aliquam nostrum at sapiente consequuntur
              natus odio reiciendis perferendis rem nisi tempore possimus ipsa
              porro delectus quidem dolorem ad.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique, itaque, modi, aliquam nostrum at sapiente consequuntur
              natus odio reiciendis perferendis rem nisi tempore possimus ipsa
              porro delectus quidem dolorem ad.
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">
              I Agree
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
  </div>
</template>
<script>
$(function () {
  $(".button-checkbox").each(function () {
    // Settings
    var $widget = $(this),
      $button = $widget.find("button"),
      $checkbox = $widget.find("input:checkbox"),
      color = $button.data("color"),
      settings = {
        on: {
          icon: "glyphicon glyphicon-check",
        },
        off: {
          icon: "glyphicon glyphicon-unchecked",
        },
      };

    // Event Handlers
    $button.on("click", function () {
      $checkbox.prop("checked", !$checkbox.is(":checked"));
      $checkbox.triggerHandler("change");
      updateDisplay();
    });
    $checkbox.on("change", function () {
      updateDisplay();
    });

    // Actions
    function updateDisplay() {
      var isChecked = $checkbox.is(":checked");

      // Set the button's state
      $button.data("state", isChecked ? "on" : "off");

      // Set the button's icon
      $button
        .find(".state-icon")
        .removeClass()
        .addClass("state-icon " + settings[$button.data("state")].icon);

      // Update the button's color
      if (isChecked) {
        $button.removeClass("btn-default").addClass("btn-" + color + " active");
      } else {
        $button.removeClass("btn-" + color + " active").addClass("btn-default");
      }
    }

    // Initialization
    function init() {
      updateDisplay();

      // Inject the icon if applicable
      if ($button.find(".state-icon").length == 0) {
        $button.prepend(
          '<i class="state-icon ' +
            settings[$button.data("state")].icon +
            '"></i>'
        );
      }
    }
    init();
  });
});
export default {
  data() {
    return {
      fullName: "",
      email: "",
      userPassowrd: "",
      password_repeat: "",
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    register() {
      return this.$store.dispatch("registerUser", {
        fullName: this.fullName,
        email: this.email,
        userPassowrd: this.userPassowrd,
        password_repeat: this.password_repeat,
      });
    },
  },
};
</script>

<style scoped>
.btn-check:active+.btn-info, .btn-check:checked+.btn-info, .btn-info.active, .btn-info:active, .show>.btn-info.dropdown-toggle {
    color:#f5a08a;
    background-color:#dd4e4f;
    border-color:#dd4e4f;
}
.btn-info{
   color:#f5a08a;
    background-color:#dd4e4f;
    border-color:#dd4e4f;
}
.btn-info.active{
  color:#f5a08a;
    background-color:#dd4e4f;
    border-color:#dd4e4f;
}
#t_and_c.hidden{
  color:#dd4e4f;      
}
h2{
  color:#dd4e4f;       
}
.colorgraph {
  height: px;
  border-top: 0;
  background: #f9f5f2;
  border-radius: 5px;
}
.btn1{
        color:#f5a08a; 
        border-color: #dd4e4f;
  }
  .btn2{
      color:#f5a08a; 
      border-color: #dd4e4f;
  }
  .btn1:hover{
      color: #dd4e4f;  
  }
    .btn2:hover{
      color: #dd4e4f; 
      
  }
  .btn-c{
         color:#f5a08a; 
         border-color:#dd4e4f;
  }
  /* .btn-c:hover{
        background-color:#dd4e4f;
  } */
  /* .btn:hover{
        color: #dd4e4f; 
  } */
  .button>btn-info active{
        color:#dd4e4f;
  }
    a:hover{
      color: #dd4e4f; 
      
  }

  a{
       color:#f5a08a; 
  }
</style>