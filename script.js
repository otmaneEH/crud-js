function validateForm() {
    let firstName =document.getElementById("firstName").value;
    let lastNmae =document.getElementById("lastNmae").value;
    // let ville =document.getElementById("ville").value;
    // let type=document.querySelectorAll('input[name="type"]')
if(firstName==''){
        alert("u have to entre ur name");


        return false
    }
    if(lastNmae==''){
        alert("u have to entre ur lastNmae");


        return false
    }


}