
console.log("***********Part1************")
function stTimeout(phrase) {
  alert( phrase);
}

setTimeout(stTimeout,2000,"Hello world" );

console.log("************Part2*************")


function stT(sentence) {
  var monDiv=document.getElementById('container');
  var monP=document.createElement('p');
  monP.innerHTML=sentence
  monDiv.appendChild(monP);
}

setTimeout(stT, 2000,"Hello world" );


console.log("***********Part3************");
/* Dans votre fichier Javascript, à l'aide de setInterval, appelez une fonction toutes les 2 secondes.
La fonction ajoutera un nouveau paragraphe <p>Hello World</p>au fichier <div id="container">.
L'intervalle sera effacé (c'est-à-dire clearInterval), lorsque l'utilisateur cliquera sur le bouton.
Au lieu de cliquer sur le bouton, l'intervalle sera effacé (c'est-à-dire clearInterval) dès qu'il y aura 5 paragraphes à l'intérieur du <div id="container">.*/

var setIn= setInterval(stT("Hello World ."), 2000);
console.log(setIn);
var bouton= document.getElementById('clear');
bouton.onclick=function(){

	clearInterval(setIn);
}



