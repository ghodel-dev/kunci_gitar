
var neonbasecolor="white"
var neontextcolor="red"
var neontextcolor2="green"
var flashspeed=100						// speed of flashing in milliseconds
var flashingletters=3						// number of letters flashing in neontextcolor
var flashingletters2=1						// number of letters flashing in neontextcolor2 (0 to disable)
var flashpause=0						// the pause between flash-cycles in milliseconds

///No need to edit below this line/////

var n=0
$(document).ready(function() {
if (document.all||document.getElementById("judulatasjalan")){
$('#judulatasjalan').append('<font color="'+neonbasecolor+'">')
for (m=0;m<message.length;m++)
$('#judulatasjalan').append('<span id="neonlight'+m+'">'+message.charAt(m)+'</span>')
$('#judulatasjalan').append('</font>')
}
else
{$('#judulatasjalan').append(message)}
});

function crossref(number){
var crossobj=document.all? eval("document.all.neonlight"+number) : document.getElementById("neonlight"+number)
return crossobj
}

function neon(){

//Change all letters to base color
if (n==0){
for (m=0;m<message.length;m++)
crossref(m).style.color=neonbasecolor
}

//cycle through and change individual letters to neon color
crossref(n).style.color=neontextcolor

if (n>flashingletters-1) crossref(n-flashingletters).style.color=neontextcolor2 
if (n>(flashingletters+flashingletters2)-1) crossref(n-flashingletters-flashingletters2).style.color=neonbasecolor


if (n<message.length-1)
n++
else{
n=0
clearInterval(flashing)
setTimeout("beginneon()",flashpause)
return
}
}

function beginneon(){
if (document.all||document.getElementById("judulatasjalan"))
{
flashing=setInterval("neon()",flashspeed)
}
}

beginneon();


$(document).ready(function(){
		$('#box-loadload').delay(1500).fadeOut('fast');
		});
		
		
		
		
		
		


$(document).ready(function() {
$('#buttonsearchzz').click(function() {
$('#buttonsearchzz').hide();
$('#buttonsearchzzwait').show();

var urloooo = "js/dbkunci.js";
$.getScript( urloooo, function() {
	$( "#search" ).autocomplete(
	{
		source:data,
maxResults:100,
     minLength:3,
		select: function( event, ui ) {
			$( "#search" ).val( ui.item.label + " / " + ui.item.id );
			return false;
		}
	}).data( "autocomplete" )._renderItem = function( ul, item ) { 
		return $( "<li></li>" )
			.data( "item.autocomplete", item )
			.append( "<a href ='chord.html#" + item.id + "' onClick='window.location = \"chord.html#" + item.id + "\";location.reload();' ><strong>" + item.label + "</strong></a>" )
			.appendTo("ul");
		};		
$('#buttonsearchzzwait').hide('slow');
$('#formsearch').show('slow');
});
		
document.getElementById("search").placeholder = "Search Songs...";
		});
});
