// Defis quotidien

var words = prompt("Put several words (separated by commas).");
var arr = words.split(/[,]/);
console.log(arr);
var long= arr.length;
console.log(arr[0].length);

function rect(){

	console.log("**********");

	var longest=0;
	var max=0;
	var b;
	var a;
for(i=0; i<long; i++){
	
	a=arr[i].length;
	if(a<3){ 
	console.log("* "+arr[i]+" "+"    *");
	}
	else{
		console.log("* "+arr[i]+" "+" *");
	}
}
console.log("**********");
}

rect();