function validateForm() {
  let x = document.getElementById("firstName").value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}