//Add a “light blue” background color and some padding to the <div>.
let divCol = document.querySelector('div');
divCol.setAttribute('style', "color:lightblue; padding: 40px 10px ");
//Do not display the <li> that contains the text node “John”.
let linode=document.querySelector('ul > li');
linode.setAttribute('style',"display:none");
//Add a border to the <li> that contains the text node “Pete”.
let linode2=document.querySelector('ul > li:last-child');
linode2.setAttribute('style',"border:solid 5px ;width:100px");
//Change the font size of the whole body.
let bodyA=document.querySelector('body');
bodyA.setAttribute('style',"font-size: 3em");
//bonus

function bleuef(){
let divBg=document.querySelector('div');
divBg.setAttribute('style',"background-color:blue;");
}

function al(){
	alert("Hello "+ document.querySelector('div').innerHTML);

}


