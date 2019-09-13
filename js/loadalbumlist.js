
$(document).ready(function(){

$('head').append("<title>[Album] "+okehash[2]+"</title>");
$('body').append('<div class="homehome"> <a href="index.html"><span class="first"> Home </span></a> <a id="support" href="band.html#'+okehash[0]+'"><span class="afterfirst"> << Back </span></a></div><div class="backback"> </div> <div class="exitexit"> <a id="support" href="#"></a></div>');
$('head').append("<title>ALBUM - "+okehash[2]+"</title>");

var textpret = "";
for (i = 0; i < dataalbumlist.length; i++) { 
if(dataalbumlist[i].id_band == okehash[1]) {
    textpret += "<a id=\""+ dataalbumlist[i].id +"\" href=\"chord.html#"+ dataalbumlist[i].id +"\"><h4 id=\"col"+ dataalbumlist[i].id +"\">"+ dataalbumlist[i].judul + "</h4></a>";
}}
document.getElementById("hasillist").innerHTML = textpret;
});



document.addEventListener("deviceready", myFunctionganalytic);
function myFunctionganalytic() {
  window.analytics.startTrackerWithId('UA-76029292-1');
  window.analytics.trackView('[Album] '+okehash[2]+'');
};


$(document).ready(function(){
		$('#box-loadload').delay(1500).fadeOut('fast');
		
		if (sessionStorage.getItem("refpage") != "kosong") {
				$.scrollTo($('#'+sessionStorage.getItem("refpage")+''), 1000);
				var col=document.getElementById("col"+sessionStorage.getItem("refpage")); col.style.color="orange"; }
				sessionStorage.setItem("refpage", okehash[1]); 

		});
		
		
var message='Album - '+okehash[2]+'';
