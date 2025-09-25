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
	$('a').smoothScroll();
	$('#datetimepicker1').datetimepicker({
		language: 'fr'
	});
	$("form").submit(function (e) {
        e.preventDefault();
        e.returnValue = false;
		
        var url = $('#url'),
			number = $('#number'),
			date = $('#date'),
			email = $('#email'),
			message = $('#message'),
			submit = $('button[type="submit"]'),
			success = $('#success'),
			loading = $('#loading');
		
		weab.removeErrorMessages();
		
        if($.trim(url.val()) == '') {
            weab.displayErrorMessage(url, "Veuillez entrer le lien vers le concours");
            return;
        }
		if($.trim(number.val()) == '') {
            weab.displayErrorMessage(number, "Veuillez entrer le nombre de vote souhaitÃ©");
            return;
        }
		if($.trim(date.val()) == '') {
            weab.displayErrorMessage(date, "Veuillez entrer la date butoir");
            return;
        }
		if($.trim(email.val()) == '') {
            weab.displayErrorMessage(email, "Veuillez entrer un email");
            return;
        }
		if(!/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.val())) {
            weab.displayErrorMessage(email, "Veuillez entrer un email valide");
            return;
        }
		if($.trim(message.val()) == '') {
            weab.displayErrorMessage(message, "Veuillez entrer un message");
            return;
        }
		
		submit.hide();
		loading.show();
        
        $.ajax({
            url: "lib/ajax.php",
            type: "POST",
            data: {
                action:  'quote',
				url:     url.val(),
				number:  number.val(),
				date:    date.val(),
				email:   email.val(),
                message: message.val()
            },
            success: function(res) {
				var r = JSON.parse(res);
				if(r.id === "success") {
					url.val('');
					number.val('');
					date.val('');
					email.val('');
					message.val('');
					loading.hide();
					success.show();
				}else{
					weab.displayErrorMessage($("#"+r.id), r.msg);
					submit.show();
					loading.hide();
				}
            }
        });
    });
});

}
/*
     FILE ARCHIVED ON 13:44:45 Jun 05, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:52:47 Sep 24, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.65
  exclusion.robots: 0.023
  exclusion.robots.policy: 0.01
  esindex: 0.015
  cdx.remote: 20.308
  LoadShardBlock: 248.056 (3)
  PetaboxLoader3.datanode: 103.938 (4)
  PetaboxLoader3.resolve: 214.558 (3)
  load_resource: 110.247
*/