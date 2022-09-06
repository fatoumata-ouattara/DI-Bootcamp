let div= document.getElementById('container');
console.log(div.innerHTML);

//Remplacer le nom "pete" par "Richard"
 let elements = document.querySelectorAll('ul > li:last-child');
elements[0].innerHTML="Richard";

console.log(elements[0].innerHTML);
//Remplacer chaque element prenom des li par votre prenom
let prenom =  document.querySelectorAll('ul > li');
for(var i=0; i<prenom.length; i++)
{
	prenom[i].innerHTML='Fatim';

}
//Supprimer le li qui contient sarah

 let elemli = document.querySelectorAll('ul > li');
for(var i=0; i<elemli.length; i++)
{
	if(elemli[i].innerHTML=='Sarah'){
		var elem=elemli[i];
		elem.parentNode.removeChild(elem);

	}

	else{
		elem=elemli[i];
	}
}
	//Bonus

	//ajouter une classe aux deux ul
	let elemUl= document.querySelectorAll('ul');
	elemUl[0].classList.add('student_list');
	elemUl[1].classList.add('student_list');
   

    //

	elemUl[0].classList.add('university', 'attendance');
		 console.log(elemUl[0]);




