// Defis quotidien


let sentence = prompt( "Entre une phrase");
let wordnot= sentence.indexOf('not') ;
let  wordbad = sentence.indexOf('bad') ;
let aCouper = sentence.slice( wordnot, (wordbad+3) );

if (wordnot< wordbad) { 
  let repl = sentence.replace(aCouper, "good");
  console.log("The result is : " + repl);
}
else
{
	console.log(sentence);
}


