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
    $("form").submit(function (e) {
        e.preventDefault();
        e.returnValue = false;
		
        var email = $('#email'),
			msg = $('#msg'),
			captcha = $('#captcha'),
			submit = $('button[type="submit"]'),
			success = $('#success'),
			loading = $('#loading');
		
		weab.removeErrorMessages();
		
        
        if($.trim(email.val()) == '') {
            weab.displayErrorMessage(email, "Veuillez entrer un email");
            return;
        }
		if(!/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.val())) {
            weab.displayErrorMessage(email, "Veuillez entrer un email valide");
            return;
        }
		if($.trim(msg.val()) == '') {
            weab.displayErrorMessage(msg, "Veuillez entrer un message");
            return;
        }
		if($.trim(captcha.val()) == '') {
            weab.displayErrorMessage(captcha, "Veuillez entrer le captcha");
            return;
        }
		if($.trim(captcha.val().length) != 6) {
            weab.displayErrorMessage(captcha, "Le captcha est incorrect");
            return;
        }
		
		submit.hide();
		loading.show();
        
        $.ajax({
            url: "lib/ajax.php",
            type: "POST",
            data: {
                action: 'contactForm',
				email: email.val(),
                msg: msg.val(),
				captcha: captcha.val()
            },
            success: function(r) {
				if(r==='false'){
					captcha.val('');
					loading.hide();
					weab.displayErrorMessage(captcha, "Le captcha est incorrect");
					submit.show();
				}else if(r==='true'){
					email.val('');
					msg.val('');
					captcha.val('');
					loading.hide();
					success.slideDown();
				}
            }
        });
    });
});

}
/*
     FILE ARCHIVED ON 12:51:39 Mar 15, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:52:54 Sep 24, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.78
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.013
  esindex: 0.015
  cdx.remote: 6.076
  LoadShardBlock: 192.744 (3)
  PetaboxLoader3.resolve: 164.776 (4)
  PetaboxLoader3.datanode: 94.435 (4)
  load_resource: 74.49
*/