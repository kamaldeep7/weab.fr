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
	function changeNumber(newNo){
		var $number=$('.number'),
		oldNo=$number.text(),
		oldSplit=oldNo.split(""),
		newSplit=newNo.split(""),
		diffSplit=[];
		$number.html('');
		for(var i=0; i<oldSplit.length; i++){
			$number.append('<span data-col="'+i+'">'+oldSplit[i]+'</span>');
			diffSplit.push(newSplit[i]-oldSplit[i])
		}
		for(var i=0; i<diffSplit.length; i++){
			var $span=$number.find('span:eq('+i+')');
			$span.attr('data-topFinish',$span.height()*(diffSplit[i])*-1);
			if(diffSplit[i]!==0){
				var direction=diffSplit[i]>0?1:-1;
				var n=Math.abs(diffSplit[i]);
				for(var j=1; j<n+1; j++){
					var top=$span.position().top+$span.height()*j*direction;
					var left=$span.position().left;
					var topFinish=top-n*$span.height()*direction;
					$number.append('<span data-col="'+i+'" data-topFinish="'+topFinish+'" style="position: absolute; top:'+top+'px; left:'+left+'px;">'+(j*direction+(+oldSplit[i]))+'</span>')
				}
			}
		}
		$number.find('span').each(function(){
			var finish=$(this).attr('data-topFinish')+'px';
			$(this).animate({
				top:finish
			},function(){
				$number.html(newNo)
			})
		})
	}
	$(document).ready(function(){
		var count_start=114;
		var count_max_jump=7;
		$('.number').html(count_start.toString());
		var timer=setInterval(function(){
			count_start=count_start+Math.floor((Math.random()*count_max_jump)+2);
			if(count_start>999){
				changeNumber('1k');
				clearInterval(timer);
				return
			}
			changeNumber(count_start.toString())
		},2000)
	}
	)
});

}
/*
     FILE ARCHIVED ON 10:09:42 Apr 01, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:55:45 Sep 24, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.672
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.009
  esindex: 0.014
  cdx.remote: 55.671
  LoadShardBlock: 239.728 (3)
  PetaboxLoader3.datanode: 244.906 (5)
  PetaboxLoader3.resolve: 152.438 (3)
  load_resource: 186.553 (2)
*/