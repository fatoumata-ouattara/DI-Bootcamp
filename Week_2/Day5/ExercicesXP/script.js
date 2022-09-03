console.log("************EXERCICE1****************");
console.log("---------------PartieI-----------------");
function playTheGame(){
	

       
 confirMessg()

}




function confirMessg(){

	if(confirm("Voulez vous jouer au jeux?"))
	{ trueRep();}
else{
	alert("Pas de probleme! Au revoir!!");
}
}


function trueRep(){
	var num=[0,1,2,3,4,5,6,7,8,9,10];
	var nbr=prompt(" Entrer un nombre entre 0 et 10");
	if(isNaN(nbr)){
		console.log("Desole, pas un numero, au revoir.");}
	else{
		
		if(nbr in num){
			var computerNumber= Math.floor(Math.random()*10);
			console.log(computerNumber);

			 compareNumbers(nbr,computerNumber);
             }
             else{ alert(" Ce n'est pas un bon chiffre!");}

         }
     

}
//partie2

function compareNumbers(userNumber,computerNumber){
	if( userNumber==computerNumber)
		{alert("WINNER ");}
    else{

       if(userNumber>computerNumber)
       {
       	alert("Votre numero est plus grand que celui de l'ordinateur!");
       
		  for(var i=0; i<2; i++){
       	   devineAnouveau(userNumber,computerNumber);}  
           
        }
       else{
             alert("Votre numero est plus petit que celui de l'ordinateur!");
              for(var i=0; i<2; i++){
       	   devineAnouveau(userNumber,computerNumber);}
       }



    }

}

function devineAnouveau(us,comp){
	us=prompt("Deviner a nouveau");

	if( us==comp)
		{alert("WINNER ");}
    else{

       if(us>comp)
       {
       	alert("Votre numero est plus grand que celui de l'ordinateur!");}
		
       else{
             alert("Votre numero est plus petit que celui de l'ordinateur!");

       }



    }

}

