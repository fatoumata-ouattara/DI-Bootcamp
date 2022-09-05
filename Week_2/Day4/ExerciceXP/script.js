// Exercice 1 : Informations

console.log("**********Exercice1PartieI********** ");
//Créez une fonction appelée infoAboutMe()qui ne prend aucun paramètre.
//La fonction devrait console.log une phrase vous concernant (c'est-à-dire votre nom, votre âge, vos loisirs, etc.).
function infoAboutMe(){
	console.log("Mes informations : ");

	console.log("Je me nomme Fatim HOUEDE et j'ai 26 ans. J'adore coder!!");

}

infoAboutMe();

/*Créez une fonction appelée infoAboutPerson(personName, personAge, personFavoriteColor)qui prend 3 paramètres.
La fonction doit console.log une phrase sur la personne (c'est-à-dire "Vous vous appelez ..., vous avez .. ans, votre couleur préférée est ...")
Appelez la fonction deux fois avec les arguments suivants :
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")*/
console.log("**********Exercice1PartieII********** ");
function  infoAboutPerson(personName, personAge, personFavoriteColor){
  console.log("Je me nomme "+personName+"  "+ personAge+ " "+personFavoriteColor);
}

infoAboutPerson("Ami", 45, "Red");
infoAboutPerson("Jules", 12, "pink");

console.log("**********Exercice2********** ");
function calculateTip(){

	facture=Number(prompt("Quel est le montant de la facture ? "));
	pourboire=0;
	if(facture < 50){ pourboire= (facture*20)/100;
		facture= facture+pourboire;}
	else{ if(50<=facture || facture<200){pourboire= (facture*15)/100;
		facture= facture+pourboire;}
	     }
        if(facture>=200)
	             {pourboire= (facture*10)/100; 
	             	facture= facture+pourboire;
	             }
               
	console.log(" pourboire = "+ pourboire +" et facture = "+ facture);
}
calculateTip();
// Exercice 3 : Trouver Les Nombres Divisibles Par 23
//Créez un appel de fonction isDivisible()qui ne prend aucun paramètre.

console.log("***************Exercice3*****************")
function isDivisible(){ 
	var tab=0;
	var sum=0;
	for(var i =1; i<= 500; i++)
	{    
		
		if(i%23==0){
		tab= tab +" "+i ;

        sum=sum+i;
	
	}
		else{tab= tab;}
	}

		console.log("Outcome : "+ tab);
		console.log("Sum : "+ sum);
	
}

isDivisible();

//Bonus : Ajoutez un diviseur de paramètre à la fonction.
console.log("***********BONUS*************")

function isDivisible(divisor){ 
	var tab=0;
	var sum=0;
	for(var i =1; i<= 500; i++)
	{    
		
		if(i%divisor==0){
		tab= tab +" "+i ;

        sum=sum+i;
	
	}
		else{tab= tab;}
	}

		console.log("Outcome : "+ tab);
		console.log("Sum : "+ sum);
	
}
isDivisible(3);
isDivisible(45);

console.log("***************Exercice4*****************");

function myBill(){
	let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
    
} ; 

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10

} ;

let shoppingList=["banana", "orange", "apple"];
var prix=0;
for(var i in shoppingList){
	   for(var a in prices){
	   	if(shoppingList[i]==a){

		 	 prix=prix+prices[a];

		 	
		 	}
		 	else{prix=prix+0;}
		 
		 	 
		}
	}

	     console.log( "La shoppingList donne le prix de : "+prix); 

					


              }

myBill();
console.log("***************Exercice5*****************");
function changeEnough(itemPrice, amountOfChange){

	var quarters=0.25;
	var dimes = 0.10;
	var nickel= 0.05;
	var penny=0.01;

    var change=(amountOfChange[0]*0.25)+(amountOfChange[1]*0.10)+(amountOfChange[2]*0.05)+(amountOfChange[3]*0.01);

    if(change>itemPrice){
    		     console.log("Change = " +change +" > "+ itemPrice);
    	return true;}

    else{
    	     console.log("Change = " +change +" < "+ itemPrice);
    	return false;}

}


console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2,100,0,0])) ;
console.log(changeEnough(0.75, [0,0,20,5])) ;


console.log("***************Exercice6*****************");


function hotelCost(){
	var nbNuit=Number(prompt("Combien de nuit voulez vous passer a l'hotel?"));
	while(isNaN(nbNuit)|| nbNuit==""){
		nbNuit= prompt("Combien de nuit voulez vous passer a l'hotel?");
	}
	
			var totalPrice= nbNuit*140;
		    return totalPrice;
}

function planeRideCost(){
	var destination= prompt("Quelle est votre destination?");
	var pric=0;
	while(!isNaN(destination )|| destination==""){
		destination= prompt("Quelle est votre destination?");
	}

   switch(destination){
		case "london": pric=183;
		break;
		case "paris": pric= 220;
		break;
		default: pric=300 ;

	}

return pric;
}

function rentalCarCost(){

	var nbDay=Number(prompt("Combien de jours pour la voiture?"));
	var totalRent=0;
	
	while(isNaN(nbDay)|| nbDay==""){
		nbDay= prompt("Redonner un nombre correct!");}
	
		if(nbDay>10)
			{
			
			totalRent= (nbDay*40)-((nbDay*40)*0.05);
		}
		else{
			totalRent = nbDay*40;
		    
		}

return totalRent ;
}

function totalVacationCost(){

	console.log(" L'hotel coute : "+hotelCost()+" $");
	console.log(" Les billets d'avion coutent : "+planeRideCost()+" $");
	console.log(" La location de la voiture coute : "+rentalCarCost()+" $");
}

totalVacationCost();





