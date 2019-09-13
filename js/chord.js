/************
$(document).ready(function(){
var url2 = 'http://kuncilagu.s3.amazonaws.com/com.chordguitar/Chordbawah_001c.txt';
$.get(url2, function(data) {
$('#promokhususbawah').html(data);
     });
});
*************/

$(document).ready(function(){
var url2 = 'js/chordbawah.txt';
$.get(url2, function(data) {
$('#promokhususbawah').html(data);
     });
});