//Exercice1


let people = ["Greg", "Mary", "Devon", "James"];
// Write code to remove “Greg” from the people array.
people.shift();
//Write code to replace “James” to “Jason”

people.splice(2, 1, "Jason");

//Write code to add your name to the end of the people array.
people.push("Fatim");
//Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log("Mary's index");
console.log(people.indexOf("Mary"));

/*Write code to make a copy of the people array using the slice method.
The copy should NOT include “Mary” or your name.
Hint: remember that now the people array should look like this let people = ["Mary", "Devon", "Jason", "Yourname"];
Hint: Check out the documentation for the slice method*/

newPeople=people.slice(1);
console.log("Index off Foo :  ");
//Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("Foo"));/* It return -1 because "Foo" is not a element of table people*/
//Create a variable called last which value is the last element of the array.
//Hint: What is the relationship between the index of the last element in the array and the length of the array?
people.push("last");
console.log(" index of last : ");
console.log(people.indexOf("last"));
console.log(" Length of people : ");
console.log(people.length);
// l'index de "last" égale a longueur du tableau + 1 : indexOfLast=4 et peopleLength=5.
console.log("*************************PartieII******************************");

//Partie II
console.log(" Loop on people : ");
for (var i of people) {
	console.log(i);
}
/* Using a loop, iterate through the people array and exit the loop after you console.log “Jason” . */
console.log(" break loop  to Jason : ");

for(var i of people){
	if(i==="Jason"){
		console.log(i);
		break;}
	else{
		console.log(i);
	}
}


//Exercice2
console.log("*********************Exercice2**********************************");
//Create an array called colors where the value is a list of your five favorite colors.
var colors=[ "red", "pink", "gray", "green", " yellow"];

//Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .

console.log(" My colors choice order : ");
var i= 0;
for( var x of colors)
{ 
    i++;

	console.log("My " + i + " Choice is "+ x);
    
}

//Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.

var suffix=[ "st", "nd", "rd", "th", "th"];
console.log(" --------------------------------           ");
console.log(" My colors choice with suffix : ");
var j= 0;
for( var a of colors)
{ 
    j++;
    var b;
    switch(j){
    	case 1 : b=suffix[0] ;
    	break;
    	case 2 : b=suffix[1] ;
    	break;
    	case 3 : b=suffix[2];
    	 break;
    	default: b=suffix[3];
    	 break;
    }
    
	console.log("My " + j + b +" Choice is "+ a);
    
}

console.log("*********************Exercice3**********************************");
//Exercice3
//Prompt the user for a number.
//Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
/*While the number is smaller than 10 continue asking the user for a new number.
Tip : Which while loop is more relevant for this situation?*/
var num;
 do
 { num = Number(prompt("Put a number"));
	type = typeof(num);
    
} while(num < 10 );
console.log(" Vous avez entre le nombre :"+num);

console.log("****************Exercice4********");
//Copy and paste the above object to your Javascript file.
let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}
//Console.log the number of floors in the building.
console.log("The number of floors in building is : "+building.numberOfFloors );

//Console.log how many apartments are on the floors 1 and 3.
console.log("There are : "+building.numberOfAptByFloor.firstFloor+" apartments  on the floors 1. ");
console.log("There are : "+building.numberOfAptByFloor.thirdFloor+" apartments  on the floors 3. ");
// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log("The second tenant is : "+ building.nameOfTenants[1]+" and  he has " + building.numberOfRoomsAndRent.dan[0] + " rooms.");
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

let sum = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];
console.log("the sum of Sarah's and David's rent is "+ sum);
let sumD =building.numberOfRoomsAndRent.dan[1] ;
if(sum> sumD )
{
   building.numberOfRoomsAndRent.dan[1]+=200; 
   console.log("the sum of Sarah's  and David's rent is bigger than Dan's rent : "+ sum );
   console.log("Dan's rent is now : " + building.numberOfRoomsAndRent.dan[1]);
}

//Exercice5
console.log("****************Exercice5********");

//Create an object called family with a few key value pairs.

let family = {
	pere:"salif",
	mere: "koro",
}
console.log(" key of family are : ");
for(var i in family){console.log(i);}
console.log(" Values of family are : ")
for(var i in family){console.log(family[i]);}

//Exercice6
console.log("****************Exercice6********");
//Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
};


for (var a in details){console.log(a+" "+details[a])}



//Exercice7
console.log("****************Exercice7********");
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.forEach(myFunction);

function myFunction(item, index, arr)
{
	arr[index]= item[0][0];
}

console.log("Tableau des premieres lettres : "+names);


console.log("Tableau trie par ordre alphabetique : "+ names.sort());

console.log("the name of their secret society is : "+ names.join(""));


