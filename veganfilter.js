
target2 = document.getElementsByClassName("lazy-loaded");


setInterval(function() {
   for(i=0; i<target2.length ; i++){
	   var x = target2[i]
	   target2[i].parentNode.removeChild(target2[i]);
   }
}, 400);



