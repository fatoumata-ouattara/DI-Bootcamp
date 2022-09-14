
         var but=document.querySelector('button');

      but.onclick=function myMoveG(){
             var id=null;
             var pos=0;
             clearInterval(id)
             id =setInterval(myMoveL,5);
            var monDiv= document.getElementById('animate');
             function myMoveL(){ if(pos==330)  
             { clearInterval(id);
             } 
             else{pos++;
              monDiv.style.left=pos+'px';} 
            }
             
              }  
