
//Exercice1

let sentence = ["my","favorite","color","is","blue"];
console.log(sentence.join(" "));

//Exercice2
/*Créez 2 variables. Les valeurs doivent être des chaînes. Par exemple:*/

let str1 = "mix";
let str2 = "pod";
let x= str1.slice(0, 2);
let y= str2.slice(0,2);
str1.replace(x, y);
console.log(str1.replace(x, y));
console.log(str2.replace(y, x));

let concat = str1 + " "+ str2;
console.log(concat);

//Exercice3

let num1= Number(prompt( "Veuillez entrer un nombre"));
console.log(typeof(num1));

let num2= Number(prompt("Le second nombre svp")) ;
alert(num1+num2);


