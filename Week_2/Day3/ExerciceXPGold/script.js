//Exercice1 divisible par 3

console.log("**********Exercice1***********");
let numbers=[123, 8409, 100053, 333333333, 7];
console.log("Parcourrons le tableau :" );

numbers.forEach(myFunction);

function myFunction(item, ind, arr )
{
	if(item%3==0)
	{
	arr[ind]= item/3;
	console.log(true);
	console.log(item+" est  divisible par 3 et donne "+ item/3 );
    }
    else{
    	console.log(false);
    	console.log(item+" n'est pas divisible par 3 dans le tableau.");
    	arr[ind]= item+"/3";
    }

} 
 console.log("Recapitulatif du tableau avec les nombres divises par 3 : "+numbers);

console.log("**********Exercice2***********");
let guestList= {

	randy : " Germany",
	karla : "France",
	wendy : " Japan",
	norman: " England",
	sam : " Argentina",
}

let invit = prompt("Entrez votre nom : ");


if (invit in guestList ){
		console.log("Hi! i'm "+ invit +","+ " and i'm from "+ guestList[invit]);
 
	     }
	else{
		console.log("Vous n'etes pas sur la liste! ");
	}

console.log("**********Exercice3***********");

let age =[ 20,5,12,43,98,55];
var sum= 0;
for(var i=0; i<age.length; i++)
{
	sum= sum+age[i];
	var x = age[i];
	var y= [age[i+1]];
	if(x<y){
		var ageElev = y;}
	
}

console.log("La somme des ages est : "+ sum);
console.log("L'age le plus eleve est :"+ ageElev);
