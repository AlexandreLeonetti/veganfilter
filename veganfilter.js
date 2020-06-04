
target2 = document.getElementsByClassName("lazy-loaded");


console.log(target2);
setInterval(function() {
   for(i=0; i<target2.length ; i++){
	   var x = target2[i]
	   target2[i].parentNode.removeChild(target2[i]);
	   console.log("deleted" );
	   console.dir(target2[i]);
   }
   console.log(target2);

}, 400);



