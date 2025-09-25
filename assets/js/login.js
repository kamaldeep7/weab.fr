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

    /* ========== LOGIN ========== */
	
	$(".form-horizontal").submit(function () {
    	return false;
    });
	
	$('#submit').click( function() {
		weab.removeErrorMessages();
        
        var email     = $('#email'),
            password  = $('#password'),
			div       = $('#result'),
			button    = $(this);
			
		div.html('').hide();
	
		if ($.trim(email.val()) == '')
		{
            weab.displayErrorMessage(email, "Veuillez entrer votre email.");
            return;
        }
        else if ($.trim(email.val()) != '' && weab.validateEmail(email.val())==false)
        {
            weab.displayErrorMessage(email, "Veuillez entrer un email valide.");
            return;
        }

		if ($.trim(password.val()) == '')
		{
            weab.displayErrorMessage(password, "Veuillez entrer votre mot de passe.");
            return;
        }
	
		button.html('<img src="img/btn-load.gif"/> Connexion en cours');
	
		$.ajax({
            url: "lib/ajax.php",
            type: "POST",
            data: {
                action: 'login',
                email: email.val(),
                password: password.val()
            },
            success: function(result) {
				if (result === 'true')
				{
					window.location = "index.php";
				}
				else
				{
					button.button('reset').text('Connexion');
					password.val('');
					div.html('<div class="col-lg-offset-5 col-lg-4"><div class="alert alert-danger">'+result+'</div></div>')
					div.slideDown();
				}
            }
        });
	});

});

}
/*
     FILE ARCHIVED ON 19:08:25 Jun 04, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:07:02 Sep 25, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.599
  exclusion.robots: 0.034
  exclusion.robots.policy: 0.02
  esindex: 0.011
  cdx.remote: 5.383
  LoadShardBlock: 81.993 (3)
  PetaboxLoader3.datanode: 105.668 (5)
  PetaboxLoader3.resolve: 120.489 (3)
  load_resource: 194.621 (2)
*/