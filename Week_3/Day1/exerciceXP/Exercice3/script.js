//In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

let mydiv= document.querySelector('div');
//mydiv.removeAttribute('navBar');
mydiv.setAttribute('id','socialNetworkNavigation');
console.log(mydiv);

/*We are going to add a new <li> to the <ul>.
First, create a new <li> tag (use the createElement method).
Create a new text node with “Logout” as its specified text.
Append the text node to the newly created list node (<li>).
Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.*/
let newLi= document.createElement('li');
let newText= document.createTextNode('Logout');
newLi.appendChild(newText);
//Enfin, ajoutez ce nœud de liste mis à jour à la liste non ordonnée ( <ul>), en utilisant la appendChildméthode.
let myUl= document.querySelector('ul');
myUl.appendChild(newLi);

//prime

let chidULli1= document.querySelector('ul > li:first-child');
console.log(chidULli1.textContent);

let chidULli2= document.querySelector('ul > li:last-child');
console.log(chidULli2.textContent);

