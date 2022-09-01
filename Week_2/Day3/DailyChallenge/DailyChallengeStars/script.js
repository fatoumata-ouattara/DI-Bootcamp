//Avec une boucle
console.log("Affichage des etoiles a l'aide d'une boucle");
var e = " ";
for(var i =1; i<7; i++)
{  

	e=e+"*";
	console.log(e);
}

// Avec boucles imbriquées

console.log("Affichage des etoiles a l'aide de 2 boucles");
var etoile= "*";
for(var a = 1; a< 2; a++)
{

	console.log(etoile);
	for(var b = 1; b<6; b++)
	      {    etoile=etoile+"*";
		console.log(etoile);
	     }
}