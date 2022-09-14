//Exercice1
//À l'aide d'une propriété DOM, récupérez le h1et console.log.
var myH1= document.querySelector('h1');
console.log(myH1.innerHTML);
var paragh= document.querySelectorAll('p');
//À l'aide des méthodes DOM, supprimez le dernier paragraphe de la <article>balise.
paragh[paragh.length-2].remove();
//Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
var h2=document.querySelector('h2');
var but= document.createElement('button');
but.innerHTML='Click ici';
h2.appendChild(but);
but.onclick=function clic(){
       h2.setAttribute('style',"background-color:pink");
}

//Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

var but2=document.createElement('button');
var h3=document.querySelector('h3');
but2.innerHTML='click me';
h3.appendChild(but2);
but2.onclick=function clic2(){
	h3.setAttribute('style', "display:none");
}

//Ajoutez un <button>au fichier HTML qui, une fois cliqué dessus, devrait mettre le texte de tous les paragraphes en gras.

var but3=document.createElement('button');
var pgh=document.querySelectorAll('p');
but3.innerHTML='Met en gras';
var art=document.querySelector('article');
art.appendChild(but3);

    var art=document.querySelector('article');
    art.appendChild(but3);
	var art=document.querySelector('article');
	
    but3.onclick=function clic3(){

    	for(var a=0;a<pgh.length-1; a++)
	{
	pgh[a].setAttribute('style', "font-weight:bold");

}

}

//bonus

//Exercice2

//Récupérez le formulaire et consolez-le.
let form=document.forms[0];
console.log(form);
//Récupérez les entrées par leur identifiant et console.log les.
let elem1=form.elements.fname;
console.log(elem1);
let elem2=form.elements.lname;
console.log(elem2);
let elem3=form.elements.submit;
console.log(elem3);
//Récupérez les entrées par leur nameattribut et console.log les.
console.log(elem1.name);
console.log(elem2.name);
console.log(elem3.name);

/*Lorsque l'utilisateur soumet le formulaire (c'est-à-dire submitécouteur d'événement)
utiliser event.preventDefault(), pourquoi ?
obtenir les valeurs des balises d'entrée,
assurez-vous qu'ils ne sont pas vides,
créer une livaleur par entrée,
puis ajoutez-les à un <ul class="usersAnswer"></ul>, sous le form.*/
form.addEventListener("submit",list );
function list(a){
	
	alert("why");
	a.preventDefault();
	for(var i =0; i<2;i++){
		let li= document.createElement('li');
	    if(document.forms[0].elements[i].value==""){var x=document.forms[0].elements[i];

	    	x.setAttribute('required','remplire le champ vide');}
	    else{
	    li.innerHTML=document.forms[0].elements[i].value;
		ul=document.querySelector('ul');
		ul.appendChild(li);
	    }
		

	}

}

//Exercice3
var  allBoldItems;
function getBold_items(){
		var allBoldItems= document.querySelectorAll('p> strong');
         return allBoldItems;
}

allBoldItems=getBold_items();

function highlight(es){
      for(var e of es)
      {
      	e.style.color='blue';
      }
}


function return_normal(es){
      for(var e of es)
      {
      	e.style.color='black';
      }
}

var par=document.querySelectorAll('p');
var parLast=par[par.length-1];
console.log(parLast);
parLast.onmouseover=function(){highlight(allBoldItems)} ;
parLast.onmouseout=function(){return_normal(allBoldItems)} ;
