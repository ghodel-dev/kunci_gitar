
$(document).ready(function() {
				$('head').append("<title>[Chord] "+tampilchord[idchord]['nama_band']+" - "+tampilchord[idchord]['judul']+"</title>");
				
				$('#promokhususatas').append('<style>.sharingmedia{padding-top:3px;padding-left:20px;padding-right:20px;padding-bottom:3px;color:white;border-radius:0.4em;-moz-border-radius:0.4em;-webkit-border-radius:0.4em;-khtml-border-radius:0.4em;font-weight:bold;}</style><center style="padding:5px"><b class="sharingmedia" style="background-color:#996633;">Share:</b> <a href="#" onclick="cordova.InAppBrowser.open(\'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fkuncilagu.exe.bz/'+tampilchord[idchord]["id"]+'\', \'_system\');"><Span class="sharingmedia" style="background-color:blue;">FB</span></a> <a href="#" onclick="cordova.InAppBrowser.open(\'https://twitter.com/intent/tweet?text=%23Chord+%23Guitar+and+%23Lyric+%23'+tampilchord[idchord]["nama_band"]+' - '+tampilchord[idchord]["judul"]+'&via=moreshare&url=http://kuncilagu.exe.bz/'+tampilchord[idchord]["id"]+'\', \'_system\');"><Span class="sharingmedia" style="background-color:#09b8c1;">Twit</span></a> <a href="#" onclick="cordova.InAppBrowser.open(\'https://plus.google.com/share?url=http%3A%2F%2Fkuncilagu.exe.bz/'+tampilchord[idchord]["id"]+'\', \'_system\');"><Span class="sharingmedia" style="background-color:red;">G+</span></a></center>');	

				$('#judulchord').append(""+tampilchord[idchord]['nama_band']+" - "+tampilchord[idchord]['judul']+"");	
				/********************/
				cmprsstr = tampilchord[idchord]['isi'];
				cmprsstr = cmprsstr.replace(/A:s1:([a-z])/g, "a:s1:$1");
cmprsstr = cmprsstr.replace(/:([A-Z])(.*?):/g, ":<span style=\"color:#800000;font-weight:bold;\">$1$2</span>:");
cmprsstr = cmprsstr.replace(/:s10:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
cmprsstr = cmprsstr.replace(/:s9:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
cmprsstr = cmprsstr.replace(/:s8:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
cmprsstr = cmprsstr.replace(/:s7:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
cmprsstr = cmprsstr.replace(/:s6:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
cmprsstr = cmprsstr.replace(/:s5:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
cmprsstr = cmprsstr.replace(/:s4:/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
cmprsstr = cmprsstr.replace(/:s3:/g, "&nbsp;&nbsp;&nbsp;");
cmprsstr = cmprsstr.replace(/:s2:/g, "&nbsp;&nbsp;");
cmprsstr = cmprsstr.replace(/:s1:/g, "&nbsp;");
cmprsstr = cmprsstr.replace(/:x5:/g, "<br><br><br><br><br>");
cmprsstr = cmprsstr.replace(/:x4:/g, "<br><br><br><br>");
cmprsstr = cmprsstr.replace(/:x3:/g, "<br><br><br>");
cmprsstr = cmprsstr.replace(/:x2:/g, "<br><br>");
cmprsstr = cmprsstr.replace(/:x1:/g, "<br>");
				/********************/
			    $('#stage').append("<span class=\"chord\">"+cmprsstr+"</span>");
				$('body').append('<div class="homehome"> <a href="index.html"><span class="first"> Home </span></a> <a id="support" href="album.html#'+tampilchord[idchord]["id_abjad"]+'#'+tampilchord[idchord]["id_band"]+'#'+tampilchord[idchord]["nama_band"]+'"><span class="afterfirst"> Back </span></a> <span id="box-links"><a href="#endchord"><span id="scrollit" class="afterfirst"> Scroll </span></a></span> <span id="box-links-1"> <a href="#"><span id="stopscrollit" class="afterfirst"> Stop </span></a></span> <input style="width:30px;height:5px;font-size:12px;margin:0px;" type="number" id="xspeedscroll" onchange="scrlF(this.value)"> </div><script>;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:"xy",duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=="BackCompat"?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=="object"){b=j;j=0}if(typeof b=="function")b={onAfter:b};if(n=="max")n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is("html,body");switch(typeof f){case"number":case"string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case"object":if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(""),function(a,i){var e=i=="x"?"Left":"Top",h=e.toLowerCase(),c="scroll"+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css("margin"+e))||0;g[c]-=parseInt(f.css("border"+e+"Width"))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=="x"?"width":"height"]()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=="%"?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=="x"?"Width":"Height",h="scroll"+e;if(!d(a).is("html,body"))return a[h]-d(a)[e.toLowerCase()]();var c="client"+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=="object"?a:{top:a,left:a}}})(jQuery);(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)}else{a(jQuery)}}(function($){var g=location.href.replace(/#.*/,"");var h=$.localScroll=function(a){$("body").localScroll(a)};h.defaults={duration:150e3,axis:"y",event:"click",stop:true,target:window};$.fn.localScroll=function(a){a=$.extend({},h.defaults,a);if(a.hash&&location.hash){if(a.target)window.scrollTo(0,0);scroll(0,location,a)}return a.lazy?this.on(a.event,"a,area",function(e){if(filter.call(this)){scroll(e,this,a)}}):this.find("a,area").filter(filter).bind(a.event,function(e){scroll(e,this,a)}).end().end();function filter(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,"")===g&&(!a.filter||$(this).is(a.filter))}};h.hash=function(){};function scroll(e,a,b){var c=a.hash.slice(1),elem=document.getElementById(c)||document.getElementsByName(c)[0];if(!elem)return;if(e)e.preventDefault();var d=$(b.target);if(b.lock&&d.is(":animated")||b.onBefore&&b.onBefore(e,elem,d)===false)return;if(b.stop){d.stop(true)}if(b.hash){var f=elem.id===c?"id":"name",$a=$("<a> </a>").attr(f,c).css({position:"absolute",top:$(window).scrollTop(),left:$(window).scrollLeft()});elem[f]="";$("body").prepend($a);location.hash=a.hash;$a.remove();elem[f]=c}d.scrollTo(elem,b).trigger("notify.serialScroll",[elem])}return h}));$("body,html").bind("scroll mousedown wheel DOMMouseScroll mousewheel keyup", function(e){if ( e.which > 0 || e.type == "mousedown" || e.type == "mousewheel"){$("html,body").stop();}});/*$(document).ready(function(){$("#box-links").localScroll({target:"body"});});*/$(document).ready(function() {$("#box-links").click(function() {$("#box-links").hide("slow");$("#box-links-1").show("slow");});$("#box-links-1").click(function() {$("#box-links-1").hide("slow");$("#box-links").show("slow");});});</script>');
});


document.addEventListener("deviceready", myFunctionganalytic);
function myFunctionganalytic() {
  window.analytics.startTrackerWithId('UA-76029292-1');
  window.analytics.trackView("[Chord] "+tampilchord[idchord]['nama_band']+" - "+tampilchord[idchord]['judul']+"");
};

var content_chord = {
    'Am'  : '|___|___|___|___|___||E\n|___|___|___|___|___||A\n|___|___|___|_*_|___||D\n|___|___|___|_*_|___||G\n|___|___|___|___|_*_||B\n|___|___|___|___|___||e',
	'A#m' : '|___|___|___|___|___||E\n|___|___|___|___|_*_||A\n|___|___|_*_|___|___||D\n|___|___|_*_|___|___||G\n|___|___|___|_*_|___||B\n|___|___|___|___|_*_||e',
	'Bm'  : '|___|___|___|___|___||E\n|___|___|___|_*_|___||A\n|___|_*_|___|___|___||D\n|___|_*_|___|___|___||G\n|___|___|_*_|___|___||B\n|___|___|___|_*_|___||e',
	'Cm'  : '|___|___|___|___|___||E\n|___|___|_*_|___|___||A\n|_*_|___|___|___|___||D\n|_*_|___|___|___|___||G\n|___|_*_|___|___|___||B\n|___|___|_*_|___|___||e',
	'C#m' : '___|___|___|___|___|___||E\n___|___|_*_|___|___|___||A\n_*_|___|___|___|___|___||D\n_*_|___|___|___|___|___||G\n___|_*_|___|___|___|___||B\n___|___|_*_|___|___|___||e',
	'Dm'  : '|___|___|___|___|___||E\n|___|___|___|___|___||A\n|___|___|___|___|___||D\n|___|___|___|_*_|___||G\n|___|___|_*_|___|___||B\n|___|___|___|___|_*_||e',
	'D#m' : '|___|___|___|___|___||E\n|___|___|___|___|___||A\n|___|___|___|___|_*_||D\n|___|___|_*_|___|___||G\n|___|_*_|___|___|___||B\n|___|___|___|_*_|___||e',
	'Em'  : '|___|___|___|___|___||E\n|___|___|___|_*_|___||A\n|___|___|___|_*_|___||D\n|___|___|___|___|___||G\n|___|___|___|___|___||B\n|___|___|___|___|___||e',
	'Fm'  : '|___|___|___|___|_*_||E\n|___|___|_*_|___|___||A\n|___|___|_*_|___|___||D\n|___|___|___|___|_*_||G\n|___|___|___|___|_*_||B\n|___|___|___|___|_*_||e',
	'F#m' : '|___|___|___|_*_|___||E\n|___|_*_|___|___|___||A\n|___|_*_|___|___|___||D\n|___|___|___|_*_|___||G\n|___|___|___|_*_|___||B\n|___|___|___|_*_|___||e',
	'Gm'  : '|___|___|_*_|___|___||E\n|_*_|___|___|___|___||A\n|_*_|___|___|___|___||D\n|___|___|_*_|___|___||G\n|___|___|_*_|___|___||B\n|___|___|_*_|___|___||e',
	'G#m' : '___|___|_*_|___|___|___||E\n_*_|___|___|___|___|___||A\n_*_|___|___|___|___|___||D\n___|___|_*_|___|___|___||G\n___|___|_*_|___|___|___||B\n___|___|_*_|___|___|___||e',
	'A'   : '|___|___|___|___|___||E\n|___|___|___|___|___||A\n|___|___|___|_*_|___||D\n|___|___|___|_*_|___||G\n|___|___|___|_*_|___||B\n|___|___|___|___|___||e',
	'A#'  : '|___|___|___|___|___||E\n|___|___|___|___|_*_||A\n|___|___|_*_|___|___||D\n|___|___|_*_|___|___||G\n|___|___|_*_|___|___||B\n|___|___|___|___|_*_||e',
	'B'   : '|___|___|___|___|___||E\n|___|___|___|_*_|___||A\n|___|_*_|___|___|___||D\n|___|_*_|___|___|___||G\n|___|_*_|___|___|___||B\n|___|___|___|_*_|___||e',
	'C'   : '|___|___|___|___|___||E\n|___|___|_*_|___|___||A\n|___|___|___|_*_|___||D\n|___|___|___|___|___||G\n|___|___|___|___|_*_||B\n|___|___|___|___|___||e',
	'C#'  : '___|___|___|___|___|___||E\n___|___|_*_|___|___|___||A\n_*_|___|___|___|___|___||D\n_*_|___|___|___|___|___||G\n_*_|___|___|___|___|___||B\n___|___|_*_|___|___|___||e',
	'D'   : '|___|___|___|___|___||E\n|___|___|___|___|___||A\n|___|___|___|___|___||D\n|___|___|___|_*_|___||G\n|___|___|_*_|___|___||B\n|___|___|___|_*_|___||e',
	'D#'  : '|___|___|___|___|___|xE\n|___|___|___|___|___|xA\n|___|___|___|___|___|xD\n|___|___|_*_|___|___||G\n|___|_*_|___|___|___||B\n|___|___|_*_|___|___||e',
	'E'   : '|___|___|___|___|___||E\n|___|___|___|_*_|___||A\n|___|___|___|_*_|___||D\n|___|___|___|___|_*_||G\n|___|___|___|___|___||B\n|___|___|___|___|___||e',
	'F'   : '|___|___|___|___|_*_||E\n|___|___|_*_|___|___||A\n|___|___|_*_|___|___||D\n|___|___|___|_*_|___||G\n|___|___|___|___|_*_||B\n|___|___|___|___|_*_||e',
	'F#'  : '|___|___|___|_*_|___||E\n|___|_*_|___|___|___||A\n|___|_*_|___|___|___||D\n|___|___|_*_|___|___||G\n|___|___|___|_*_|___||B\n|___|___|___|_*_|___||e',
	'G'   : '|___|___|_*_|___|___||E\n|___|___|___|_*_|___||A\n|___|___|___|___|___||D\n|___|___|___|___|___||G\n|___|___|___|___|___||B\n|___|___|_*_|___|___||e',
	'G#'  : '___|___|_*_|___|___|___||E\n_*_|___|___|___|___|___||A\n_*_|___|___|___|___|___||D\n___|_*_|___|___|___|___||G\n___|___|_*_|___|___|___||B\n___|___|_*_|___|___|___||e',
	'A7'  : '|___|___|___|___|___||E\n|___|___|___|___|___||A\n|___|___|___|_*_|___||D\n|___|___|___|___|___||G\n|___|___|___|_*_|___||B\n|___|___|___|___|___||e',
	'B7'  : '|___|___|___|___|___|xE\n|___|___|___|_*_|___||A\n|___|___|___|___|_*_||D\n|___|___|___|_*_|___||G\n|___|___|___|___|___||B\n|___|___|___|_*_|___||e',
	'C7'  : '|___|___|___|___|___||E\n|___|___|_*_|___|___||A\n|___|___|___|_*_|___||D\n|___|___|_*_|___|___||G\n|___|___|___|___|_*_||B\n|___|___|___|___|___||e',
	'D7'  : '|___|___|___|___|___||E\n|___|___|___|___|___||A\n|___|___|___|___|___||D\n|___|___|___|_*_|___||G\n|___|___|___|___|_*_||B\n|___|___|___|_*_|___||e',
	'E7'  : '|___|___|___|___|___||E\n|___|___|___|_*_|___||A\n|___|___|___|_*_|___||D\n|___|___|___|___|_*_||G\n|___|___|_*_|___|___||B\n|___|___|___|___|___||e',
	'G7'  : '|___|___|_*_|___|___||E\n|___|___|___|_*_|___||A\n|___|___|___|___|___||D\n|___|___|___|___|___||G\n|___|___|___|___|___||B\n|___|___|___|___|_*_||e',
	'AMaj7':'|___|___|___|___|___||E\n|___|___|___|___|___||A\n|___|___|___|_*_|___||D\n|___|___|___|___|_*_||G\n|___|___|___|_*_|___||B\n|___|___|___|___|___||e',
	'BMaj7':'|___|___|___|___|___|xE\n|___|___|___|_*_|___||A\n|___|_*_|___|___|___||D\n|___|___|_*_|___|___||G\n|___|_*_|___|___|___||B\n|___|___|___|_*_|___||e',
	'CMaj' :'|___|___|___|___|___|XE\n|___|___|_*_|___|___||A\n|_*_|___|___|___|___||D\n|___|_*_|___|___|___||G\n|_*_|___|___|___|___||B\n|___|___|_*_|___|___||e',
	'DMaj7':'|___|___|___|___|___||E\n|___|___|___|___|___||A\n|___|___|___|___|___||D\n|___|___|___|_*_|___||G\n|___|___|___|_*_|___||B\n|___|___|___|_*_|___||e',
	'EMaj7':'|___|___|___|___|___||E\n|___|___|___|_*_|___||A\n|___|___|___|_*_|___||D\n|___|_*_|___|___|___||G\n|___|_*_|___|___|___||B\n|___|_*_|___|___|___||e',

	'Amaj7':'|___|___|___|___|___||E\n|___|___|___|___|___||A\n|___|___|___|_*_|___||D\n|___|___|___|___|_*_||G\n|___|___|___|_*_|___||B\n|___|___|___|___|___||e',
	'Bmaj7':'|___|___|___|___|___|xE\n|___|___|___|_*_|___||A\n|___|_*_|___|___|___||D\n|___|___|_*_|___|___||G\n|___|_*_|___|___|___||B\n|___|___|___|_*_|___||e',
	'Cmaj' :'|___|___|___|___|___|XE\n|___|___|_*_|___|___||A\n|_*_|___|___|___|___||D\n|___|_*_|___|___|___||G\n|_*_|___|___|___|___||B\n|___|___|_*_|___|___||e',
	'Dmaj7':'|___|___|___|___|___||E\n|___|___|___|___|___||A\n|___|___|___|___|___||D\n|___|___|___|_*_|___||G\n|___|___|___|_*_|___||B\n|___|___|___|_*_|___||e',
	'Emaj7':'|___|___|___|___|___||E\n|___|___|___|_*_|___||A\n|___|___|___|_*_|___||D\n|___|_*_|___|___|___||G\n|___|_*_|___|___|___||B\n|___|_*_|___|___|___||e',

	'E5'   :'|___|___|___|___|___||E\n|___|___|___|_*_|___||A\n|___|___|___|_*_|___||D\n|___|___|___|___|___|xG\n|___|___|___|___|___|xB\n|___|___|___|___|___|xe',
	'F5'   :'|___|___|___|___|_*_||E\n|___|___|_*_|___|___||A\n|___|___|_*_|___|___||D\n|___|___|___|___|___|xG\n|___|___|___|___|___|xB\n|___|___|___|___|___|xe',
	'F#5'  :'|___|___|___|_*_|___||E\n|___|_*_|___|___|___||A\n|___|_*_|___|___|___||D\n|___|___|___|___|___|xG\n|___|___|___|___|___|xB\n|___|___|___|___|___|xe',
	'G5'   :'|___|___|_*_|___|___||E\n|_*_|___|___|___|___||A\n|_*_|___|___|___|___||D\n|___|___|___|___|___|xG\n|___|___|___|___|___|xB\n|___|___|___|___|___|xe',
	'G#5'  :'___|___|_*_|___|___|___||E\n_*_|___|___|___|___|___||A\n_*_|___|___|___|___|___||D\n___|___|___|___|___|___|xG\n___|___|___|___|___|___|xB\n___|___|___|___|___|___|xe',
	'A5'   :'|___|___|___|___|___||E\n|___|___|___|___|___||A\n|___|___|___|_*_|___||D\n|___|___|___|_*_|___||G\n|___|___|___|___|___|xB\n|___|___|___|___|___|xe',
	'A#5'  :'|___|___|___|___|___|xE\n|___|___|___|___|_*_||A\n|___|___|_*_|___|___||D\n|___|___|_*_|___|___||G\n|___|___|___|___|___|xB\n|___|___|___|___|___|xe',
	'B5'   :'|___|___|___|___|___|xE\n|___|___|___|_*_|___||A\n|___|_*_|___|___|___||D\n|___|_*_|___|___|___||G\n|___|___|___|___|___|xB\n|___|___|___|___|___|xe',
	'C#'   :'|___|___|___|___|___|xE\n|___|___|_*_|___|___||A\n|_*_|___|___|___|___||D\n|_*_|___|___|___|___||G\n|___|___|___|___|___|xB\n|___|___|___|___|___|xe',
	'C#5'  :'___|___|___|___|___|___|xE\n___|___|_*_|___|___|___||A\n_*_|___|___|___|___|___||D\n_*_|___|___|___|___|___||G\n___|___|___|___|___|___|xB\n___|___|___|___|___|___|xe',
	'D5'   :'                  5    \n|___|___|___|___|___xE\n|___|___|___|___|_*_|A\n|___|___|_*_|___|___|D\n|___|___|_*_|___|___|G\n|___|___|___|___|___xB\n|___|___|___|___|___xe',
	'D#5'  :'                  6    \n|___|___|___|___|___xE\n|___|___|___|___|_*_|A\n|___|___|_*_|___|___|D\n|___|___|_*_|___|___|G\n|___|___|___|___|___xB\n|___|___|___|___|___xe',

	'A/C#': '|___|___|___|___|___||E\n|___|_*_|___|___|___||A\n|___|___|___|_*_|___||D\n|___|___|___|_*_|___||G\n|___|___|___|_*_|___||B\n|___|___|___|___|___||e',
	'D/F#': '|___|___|___|_*_|___||E\n|___|___|___|___|___||A\n|___|___|___|___|___||D\n|___|___|___|_*_|___||G\n|___|___|_*_|___|___||B\n|___|___|___|_*_|___||e',
	'E/G#': '|___|_*_|___|___|___||E\n|___|___|___|_*_|___||A\n|___|___|___|_*_|___||D\n|___|___|___|___|___|xG\n|___|___|___|___|___||B\n|___|___|___|___|___||e',
	'G/B' : '|___|___|___|___|___|xE\n|___|___|___|_*_|___||A\n|___|___|___|___|___||D\n|___|___|___|___|___||G\n|___|___|___|___|___||B\n|___|___|_*_|___|___||e'
}
$(document).ready(function(){
$.each(content_chord, function(key, value) {
    $('#mySelect').append($("<option/>", {
        value: value,
        text: key
    })); 
});
});

function changeFunc($i) {
    alert($i);
   }
   
   $(document).ready(function(){
		$('#box-loadload').delay(1500).fadeOut('fast');
				sessionStorage.setItem("refpage", idchord); 

		});

var message=""+tampilchord[idchord]['nama_band']+" - "+tampilchord[idchord]['judul']+"";








$(document).ready(function() {
if (!localStorage.getItem("cccc"+idchord)){
document.getElementById("bookmarkya").style.color = "silver";
$('#bm1').show('slow');
$('#bm2').hide('slow');
}
else
{
document.getElementById("bookmarkya").style.color = "red";
$('#bm1').hide('slow');
$('#bm2').show('slow');
}
});


function myFunctionbookmarkya() {
if (!localStorage.getItem("cccc"+idchord)){
document.getElementById("bookmarkya").style.color = "red";
localStorage.setItem("cccc"+idchord, ""+tampilchord[idchord]['nama_band']+" - "+tampilchord[idchord]['judul']+"");
$('#bm1').hide('slow');
$('#bm2').show('slow');
}
else
{
document.getElementById("bookmarkya").style.color = "silver";
localStorage.removeItem("cccc"+idchord);
$('#bm1').show('slow');
$('#bm2').hide('slow');
}
}





var match;
var chords =
    ['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B','C','Db','D','D#','E','F','Gb','G','G#','A','A#','C'];
var chordRegex = /C#|D#|F#|G#|A#|Db|Eb|Gb|Ab|Bb|C|D|E|F|G|A|B/g;

$('#transposeUp').click(function() {
    $('.chord').each(function() {
        var currentChord = $(this).html();
        var output = "";
        var parts = currentChord.split(chordRegex);
        var index = 0;
        while (match = chordRegex.exec(currentChord))
        {
            var chordIndex = chords.indexOf(match[0]);
            output += parts[index++] + chords[chordIndex+1];
        }
        output += parts[index];
        $(this).html(output);
    });
});

$('#transposeDown').click(function() {
    $('.chord').each(function() {
        var currentChord = $(this).html();
        var output = "";
        var parts = currentChord.split(chordRegex);
        var index = 0;
        while (match = chordRegex.exec(currentChord))
        {
            var chordIndex = chords.indexOf(match[0],1);
            output += parts[index++] + chords[chordIndex-1];
        }
        output += parts[index];
        $(this).html(output);
    });
});



$(document).ready(function(){
   
	if(!localStorage.getItem("scrl")) { localStorage.setItem("scrl", "10"); }
	document.getElementById("xspeedscroll").value = localStorage.getItem("scrl");
	
	
	
	$('#box-links').click(function() {
	var xspeedscroll = document.getElementById("xspeedscroll").value;
	if(xspeedscroll < 1 || xspeedscroll > 100) { var xspeedscroll = 10; }
	
	function scroll(speed) {
        $(document.body).animate({
            scrollTop: $('#endchord').offset().top,
            easing: 'linear'
        }, {
            duration: speed,
            easing: 'linear',
            complete: speed
        });
    }
	
    speed = xspeedscroll * 100000;
	scroll(speed)
	setInterval(function () {
        scroll(speed)
    }, speed * 2);
	});
    
    
});

function scrlF(valscrl) { 
if(valscrl < 1 || valscrl > 100) { valscrl = 10; }
localStorage.setItem("scrl", ""+valscrl+"");	
}