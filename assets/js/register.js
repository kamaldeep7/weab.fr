var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(function() {

    /* ========== REGISTER ========== */
	
	$(".form-horizontal").submit(function () {
    	return false;
    });
	
	$('#submit').click( function() {
		weab.removeErrorMessages();
        
        var email          = $('#email'),
			firstname      = $('#first-name'),
			lastname       = $('#last-name'),
			password1      = $('#password1'),
            password2      = $('#password2'),
			captcha        = $('#captcha'),
			captchaanswer  = $('#captcha-answer'),
			cgu            = $('#cgu'),
			div            = $('#result'),
			button         = $(this);
			
		div.html('').hide();
		
		if($.trim(email.val()) == '') {
            weab.displayErrorMessage(email, "Veuillez entrer votre email.");
            return;
        } else if($.trim(email.val()) != '' && weab.validateEmail(email.val())==false) {
            weab.displayErrorMessage(email, "Veuillez entrer un email valide.");
            return;
        }
		if($.trim(firstname.val()) == '') {
            weab.displayErrorMessage(firstname, "Veuillez entrer votre prÃ©nom.");
            return;
        }
		if($.trim(lastname.val()) == '') {
            weab.displayErrorMessage(lastname, "Veuillez entrer votre nom.");
            return;
        }
		if($.trim(password1.val()) == '') {
            weab.displayErrorMessage(password1, "Veuillez entrer votre mot de passe.");
            return;
        }
		if($.trim(password2.val()) == '') {
            weab.displayErrorMessage(password2, "Veuillez entrer la confirmation du mot de passe.");
            return;
        }
		if($.trim(password1.val()) != $.trim(password2.val())) {
            weab.displayErrorMessage(password1, "Veuillez entrer des mots de passe identiques.");
			weab.displayErrorMessage(password2, "Veuillez entrer des mots de passe identiques.");
            return;
        }
		if($.trim(captcha.val()) == '') {
            weab.displayErrorMessage(captcha, "Veuillez entrer le rÃ©sultat.");
            return;
        } else if($.trim(captcha.val()) != captchaanswer.val()) {
            weab.displayErrorMessage(captcha, "RÃ©sultat invalide.");
            return;
        }
		if(!cgu.prop("checked")) {
			var formGroup = cgu.parents(".form-group");
			formGroup.addClass("has-error");
			cgu.parents('.checkbox').next('.error.help-block').html('Vous devez accepter les conditions d\'utilisation.');
			cgu.focus();
            return;
        }
		

		button.html('<img src="img/btn-load.gif"/> Inscription en cours');
		
		var data = {
			userData: {
				email         : email.val(),
				firstname     : firstname.val(),
				lastname      : lastname.val(),
				password1     : password1.val(),
				password2     : password2.val(),
				captcha       : captcha.val(),
				captchaanswer : captchaanswer.val()
			},
			fieldId: {
				email         : 'email',
				firstname     : 'first-name',
				lastname      : 'last-name',
				password1     : 'password1',
				password2     : 'password2',
				captcha       : 'captcha'
			}
		};
	
		$.ajax({
            url: "lib/ajax.php",
            type: "POST",
            data: {
                action : 'register',
                user   : data
            },
            success: function(result) {
				button.button('reset').text('Inscription');
				var res = JSON.parse(result);
				
				if (res.status === "error")
				{
					//display all errors
					for (var i=0; i<res.errors.length; i++)
					{
						var error = res.errors[i];
						weab.displayErrorMessage($("#"+error.id), error.msg);
					}
				}
				else
				{
					email.val('');
					firstname.val('');
					lastname.val('');
					password1.val('');
					password2.val('');
					captcha.val('');
					div.html('<div class="col-lg-offset-5 col-lg-4"><div class="alert alert-success">'+res.msg+'</div></div>');
					div.slideDown();
				}
            }
        });
	
	});

});

}
/*
     FILE ARCHIVED ON 14:34:08 Jun 04, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:11:10 Sep 25, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.699
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.01
  esindex: 0.014
  cdx.remote: 25.854
  LoadShardBlock: 246.727 (3)
  PetaboxLoader3.datanode: 213.758 (4)
  PetaboxLoader3.resolve: 297.771 (2)
  load_resource: 307.883
*/