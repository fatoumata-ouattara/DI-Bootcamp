//Exercice1
console.log("*************Exercice1**********");
let pere ={
	nom : "Kone",
	prenom : "Moussa",
	masse : 85,
	taille :  1.80,
	pereImc:function(){
	  return this.masse/this.taille;
	}
};
let x=pere.pereImc();

let mere ={
	nom : "Traore",
	prenom : "Fany",
	masse : 56,
	taille : 1.65,
	mereImc:function(){
	  return this.masse/this.taille;
	}

}
let y=mere.mereImc();

function compareImc(a,b){
	 if(a<b){
	 	max=b;
	 }
	 else{ max=a}
	  return max;
}

console.log("Les deux IMC sont :");

console.log(" Pour pere : "+x +" et"+ " pour mere : "+ y);

if( compareImc(x,y)==x){console.log("L'IMC de "+ pere.nom+" "+pere.prenom +" le pere est le plus eleve.");}
else{console.log("L'IMC de "+ mere.nom+" "+mere.prenom +" la mere est le plus eleve.")}

	//Exercice2
console.log("*************Exercice2**********");
let note= [40, 100,8, 18,135, 75, 62,10];
console.log("Calcul de la moyenne de notes: ");
function findAvg(gradesList){
			grad=0;
		for(i=0; i<gradesList.length; i++){
			grad = grad+ gradesList[i];
		}
		var moy= grad/gradesList.length;
		console.log("La moyenne est : "+ moy);
		if (moy>65){
			console.log("Vous avez reussi!!!");
		}
		else{
			console.log("Vous avez Echoue , veuillez reprendre les cours!!!");
		}
}

findAvg(note);