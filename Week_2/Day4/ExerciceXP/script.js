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

console.log("***************Exercice4*****************")


function myBill() {


	var stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
    
} ; 

var prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10

} ;

var shop;
var i;
var sum=0;
var shoppingList= ["banana", "orange", "apple"];
	
	for(  i=0; i< shoppingList.length ; i++)

		{
             
			if(shoppingList[0] in Object.keys(stock))
			{

			var shop=shoppingList[i];
			 var sum= sum + prices.banana;    

			}
			else{
					sum=sum+0;
			}
			

		}
console.log(sum );
     return sum;
}


myBill();

console.log("***************Exercice5*****************")
