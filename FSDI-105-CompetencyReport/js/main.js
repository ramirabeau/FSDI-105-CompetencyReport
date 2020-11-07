var salon = {
    name: "The Fashion Pet",
    address: {
        street: "Ave University",
        number: "2543",

    },
    hours: {
        open: "8:00 am",
        close: "8:00 pm"
    },
    pets: []
}



//document.write() to display the assignment

//console.table(salon.pets[0].service);

var id = 0;
/*Constructor*/
class Pet {
    constructor(name, age, gender, type, breed, immunizations, sterile, service, price, ownersName, contactPhone) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.type = type;
        this.breed = breed;
        this.immunizations = immunizations;
        this.sterile = sterile;
        this.service = service;
        this.price = price;
        this.ownersName = ownersName;
        this.contactPhone = contactPhone;
        this.id = id++;

    }
}

var scooby = new Pet("Scooby", 15, "Male", "Dog", "GreatDane", "current", "yes", "Full Service", 19, "Shaggy", "210-333-1223");
var patron = new Pet("Patron", 10, "Male", "Dog", "Chihuahua", "current", "yes", "Nail clip", 10, "Raven", "210-555-9999");
var mineaux = new Pet("Mineaux", 12, "Female", "Cat", "Calico", "current", "yes", "Bath", 12, "Karen", "210-444-6667");
/*
console.log(scooby);
console.log(patron);
console.log(mineaux);
*/





/*Register Function*/

const txtName = document.getElementById('petName');
const txtAge = document.getElementById('petAge');
const txtGender = document.getElementById('petGender');
const txtType = document.getElementById('petType');
const txtBreed = document.getElementById('petBreed');
const txtImmunizations = document.getElementById('petImmunizations');
const txtSterile = document.getElementById('petSterile');
const txtService = document.getElementById('petService');
const txtPrice = document.getElementById('servicePrice');
const txtOname = document.getElementById('ownersName');
const txtContact = document.getElementById('contactPhone');

function register() {
    var thePet = new Pet(txtName.value, txtAge.value, txtGender.value, txtType.value, txtBreed.value, txtImmunizations.value, txtSterile.value, txtService.value, txtPrice.value, txtOname.value, txtContact.value);

    salon.pets.push(thePet);
    displayTable(thePet);
    clear();
    registeredPets();
    profitCalculation();
    //petTable();


}

function clear() {
    txtName.value = "";
    txtAge.value = "";
    txtGender.value = "";
    txtType.value = "";
    txtBreed.value = "";
    txtImmunizations.value = "";
    txtSterile.value = "";
    txtService.value = "";
    txtPrice.value = "";
    txtOname.value = "";
    txtContact.value = "";

}

function registeredPets() {
    document.getElementById('registeredPets').innerHTML = `Number of pets: ${salon.pets.length}`;

}


function profitCalculation() {
    var total = 0;
    for (var i = 0; i < salon.pets.length; i++) {
        total = total + Number(salon.pets[i].price);
    }

    document.getElementById('profits').innerHTML = `Profits $ ${total}`;
}

function deletePet(petId) {
    //delete from the array
    //travel the array
    for (var i = 0; i < salon.pets.length; i++) {
        //search the pet
        if (salon.pets[i].id === petId) {
            indexDelete = i; //Storing the position
        }
    }
    // splice ()
    salon.pets.splice(indexDelete, 1);
    //delete from the html
    $('#' + petId).remove();

    //create the button similar to the register button
    // in the display(aPet) function <button class="btn btn-danger" onclick='deletePet(${aPet.id})'> Delete </button>

}

function search() {
    //add input:text under the index.html (add id="petSearch")
    //get the value from the input $('#petSearch').val(); store it in a variable
    //Search by name

    var searchString = $("#petSearch").val();
    var searchIndex;

    //Travel the array (for)
    for (var i = 0; i < salon.pets.length; i++) {

        //search by name && service
        if (searchString.toLowerCase() === salon.pets[i].name.toLowerCase() || searchString.toLowerCase() === salon.pets[i].service.toLowerCase()) {
            searchIndex = i;

        } else {
            console.log("No");
        }
        console.log(searchIndex);

        //highlight the found pet on the table
        $('#' + searchIndex).addClass('highlight');

    }
}


function init() {

    //Display this information in the footer
    text = `
        ${salon.name}, ${salon.address.street}, ${salon.address.number} <br>
        It is open from ${salon.hours.open} to ${salon.hours.close}

        `;
    document.getElementById('footer-info').innerHTML = text;

    salon.pets.push(scooby);
    displayTable(scooby);
    salon.pets.push(patron);
    displayTable(patron);
    salon.pets.push(mineaux);
    displayTable(mineaux);
    registeredPets();
    profitCalculation();

    //add hook events
    $('#btn-register').on('click', register);
    //creater the event for the search
    $('#btn-search').on('click', search);
    $('#petSearch').keypress(function(e) {
        console.log(e.key); //this enters the key events to the console
        //If the user presses enter, display Hello
        if (e.key === "Enter") {
            console.log("Hello");
        }
    });

}
window.onload = init;