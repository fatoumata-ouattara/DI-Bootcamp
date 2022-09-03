var nbr=Number(prompt("Entrer un nombre de bouteille"));
var sub=0;
var rest=0;
while(nbr!=0)
{
   if(nbr>sub){
    console.log(nbr+" bouteilles de biere au mur");
    console.log(nbr+" bouteilles de biere");
    sub=sub+1;
          if(sub==1){console.log("Prenez-en "+ sub+" passez-la autour de vous");
                   }
	else{console.log("Prenez-en "+ sub+" passez-les autour de vous");}
    rest=nbr-sub;
    console.log(rest+" bouteilles de biere au mur");
    nbr=rest;
    console.log(" ------------------------------");}
    else{
    console.log(nbr+" bouteilles de biere au mur");
    console.log(nbr+" bouteilles de biere");
    sub=nbr;
    console.log("Prenez-en "+ sub+" passez-les autour de vous");
    rest=nbr-sub;
    console.log(rest+" bouteilles de biere au mur");
    nbr=rest;
    }
   

}