function display(aPet) {

    var text = "";
    var icon = "";
    var dogIcon = '<i class="fas fa-dog"></i>';
    var catIcon = '<i class="fas fa-cat"></i>';
    var birdIcon = '<i class="fas fa-crow"></i>';
    var unknown = '<i class="fas fa-question-circle"></i>';

    if (aPet.type === "Dog") {
        icon = dogIcon;
    } else if (aPet.type === "Cat") {
        icon = catIcon;
    } else if (aPet.type === "Bird") {
        icon = birdIcon;
    } else {
        icon = unknown;
    }


}


function petTable() {
    document.getElementsByTagName('petTable').innerHTML = `List of pets: ${salon.pets.name}`;
    document.getElementsByTagName('petTable').innerHTML = `List of owners: ${salon.pets.ownersName}`;


    $('h3').html('petTable');


}

function displayTable(aPet) {
    //create the template string (`${name of the var}`)
    var tr = `
        <tr id="${aPet.id}">
            <td> ${aPet.id}</td>
            <td> ${aPet.name} </td>
            <td> ${aPet.age} </td>
            <td> ${aPet.gender} </td>
            <td> ${aPet.type} </td>
            <td> ${aPet.breed} </td>
            <td> ${aPet.immunizations} </td>
            <td> ${aPet.sterile} </td>
            <td> ${aPet.service} </td>
            <td> ${aPet.price} </td>
            <td> ${aPet.ownersName} </td>
            <td> ${aPet.contactPhone} </td>
            <td><button class="btn btn-danger" onclick='deletePet(${aPet.id})'> Delete </button><td>
        </tr>`;
    $('#petTable').append(tr);

}