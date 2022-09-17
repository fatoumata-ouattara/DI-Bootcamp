document.getElementById("div2").style.display="none";
document.getElementById("div3").style.display="none";
document.getElementById("begin").onclick=function(){
  document.getElementById("infos").style.display="none";
    document.getElementById("commence").style.display="none";
    document.getElementById("div2").style.display="block";
    document.getElementById("div3").style.display="block";
        let id = null;
        const elem = document.getElementById("div2"); 
        const elem1 = document.getElementById("div3");  
        let pos = 0;
        let pos2=500;
        clearInterval(id);
        id = setInterval(frame, 5);
        id = setInterval(frame1, 5);
        function frame() {
          if (pos == 250) {
            clearInterval(id);
          } else {
            pos++; 
            elem.style.left = pos + "px"; 
          }
        }

        function frame1() {
            if (pos2 == 250) {
              clearInterval(id);
            } else {
              pos2--; 
              elem1.style.left = pos2 + "px"; 
            }
          }
}

document.getElementById("inscription").addEventListener("click", function(){
    let nom=document.getElementById("nom").value;
    let prenom=document.getElementById("prenom").value;
    document.querySelector("h3").innerHTML="Bienvenu "+nom+" "+prenom+" sur notre plateforme de jeux.";
    event.preventDefault();
    
}
)
