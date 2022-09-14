

document.getElementById('inp').onkeyup=function() {myf()};
function myf(){
	var input=document.getElementById('inp').value;
	
	    if( isNaN(input)) {
	    	
			document.querySelector('p').innerHTML=input;
	      }
	else{
		alert("pas de nombre!! ");

		}
}	