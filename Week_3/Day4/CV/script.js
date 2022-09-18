var img=document.getElementsByTagName('img')[0];
img.onmouseover=function (){
	img.setAttribute("style",'width:300px; border:solid red 5px');
}

img.onmouseout=function () {
	img.setAttribute("style",'width:200px; ');
}