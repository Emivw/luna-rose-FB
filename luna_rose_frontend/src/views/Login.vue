<template>

   <div class="container ">

        <div class="row d-flex flex-row justify-content-center" style="margin-top:150px; ">
            <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                    <div v-if="user"> welcome {{user[0].fullName}}</div>
                   <div v-else>
                <form  role="form">
                    
                    <fieldset>
                        <h2>Please Sign In</h2>
                        <hr class="colorgraph">
                        <div class="form-group mb-1">
                            <input type="email" name="email" id="email" class="form-control input-lg" placeholder="Email Address" v-model="email">
                        </div>
                        <div class="form-group">
                            <input type="password" name="password" id="password" class="form-control input-lg" placeholder="Password" v-model="user_password">
                        </div>
                        <span class="button-checkbox">
                            <button type="button" class="btn" data-color="info">Remember Me</button>
                            <input type="checkbox" name="remember_me" id="remember_me" checked="checked" class="hidden">
                            <a href="" class="btn btn-link pull-right">Forgot Password?</a>
                        </span>
                        <hr class="colorgraph">
                        <div class="row">
                            <div class="col-xs-6 col-sm-6 col-md-6">
                                <input type="submit" class="btn1 btn-lg btn  btn-block" value="Sign In">
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-6">
                                <a href="./signup.vue" class="btn2 btn-lg btn btn-block">Register</a>
                            </div>
                        </div>
                    </fieldset>
                </form>
                </div>
            </div>
        </div>
		
        
        </div>

</template>

<script>
$(function(){
    $('.button-checkbox').each(function(){
		var $widget = $(this),
			$button = $widget.find('button'),
			$checkbox = $widget.find('input:checkbox'),
			color = $button.data('color'),
			settings = {
					on: {
						icon: 'glyphicon glyphicon-check'
					},
					off: {
						icon: 'glyphicon glyphicon-unchecked'
					}
			};

		$button.on('click', function () {
			$checkbox.prop('checked', !$checkbox.is(':checked'));
			$checkbox.triggerHandler('change');
			updateDisplay();
		});

		$checkbox.on('change', function () {
			updateDisplay();
		});

		function updateDisplay() {
			var isChecked = $checkbox.is(':checked');
			// Set the button's state
			$button.data('state', (isChecked) ? "on" : "off");

			// Set the button's icon
			$button.find('.state-icon')
				.removeClass()
				.addClass('state-icon ' + settings[$button.data('state')].icon);

			// Update the button's color
			if (isChecked) {
				$button
					.removeClass('btn-default')
					.addClass('btn-' + color + ' active');
			}
			else
			{
				$button
					.removeClass('btn-' + color + ' active')
					.addClass('btn-default');
			}
		}
		function init() {
			updateDisplay();
			// Inject the icon if applicable
			if ($button.find('.state-icon').length == 0) {
				$button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i> ');
			}
		}
		init();
	});
});
export default {
	  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    login() {
      const user = {
        email: this.email,
        password: this.password,
      };
      return this.$store.dispatch("login", user);
    },
  },
};
</script>
<style scoped>
.colorgraph {
    height: 5px;
    border-top: 0;
    background: #c4e17f;
    border-radius: 5px;

    
  }
  h2{
  color:#dd4e4f;       
}
  .btn{
        color:#f5a08a; 
       
  }
  .btn:hover{
    color: #dd4e4f;      
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
</style>
