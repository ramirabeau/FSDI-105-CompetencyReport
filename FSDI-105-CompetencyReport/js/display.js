//Document Object Model

var links = document.getElementsByTagName('a');

for (var i = 0; i < links.length; i++) {
    links[0].setAttribute('class', 'bordered');
    links[i].setAttribute('target', '_blank');
}


const pets = document.getElementById("pets");
var h1 = document.createElement("h1");
console.log(h1);
var text = document.createTextNode("Hello World");

h1.appendChild(text); //Adds this text into the h1 element and gets ptinted to the Console.
pets.appendChild(h1);

//Display the name of one pets in the id="pets"




//Information will be displayed above the footer section

//Display the name of all of the pets in the id="pets"

for (var i = 0; i < salon.pets.length; i++) {

    var li = document.createElement('li');
    var text2 = document.createTextNode(`${salon.pets[i].name}`); //this information is in the main.js file
    li.appendChild(text2);
    console.log(li);
    pets.appendChild(li);
}


//make it an ordered list


//Display the names and the ages of the pets

var ul = document.createElement('ul');
for (var i = 0; i < salon.pets.length; i++) {

    var li = document.createElement('li');
    var text2 = document.createTextNode(`${salon.pets[i].name}, ${salon.pets[i].age}`); //this information is in the main.js file
    li.appendChild(text2);
    ul.appendChild(li);
}
pets.appendChild(ul);