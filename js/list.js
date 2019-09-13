/************
$(document).ready(function(){
var url = 'http://kuncilagu.s3.amazonaws.com/com.chordguitar/list_admob_001c.txt';
$.get(url, function(data) {
$('#azlistatas').html(data);
     });
});
*************/



$(document).ready(function(){
var dtnow = new Date();
var tmnow = dtnow.getTime();
var tmnext = dtnow.getTime()+300000;

var tmnextfreeOneHourAccess = dtnow.getTime()+1800000;
if (!localStorage.getItem("freeOneHourAccess") || localStorage.getItem("freeOneHourAccess") == '') { localStorage.setItem("freeOneHourAccess", tmnextfreeOneHourAccess);}

if ((!sessionStorage.getItem("admobOnceTime") || sessionStorage.getItem("admobOnceTime") < tmnow) && localStorage.getItem("freeOneHourAccess") < tmnow) {
sessionStorage.setItem("admobOnceTime", tmnext); 

var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) 
{ admobid = { banner: 'ca-app-pub-6516367932506481/2416247460', interstitial: 'ca-app-pub-6516367932506481/7643208669' };} 
else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) 
{ admobid = { banner:'ca-app-pub-6516367932506481/5939919061', interstitial:'ca-app-pub-6516367932506481/5800318264' };} 
else 
{ admobid = { banner:'', interstitial:'' };}


if((/(android|ipad|iphone|ipod)/i.test(navigator.userAgent))){document.addEventListener('deviceready', initApp, false);} else { initApp(); }
function initApp() {AdMob.prepareInterstitial({adId: admobid.interstitial,autoShow: true});}

}
});
