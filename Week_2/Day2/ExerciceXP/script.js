//Exercice1

alert(" EXERCICE I");
console.log("EXERCICE 1")
let x = Number(prompt( " Entrez un premier nombre "));
let y = Number(prompt( " Entrez un second nombre "));

if(x==y){ alert(x +"= "+ y );

}
else{
	if (x<y) {
	console.log(y +" is the biggest number. ");
	}
	else(console.log(x+ " is the biggest number. "));
}



// Exercice2
alert(" EXERCICE II");
console.log("EXERCICE 2")

let newDog = "Chihuahua";
let nbrL= newDog.length;
console.log(nbrL);

console.log(newDog.toLowerCase());
console.log(newDog.toUpperCase());
if (newDog== "Chihuahua") {
	console.log("J'adore les Chihuahuas, c'est ma race de chien preferée.");

}

 else {
 	console.log("Je m'en fous, je préfère les chats.");
 }

 //Exercice3
 console.log("EXERCICE 3")
 alert(" EXERCICE III");

let a = Number(prompt( " Entrez un  nombre "));

if(a%2 ==0 ){

	console.log(a + " est paire");
}
else{ console.log(a +" est impaire");}


//EXERCICE 4
alert(" EXERCICE IV");
console.log("EXERCICE 4");
let users = ["Lea123" , " Princess45" , " cat&doglovers" , "helooo@000"];

if (users== 0) {

	console.log("No one is online.");

} 
if (users.length==1) {
	console.log(users[0] +" is online.");
} 

if (users.length==2) {
	console.log(users[0] +" and "+ users[1] + " are online .");
} 
else
{ if (users.length > 2)

 {
    console.log(users[0]+ "," + users[1] + " and "+ (users.length-2)+ " more are online.");
 }
}