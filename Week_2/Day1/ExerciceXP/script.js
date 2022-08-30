//Exercice 1: Votre plat préféré
			/*Des Instructions
			Stockez votre nourriture préférée dans une variable.
			Enregistrez votre repas préféré de la journée dans une variable (c'est-à-dire petit-déjeuner, déjeuner ou dîner)
			Console.logI eat <favorite food> at every <favorite meal>*/

			     // Code
				        let food= "Foutou";
				        let mDay= "breakfast" ;
				       console.log("i eat "+ food +" at every "+ mDay);
                

/* .***************************************************************************************************************************************************.*/
//Exercice 2: series
		      /*Part I
				Using this array : let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
				1.Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
				2.Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
				For example : black mirror, money heist, and the big bang theory
				3.Console.log a sentence using both of the variables created above
				For example : I watched 3 series : black mirror, money heist, and the big bang theory*/
				//Code
				     let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
					 let myWatchedSeriesLength = myWatchedSeries.length;
					 let myWatchedSeriesSentence = myWatchedSeries.toString();
					 console.log( "i watched "+ myWatchedSeriesLength + " series : " + myWatchedSeriesSentence + ".");
				       

				/*Part II
					1.Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
					2.Add, at the end of the array, the name of another series you watched.
					3.Add, at the beginning of the array, the name of your favorite series.
					4.Delete the series “black mirror”.
					5.Console.log the third letter of the series “money heist”.
					6.Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.*/

                 //code

                 		myWatchedSeries[2] = "friends"
                 		myWatchedSeries.push("Legacies")
                 		myWatchedSeries.unshift("Girl Boy and etc")/*"Girl Boy and etc" is in index 0*/
                 		myWatchedSeries.splice(1,1)
                 		console.log(myWatchedSeries[1][2])/*"money heist" is in index 1 because we remove "black mirror" and it's third letter is "n*/
   						console.log(myWatchedSeries) /* ["Girl Boy and etc", "money heist", "friends", "Legacies"]*/

/*.********************************************************************************************************************************************************************************************.*/


// Exercice 3 : Le Convertisseur De Température
			/*Des Instructions
			Stocker une température Celsius dans une variable.

			Convertissez-le en fahrenheit et console.log <temperature>°C is <temperature>°F.
			Astuce : Devriez-vous créer une autre variable pour maintenir la température en Fahrenheit ? (ex. point 2)
			Astuce : Pour convertir une température de Celsius en Fahrenheit : Divisez-la par 5, puis multipliez-la par 9, puis ajoutez 32*/
					//code

						let cels= 29
						let fahr= (((cels/5)*9)+32)
						console.log(cels + " °C " + " = "+ fahr +" °F") /* 29 °C = 84,1999 °F */


/*.******************************************************************************************************************************************************************************************************.*/
//Exercice 4 : Devinez Les Réponses #1
			/*Des Instructions
			Pour chaque expression, prédisez ce que vous pensez que la sortie sera dans un commentaire ( //) sans exécuter la commande au préalable.
			Bien sûr, expliquez chaque prédiction.
			Exécutez ensuite l'expression dans la console. Notez la sortie réelle dans un commentaire et comparez-la avec votre prédiction.
			Quel sera le résultat de a + b dans la première expression ?
			Quel sera le résultat de a + b dans la seconde expression ?
			Quelle est la valeur de c?
			Analysez le code ci-dessous, quel sera le résultat ?
			console.log(3+4+'5');
			*/

				//Code

					    let c;
					    let a = 34;
					    let b = 21;
					    console.log(a+b) //first expression
					    // Prediction: la reponse sera 55 car a et b sont des nombres
					    // Actual: 55
					    a = 2;
					    console.log(a+b) //second expression
					    // Prediction: En sortie on aura 23 car la valeur de a est 2 maintenant. 2 a écraser 34. Notons aussi que a, b  sont des nombres.
					    // Actual: 23

					    /* c a été declaré mais n'a pas reçue d'affectation de valeur. elle est indefinie*/

					    console.log(3+4+'5'); /*  le resultat sera "75 " car 3 et 4 etant des nombres donneront 7 et '5' etant un caractère va se concatener a 7 */


/*.******************************************************************************************************************************************************************************************************.*/

//Exercice 5 : Devinez Les Réponses #2
				/*Des Instructions
				Pour chaque expression, prédisez ce que vous pensez que la sortie sera dans un commentaire ( //) sans exécuter la commande au préalable.
				Bien sûr, expliquez chaque prédiction.
				Exécutez ensuite l'expression dans la console. Notez la sortie réelle dans un commentaire et comparez-la avec votre prédiction.*/

				//code

					   console.log(typeof(15))
						// Prediction: number
						// Actual: Number

						console.log(typeof(5.5))
						// Prediction: decimal
						// Actual: Number
						console.log(typeof(NaN))
						
						// Prediction: object
						// Actual: Number
						console.log(typeof("hello"))
					
						// Prediction: string
						// Actual: String

						console.log(typeof(true))
						// Prediction: boolean
						// Actual:boolean
						console.log(typeof(1 != 2))
					
						// Prediction: boolean
						// Actual: boolean

					    console.log("hamburger" + "s")	
						// Prediction: hamburgers 
						// Actual: "hamburgers"

						console.log("hamburgers" - "s")
						// Prediction: hamburger
						// Actual: NaN

						console.log("1" + "3")
						// Prediction: "13" car on a 1 et 3 comme chaines de caractères
						// Actual: "13"

						console.log("1" - "3")
						// Prediction: NaN 
						// Actual: -2

						console.log("johnny" + 5)
						// Prediction: johnny5 car on a là une concatenation des elements
						// Actual: "johnny5"

						console.log("johnny" - 5)
						// Prediction:  impossible car insensé
						// Actual: NaN

						console.log(99 * "hello")
						// Prediction: impossible
						// Actual: NaN

						console.log(1 != 1)
						// Prediction: false
						// Actual: false

						console.log(1 == "1")						// Prediction: impossible car 1 ne peut pas etre egale a un caractere
						// Actual: true

						console.log(1 === "1")
						// Prediction: impossible car === n'est pas sensé
						// Actual: false



//Exercice 6 : Devinez Les Réponses #3
					/*Des Instructions
					Pour chaque expression, prédisez ce que vous pensez que la sortie sera dans un commentaire ( //) sans exécuter la commande au préalable.
					Bien sûr, expliquez chaque prédiction.
					Exécutez ensuite l'expression dans la console. Notez la sortie réelle dans un commentaire et comparez-la avec votre prédiction.
					Quelle est la sortie de chacune des expressions ci-dessous ?*/						

					console.log(5 + "34")
					// Prediction:534,  5 est un nombre et 34 une chaine de caractère donc on a une concatenation
					// Actual: 534

					console.log(5 - "4")
					// Prediction: 1 car l'operateur - considère "4" comme un nombre
					// Actual: 1

					console.log( 10 % 5)				
						// Prediction: 0 car le resultat est le reste de la division de 10 par 5
					// Actual: 0

					console.log(5 % 10)
					// Prediction: 5 , le reste de la division de 5 par 10 donne 0 et il reste 5
					// Actual:5

					console.log("Java" + "Script")
					// Prediction:JavaScript
					// Actual:" javascript"

					console.log(" " + " ")
					// Prediction: rien
					// Actual: neant

					console.log(" " + 0)
					// Prediction: 0
					// Actual:0

					console.log(true + true)
					// Prediction: true
					// Actual: 2

					console.log(true + false)
					// Prediction: impossible
					// Actual: 1

					console.log(false + true)
					// Prediction: 1 / false est definie comme 0 et true 1
					// Actual: 1

					console.log(false - true)
					// Prediction: -1 / false est definie comme 0 et true 1
					// Actual: -1

					console.log(!true)
					// Prediction: false / l'opposé de true est false
					// Actual: false

					console.log(3 - 4)
					// Prediction: -1  / 3 et 4 sont des nombres 
					// Actual: -1

					console.log("Bob" - "bill")
					// Prediction: impossible
					// Actual: NaN
