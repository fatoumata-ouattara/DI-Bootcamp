//EXERCICE 1

//Supprimer banane
let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift(); 
//trie par ordre alphabetique
fruits.sort();
//ajouter kiwi
fruits.push("Kiwi");
// supprimer apple

fruits.splice(0, 2, "Blueberries" );
//trie par ordre inverse
console.log(fruits.reverse());


//EXERCICE2
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0])
