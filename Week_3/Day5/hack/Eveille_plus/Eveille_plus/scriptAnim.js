var anInp= document.querySelector('input');
var anButton= document.querySelectorAll('button')[0];
document.querySelectorAll('i')[0].setAttribute("style",'display:none');
document.querySelectorAll('i')[1].setAttribute("style",'display: none');
document.querySelectorAll('input')[0].setAttribute("style",' margin-top:230px; width:190px;text-align: center ')
anButton.onclick=function(){
	if(document.querySelectorAll('input')[0].value==""||document.querySelectorAll('input')[0].value!="chien" )
	{
      document.querySelectorAll('i')[0].setAttribute("style",'display:none');
      document.querySelectorAll('i')[1].setAttribute("style",'display:block;color: red; font-size: 100px ; ');
      	document.querySelectorAll('input')[0].setAttribute("style",'display:none ');
      	      	document.querySelectorAll('button')[0].setAttribute("style",'display:none');

       }
      else{
       	 document.querySelectorAll('i')[1].setAttribute("style",'display: none');
       	 document.querySelectorAll('i')[0].setAttribute("style",'display:block; color: green; font-size: 150px');
      	document.querySelectorAll('input')[0].setAttribute("style",'margin-top: 2px; width:190px;text-align: center ')
      	document.querySelectorAll('input')[0].setAttribute("style",'display:none ');
      	document.querySelectorAll('button')[0].setAttribute("style",'display:none');

      		
      		
       }
	}
      //2em animal
      var anButton2= document.querySelectorAll('button')[1];
  document.querySelectorAll('i')[2].setAttribute("style",'display:none');
document.querySelectorAll('i')[3].setAttribute("style",'display: none');
document.querySelectorAll('input')[1].setAttribute("style",' margin-top:230px; width:190px;text-align: center ')
anButton2.onclick=function(){
	if(document.querySelectorAll('input')[1].value==""||document.querySelectorAll('input')[1].value!="poule" )
	{
      document.querySelectorAll('i')[2].setAttribute("style",'display:none');
      document.querySelectorAll('i')[3].setAttribute("style",'display:block;color: red; font-size: 100px ; ');
      	document.querySelectorAll('input')[1].setAttribute("style",'display:none ');
      	 document.querySelectorAll('button')[1].setAttribute("style",'display:none');
      	 	

      	

       }
      else{
       	 document.querySelectorAll('i')[3].setAttribute("style",'display: none');
       	 document.querySelectorAll('i')[2].setAttribute("style",'display:block; color: green; font-size: 150px');
      	document.querySelectorAll('input')[1].setAttribute("style",'margin-top: 2px; width:190px;text-align: center ')
      	document.querySelectorAll('input')[1].setAttribute("style",'display:none ');
      	document.querySelectorAll('button')[1].setAttribute("style",'display:none');

      		
       }
	}

//3em block
      var anButton3= document.querySelectorAll('button')[2];
  document.querySelectorAll('i')[4].setAttribute("style",'display:none');
document.querySelectorAll('i')[5].setAttribute("style",'display: none');
document.querySelectorAll('input')[2].setAttribute("style",' margin-top:230px; width:190px;text-align: center ')
anButton3.onclick=function(){
	if(document.querySelectorAll('input')[2].value==""||document.querySelectorAll('input')[2].value!="chat" )
	{
      document.querySelectorAll('i')[4].setAttribute("style",'display:none');
      document.querySelectorAll('i')[5].setAttribute("style",'display:block;color: red; font-size: 100px ; ');
      	document.querySelectorAll('input')[2].setAttribute("style",'display:none ');
      	 document.querySelectorAll('button')[2].setAttribute("style",'display:none');
      	 }
      else{
       	 document.querySelectorAll('i')[5].setAttribute("style",'display: none');
       	 document.querySelectorAll('i')[4].setAttribute("style",'display:block; color: green; font-size: 150px');
      	document.querySelectorAll('input')[2].setAttribute("style",'margin-top: 2px; width:190px;text-align: center ')
      	document.querySelectorAll('input')[2].setAttribute("style",'display:none ');
      	document.querySelectorAll('button')[2].setAttribute("style",'display:none');

      	
       }
	}


	//4em block
      var anButton4= document.querySelectorAll('button')[3];
  document.querySelectorAll('i')[6].setAttribute("style",'display:none');
document.querySelectorAll('i')[7].setAttribute("style",'display: none');
document.querySelectorAll('input')[3].setAttribute("style",' margin-top:230px; width:190px;text-align: center ')
anButton4.onclick=function(){
	if(document.querySelectorAll('input')[3].value==""||document.querySelectorAll('input')[3].value!="cheval" )
	{
      document.querySelectorAll('i')[6].setAttribute("style",'display:none');
      document.querySelectorAll('i')[7].setAttribute("style",'display:block;color: red; font-size: 100px ; ');
      	document.querySelectorAll('input')[3].setAttribute("style",'display:none ');
      	 document.querySelectorAll('button')[3].setAttribute("style",'display:none');
      	 	

       }
      else{
       	 document.querySelectorAll('i')[7].setAttribute("style",'display: none');
       	 document.querySelectorAll('i')[6].setAttribute("style",'display:block; color: green; font-size: 150px');
      	document.querySelectorAll('input')[3].setAttribute("style",'margin-top: 2px; width:190px;text-align: center ')
      	document.querySelectorAll('input')[3].setAttribute("style",'display:none ');
      	document.querySelectorAll('button')[3].setAttribute("style",'display:none');
       }
	}



	//5em block
      var anButton5= document.querySelectorAll('button')[4];
  document.querySelectorAll('i')[8].setAttribute("style",'display:none');
document.querySelectorAll('i')[9].setAttribute("style",'display: none');
document.querySelectorAll('input')[4].setAttribute("style",' margin-top:230px; width:190px;text-align: center ')
anButton5.onclick=function(){
	if(document.querySelectorAll('input')[4].value==""||document.querySelectorAll('input')[4].value!="chèvre" )
	{
      document.querySelectorAll('i')[8].setAttribute("style",'display:none');
      document.querySelectorAll('i')[9].setAttribute("style",'display:block;color: red; font-size: 100px ; ');
      	document.querySelectorAll('input')[4].setAttribute("style",'display:none ');
      	 document.querySelectorAll('button')[4].setAttribute("style",'display:none');

      	

       }
      else{
       	 document.querySelectorAll('i')[9].setAttribute("style",'display: none');
       	 document.querySelectorAll('i')[8].setAttribute("style",'display:block; color: green; font-size: 150px');
      	document.querySelectorAll('input')[4].setAttribute("style",'margin-top: 2px; width:190px;text-align: center ')
      	document.querySelectorAll('input')[4].setAttribute("style",'display:none ');
      	document.querySelectorAll('button')[4].setAttribute("style",'display:none');

      		
       }
	}


	//6em block
      var anButton6= document.querySelectorAll('button')[5];
  document.querySelectorAll('i')[10].setAttribute("style",'display:none');
document.querySelectorAll('i')[11].setAttribute("style",'display: none');
document.querySelectorAll('input')[5].setAttribute("style",' margin-top:230px; width:190px;text-align: center ')
anButton6.onclick=function(){
	if(document.querySelectorAll('input')[5].value==""||document.querySelectorAll('input')[5].value!="ane" )
	{
      document.querySelectorAll('i')[10].setAttribute("style",'display:none');
      document.querySelectorAll('i')[11].setAttribute("style",'display:block;color: red; font-size: 100px ; ');
      	document.querySelectorAll('input')[5].setAttribute("style",'display:none ');
      	 document.querySelectorAll('button')[5].setAttribute("style",'display:none');
      	

      	

       }
      else{
       	 document.querySelectorAll('i')[11].setAttribute("style",'display: none');
       	 document.querySelectorAll('i')[10].setAttribute("style",'display:block; color: green; font-size: 150px');
      	document.querySelectorAll('input')[5].setAttribute("style",'margin-top: 2px; width:190px;text-align: center ')
      	document.querySelectorAll('input')[5].setAttribute("style",'display:none ');
      	document.querySelectorAll('button')[5].setAttribute("style",'display:none');

       }
	}

	//7em block
      var anButton7= document.querySelectorAll('button')[6];
  document.querySelectorAll('i')[12].setAttribute("style",'display:none');
document.querySelectorAll('i')[13].setAttribute("style",'display: none');
document.querySelectorAll('input')[6].setAttribute("style",' margin-top:230px; width:190px;text-align: center ')
anButton7.onclick=function(){
	if(document.querySelectorAll('input')[6].value==""||document.querySelectorAll('input')[6].value!="canari" )
	{
      document.querySelectorAll('i')[12].setAttribute("style",'display:none');
      document.querySelectorAll('i')[13].setAttribute("style",'display:block;color: red; font-size: 100px ; ');
      	document.querySelectorAll('input')[6].setAttribute("style",'display:none ');
      	 document.querySelectorAll('button')[6].setAttribute("style",'display:none');
      	 	

      	

       }
      else{
       	 document.querySelectorAll('i')[13].setAttribute("style",'display: none');
       	 document.querySelectorAll('i')[12].setAttribute("style",'display:block; color: green; font-size: 150px');
      	document.querySelectorAll('input')[6].setAttribute("style",'margin-top: 2px; width:190px;text-align: center ')
      	document.querySelectorAll('input')[6].setAttribute("style",'display:none ');
      	document.querySelectorAll('button')[6].setAttribute("style",'display:none');

      	
       }
	}

	//8em block

	     var anButton8= document.querySelectorAll('button')[7];
  document.querySelectorAll('i')[14].setAttribute("style",'display:none');
document.querySelectorAll('i')[15].setAttribute("style",'display: none');
document.querySelectorAll('input')[7].setAttribute("style",' margin-top:230px; width:190px;text-align: center ')
anButton8.onclick=function(){
	if(document.querySelectorAll('input')[7].value==""||document.querySelectorAll('input')[7].value!="coq" )
	{
      document.querySelectorAll('i')[14].setAttribute("style",'display:none');
      document.querySelectorAll('i')[15].setAttribute("style",'display:block;color: red; font-size: 100px ; ');
      	document.querySelectorAll('input')[7].setAttribute("style",'display:none ');
      	 document.querySelectorAll('button')[7].setAttribute("style",'display:none');
      	 

      	

       }
      else{
       	 document.querySelectorAll('i')[15].setAttribute("style",'display: none');
       	 document.querySelectorAll('i')[14].setAttribute("style",'display:block; color: green; font-size: 150px');
      	document.querySelectorAll('input')[7].setAttribute("style",'margin-top: 2px; width:190px;text-align: center ')
      	document.querySelectorAll('input')[7].setAttribute("style",'display:none ');
      	document.querySelectorAll('button')[7].setAttribute("style",'display:none');

      		
       }
	}


//9em block

	     var anButton9= document.querySelectorAll('button')[8];
  document.querySelectorAll('i')[16].setAttribute("style",'display:none');
document.querySelectorAll('i')[17].setAttribute("style",'display: none');
document.querySelectorAll('input')[8].setAttribute("style",' margin-top:230px; width:190px;text-align: center ')
anButton9.onclick=function(){
	if(document.querySelectorAll('input')[8].value==""||document.querySelectorAll('input')[8].value!="porc" )
	{
      document.querySelectorAll('i')[16].setAttribute("style",'display:none');
      document.querySelectorAll('i')[17].setAttribute("style",'display:block;color: red; font-size: 100px ; ');
      	document.querySelectorAll('input')[8].setAttribute("style",'display:none ');
      	 document.querySelectorAll('button')[8].setAttribute("style",'display:none');
      	 	

      	

       }
      else{
       	 document.querySelectorAll('i')[17].setAttribute("style",'display: none');
       	 document.querySelectorAll('i')[16].setAttribute("style",'display:block; color: green; font-size: 150px');
      	document.querySelectorAll('input')[8].setAttribute("style",'margin-top: 2px; width:190px;text-align: center ')
      	document.querySelectorAll('input')[8].setAttribute("style",'display:none ');
      	document.querySelectorAll('button')[8].setAttribute("style",'display:none');

      		
       }
	}


//10em block

	     var anButton10= document.querySelectorAll('button')[9];
  document.querySelectorAll('i')[18].setAttribute("style",'display:none');
document.querySelectorAll('i')[19].setAttribute("style",'display: none');
document.querySelectorAll('input')[9].setAttribute("style",' margin-top:230px; width:190px;text-align: center ')
anButton10.onclick=function(){
	if(document.querySelectorAll('input')[9].value==""||document.querySelectorAll('input')[9].value!="vache" )
	{
      document.querySelectorAll('i')[18].setAttribute("style",'display:none');
      document.querySelectorAll('i')[19].setAttribute("style",'display:block;color: red; font-size: 100px ; ');
      	document.querySelectorAll('input')[9].setAttribute("style",'display:none ');
      	 document.querySelectorAll('button')[9].setAttribute("style",'display:none');
      	 

      	

       }
      else{
       	 document.querySelectorAll('i')[19].setAttribute("style",'display: none');
       	 document.querySelectorAll('i')[18].setAttribute("style",'display:block; color: green; font-size: 150px');
      	document.querySelectorAll('input')[9].setAttribute("style",'margin-top: 2px; width:190px;text-align: center ')
      	document.querySelectorAll('input')[9].setAttribute("style",'display:none ');
      	document.querySelectorAll('button')[9].setAttribute("style",'display:none');

      	
       }
	}


//11em block

	     var anButton11= document.querySelectorAll('button')[10];
  document.querySelectorAll('i')[20].setAttribute("style",'display:none');
document.querySelectorAll('i')[21].setAttribute("style",'display: none');
document.querySelectorAll('input')[10].setAttribute("style",' margin-top:230px; width:190px;text-align: center ')
anButton11.onclick=function(){
	if(document.querySelectorAll('input')[10].value==""||document.querySelectorAll('input')[10].value!="chien" )
	{
      document.querySelectorAll('i')[20].setAttribute("style",'display:none');
      document.querySelectorAll('i')[21].setAttribute("style",'display:block;color: red; font-size: 100px ; ');
      	document.querySelectorAll('input')[10].setAttribute("style",'display:none ');
      	 document.querySelectorAll('button')[10].setAttribute("style",'display:none');
      	 

      	

       }
      else{
       	 document.querySelectorAll('i')[21].setAttribute("style",'display: none');
       	 document.querySelectorAll('i')[20].setAttribute("style",'display:block; color: green; font-size: 150px');
      	document.querySelectorAll('input')[10].setAttribute("style",'margin-top: 2px; width:190px;text-align: center ')
      	document.querySelectorAll('input')[10].setAttribute("style",'display:none ');
      	document.querySelectorAll('button')[10].setAttribute("style",'display:none');

      	
       }
	}



//12em block

	     var anButton12= document.querySelectorAll('button')[11];
  document.querySelectorAll('i')[22].setAttribute("style",'display:none');
document.querySelectorAll('i')[23].setAttribute("style",'display: none');
document.querySelectorAll('input')[11].setAttribute("style",' margin-top:230px; width:190px;text-align: center ')
anButton12.onclick=function(){
	if(document.querySelectorAll('input')[11].value==""||document.querySelectorAll('input')[11].value!="mouton" )
	{
      document.querySelectorAll('i')[22].setAttribute("style",'display:none');
      document.querySelectorAll('i')[23].setAttribute("style",'display:block;color: red; font-size: 100px ; ');
      	document.querySelectorAll('input')[11].setAttribute("style",'display:none ');
      	 document.querySelectorAll('button')[11].setAttribute("style",'display:none');
      	 	document.querySelectorAll('h1')[0].innerHTML=0+"/"+60;

      	 	
       }
      else{
       	 document.querySelectorAll('i')[23].setAttribute("style",'display: none');
       	 document.querySelectorAll('i')[22].setAttribute("style",'display:block; color: green; font-size: 150px');
      	document.querySelectorAll('input')[11].setAttribute("style",'margin-top: 2px; width:190px;text-align: center ')
      	document.querySelectorAll('input')[11].setAttribute("style",'display:none ');
      	document.querySelectorAll('button')[11].setAttribute("style",'display:none');

      	


       }

	}



