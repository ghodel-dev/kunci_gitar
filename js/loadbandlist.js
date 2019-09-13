$(document).ready(function(){
$('head').append("<title>[Dir] "+dirapa+"</title>");

var textpret = "";
for (i = 0; i < databandlist.length; i++) { 
if(databandlist[i].id_abjad == idabjad) {
    textpret += "<a id=\""+ databandlist[i].id_band +"\" href=\"album.html#"+ databandlist[i].id_abjad +"#"+ databandlist[i].id_band +"#"+ databandlist[i].nama_band +"\"><h4 id=\"col"+ databandlist[i].id_band +"\">"+ databandlist[i].nama_band + "</h4></a>";
}}
document.getElementById("hasillist").innerHTML = textpret;

});

document.addEventListener("deviceready", myFunctionganalytic);
function myFunctionganalytic() {
  window.analytics.startTrackerWithId('UA-76029292-1');
  window.analytics.trackView("[Dir] "+dirapa+"");
};


   $(document).ready(function(){
		$('#box-loadload').delay(1500).fadeOut('fast');
		
		if (sessionStorage.getItem("refpage") != "kosong") {
		
		$.scrollTo($('#'+sessionStorage.getItem("refpage")+''), 1000);
		var col=document.getElementById("col"+sessionStorage.getItem("refpage")); col.style.color="orange"; }
						sessionStorage.setItem("refpage", "kosong"); 

		});

var message='Directory - '+dirapa+'';
