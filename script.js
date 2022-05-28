function validateForm() {
    let firstName = document.getElementById("firstName").value;
    let lastNmae = document.getElementById("lastNmae").value;
    let vill = document.getElementById("ville").value;
    // let type = document.getElementsByTagName("type").value;


    if (firstName == '') {
        alert("u have to entre ur name");


        return false
    }
    if (lastNmae == '') {
        alert("u have to entre ur lastNmae");


        return false
    }

}
function insert() //function for insert
{

    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var firstname = row.insertCell(0);
    var lastname = row.insertCell(1);
    var ville = row.insertCell(2);
    // var type = row.insertCell(2);
    firstname.innerHTML = document.getElementById("firstName").value;
    lastname.innerHTML = document.getElementById("lastNmae").value;
    ville.innerHTML = document.getElementById("ville").value;
    // type.innerHTML = document.getElementById("type").value;

    return false;
}