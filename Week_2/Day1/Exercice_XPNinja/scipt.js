//Exercice 1

    console.log(5 >= 1) ;
    // prediction: false, car 5 est superieure à 1 mais pas égal à 1
    // actual: true 
    //prediction # actual
    console.log( 0 === 1);
    // prediction: false
    // actual: false
    //prediction = actual
    console.log(4 <= 1);
    // prediction: false, car 4 n'est pas inferieure à 1 et pas égal à 1
    // actual: false
    //prediction = actual

    console.log(1 != 1) ;
    // prediction: false,1 n'est pas different de 1
    // actual: false
    //prediction = actual

    console.log("A" > "B");
    // prediction: false, on a affaire a des chaines de caractères
    // actual: false car on a affaire a du code ascii (A=065 et B=066)
    //prediction = actual
    console.log("B" < "C");

// prediction: false, on a affaire a des chaines de caractères
    // actual: true car (B= 066 et C=067)
    //prediction # actual
    console.log("a" > "A");

    // prediction: true car a= 097 et A= 065
    // actual: true  car a>A
    //prediction = actual

    console.log( "b" < "A");
    // prediction: false, b= 098 et A = 065
    // actual: false b>A
    //prediction = actual

    console.log(true === false);
    // prediction: false, 
    // actual: false
    //prediction = actual

    console.log(true != true);
    // prediction: false
    // actual: false
    //prediction = actual