/*Dans le fichier js, créez un tableau appelé allBooks. Il s'agit d'un tableau d'objets. Chaque objet est un livre qui possède 4 clés (soit 4 propriétés) :
Titre,
auteur,
image : une url,
déjàRead : qui est un booléen (vrai ou faux).*/
var allBooks = [
book1={
	"Titre": "Triomphe",
	"auteur": "Issouf Go",
	"image":"http://news.aouaga.com/h/18209.html",
	"dejaRead": true,
	}
	
,book2={
	"Titre": "Une si longue lettre",
	"auteur": "Mariama Ba",
	"image":"https://mediatheques-ifbf.org/index.php?lvl=notice_display&id=5336",
	"dejaRead": true,
	}
, book3={
	"Titre": "Vacances sorcieres ",
	"auteur": "Catherine",
	"image":"https://www.babelio.com/livres/Missonnier-Vacances-sorcieres/148053",
	"dejaRead": false,
	}
];
var tableau= document.createElement("table");
var tr= document.createElement('tr');
tableau.appendChild(tr);
var thC= document.querySelector('td');
var td0= document.createElement('td');
td0.innerHTML= 'Titre';
tr.appendChild(td0);


for(var i=0; i<3; i++)
{
var td= document.createElement('td');
td.innerHTML= allBooks[i].Titre;
tr.appendChild(td);	

}

var tr2= document.createElement('tr');
tableau.appendChild(tr2);
var td1= document.createElement('td');
td1.innerHTML= 'Auteur';
tr2.appendChild(td1);


for(var i=0; i<3; i++)
{
var td2= document.createElement('td');
td2.innerHTML= allBooks[i].auteur;
tr2.appendChild(td2);	

}

var tr3= document.createElement('tr');
tableau.appendChild(tr3);
var td2= document.createElement('td');
td2.innerHTML= 'Lu?';
tr3.appendChild(td2);


for(var i=0; i<3; i++)
{
var td= document.createElement('td');
td.innerHTML= allBooks[i].dejaRead;
tr3.appendChild(td);	

}




var myDiv= document.querySelector('div');
myDiv.appendChild(tableau);
var node=document.querySelector('table');
node.setAttribute('style'," border-collapse: collapse ;border: solid 1px; width: 400px; heigth: 500px");
var node2=document.querySelectorAll('td');
for(var i=0; i<12;i++){
node2[i].setAttribute('style'," border: solid blue;");
}












