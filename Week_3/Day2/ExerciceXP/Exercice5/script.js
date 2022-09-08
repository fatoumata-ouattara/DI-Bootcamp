
var img=document.querySelectorAll('img');

	
    img[0].onmouseover=function (){
	img[0].setAttribute('style', "border: solid 60px pink");}
	img[0].onmouseout=function (){
	img[0].setAttribute('style', "border: none");}

	img[0].onmouseover=function (){
	img[0].setAttribute('style', "border: solid 60px pink");}
	img[0].onmouseout=function (){
	img[0].setAttribute('style', "border: none");}

    var but3=document.querySelectorAll('button')[1];
    
    but3.onclick=function (){
    	for(var i=2; i<4;i++){
	img[i].setAttribute('style', "display:none");

	}
}

var but=document.querySelectorAll('button')[0];
    but.ondblclick=function (){

	img[1].setAttribute('style', "width:200px; border: dashed 10px blue");
	img[0].setAttribute('style', "width:200px");



}

