//Obtenez la valeur de chacune des entrées dans le fichier HTML lorsque le formulaire est soumis. Se souvenir duevent.preventDefault()
let form=document.forms[0];
console.log(form);


form.addEventListener("submit",list );
function list(a){
	
	a.preventDefault();
	for(var i =0; i<6;i++){
		let span= document.createElement('span');
	    if(document.forms[0].elements[i].value==""){var x=document.forms[0].elements[i];

	    	x.setAttribute('required','remplire le champ vide');}
	    else{
	    span.innerHTML=document.forms[0].elements[i].value + " ";
		b=document.querySelector('p');
		b.appendChild(span);
	    }
		
	}

}

var pgh=document.querySelectorAll('p');
	var but=document.querySelectorAll('button')[1];
    but.onclick=function (){

    	for(var a=0;a<3; a++)
	{
	

}

}
