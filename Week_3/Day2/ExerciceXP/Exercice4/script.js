var rayon;
rayon= document.forms[0].elements.radius;


var volInp=document.forms[0].elements.volume;
document.forms[0].addEventListener("submit",vol );
function vol(r){
	r.preventDefault();
	var radius=rayon.value;
    var volum=(4/3*Math.PI)*(radius*radius*radius);
	volInp.value=volum;
}
