//Créez un tableau dont la valeur est les planètes du système solaire.
var planetTab=['lune', 'soleil','pluton','venus','terre','jupiter','neptune','saturne','mercure','uranus','mars'];
var planetMoon=[pluton={"moon":1},
venus={"moon":0},
terre={"moon":1},
jupiter={"moon":4},
neptune={"moon":1},
saturne={"moon":6},
mercure={'moon':0},
uranus={"moon":5},
mars={"moon":2}];
function nbM(nb){
	for(var b=0; b<nb;b++){
    var divPl= document.createElement('section');
	divPl.setAttribute('class','moon');
	let mySection= document.querySelector('section');  
	mySection.appendChild(divPl);  
	}
}


for(var i=0;i<planetTab.length; i++)
{
	var divPlanet= document.createElement('div');
	divPlanet.setAttribute('class','planet');
	var planetN=divPlanet.innerHTML=planetTab[i];
	let mySection= document.querySelector('section');
    mySection.appendChild(divPlanet);
    if(planetN=="lune"|| planetN=="soleil"|| planetN=="mercure"|| planetN=="venus"){
    	var divPlm= document.createTextNode('Pas de lune');     
	    mySection.appendChild(divPlm);  
    }
    else{
    	nbM(2);
    }

   
}




var planet1= document.createElement('style');
planet1=planet1.setAttribute('style',"backgroundColor:gray");
var planetDiv= document.getElementsByTagName("div");
planetDiv[0].style.backgroundColor="gray";
planetDiv[1].style.backgroundColor="yellow";
planetDiv[2].style.backgroundColor="violet";
planetDiv[3].style.backgroundColor="green";
planetDiv[4].style.backgroundColor="blue";
planetDiv[5].style.backgroundColor="pink";
planetDiv[6].style.backgroundColor="purple";
planetDiv[7].style.backgroundColor="red";
planetDiv[8].style.backgroundColor="orange";
planetDiv[9].style.backgroundColor="gold";
planetDiv[10].style.backgroundColor="lightblue";


//Bonus


