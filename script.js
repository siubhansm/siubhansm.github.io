function submitButton() {
  let fNameInput = document.getElementById("fName").value;
  let lNameInput = document.getElementById("lName").value;
  let emailInput = document.getElementById("email").value;
  let phoneInput = document.getElementById("phone").value;
  let messageInput = document.getElementById("message").value;
  if (
    fNameInput == "" ||
    lNameInput == "" ||
    emailInput == "" ||
    phoneInput == "" ||
    messageInput == ""
  ) {
    alert("Please fill out all the fields in the Contact Form to proceed!");
    return false;
  }
  if (isNaN(phoneInput)) {
    alert("Phone No. can contain only numbers");
    if (!emailInput.includes("@") || !emailInput.includes(".")) {
      alert("Please enter a valid email address");
      return false;
    }
    return false;
  }
  if (!emailInput.includes("@") || !emailInput.includes(".")) {
    alert("Please enter a valid email address");
    return false;
  }
  document.getElementById("formFilled").innerHTML =
    "<h2>Thanks, we will be in touch soon...</h2><br><br><br><br><br><br><br><br><br><br>";
}
