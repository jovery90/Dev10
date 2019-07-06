function validateSubmission(){
  if (document.getElementById("nameInput").value == ""){
    alert("Name is a required field.");
  }
  else if (document.getElementById("emailInput").value == "") {
    alert("Email is a required field.");
  }
  else if (document.getElementById("phoneInput").value == "") {
    alert("Phone number is a required field.");
  }

  else {
    alert("The information has successfully been submitted.")
  }
}
