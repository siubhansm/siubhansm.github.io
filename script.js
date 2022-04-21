///FORM SCRIPT

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
///image overlay SCRIPT

const imageOverlay1 = document.getElementById("toastP1");
const images1 = document.getElementById("toastImage1");
function showImageOverlay1() {
  imageOverlay1.style.display = "block";
  images1.style.filter = "brightness(50%)";
}
function hideImageOverlay1() {
  imageOverlay1.style.display = "none";
  images1.style.filter = "brightness(100%)";
}
const imageOverlay2 = document.getElementById("toastP2");
const images2 = document.getElementById("toastImage2");
function showImageOverlay2() {
  imageOverlay2.style.display = "block";
  images2.style.filter = "brightness(50%)";
}
function hideImageOverlay2() {
  imageOverlay2.style.display = "none";
  images2.style.filter = "brightness(100%)";
}
const imageOverlay3 = document.getElementById("toastP3");
const images3 = document.getElementById("toastImage3");
function showImageOverlay3() {
  imageOverlay3.style.display = "block";
  images3.style.filter = "brightness(50%)";
}
function hideImageOverlay3() {
  imageOverlay3.style.display = "none";
  images3.style.filter = "brightness(100%)";
}
const imageOverlay4 = document.getElementById("toastP4");
const images4 = document.getElementById("toastImage4");
function showImageOverlay4() {
  imageOverlay4.style.display = "block";
  images4.style.filter = "brightness(50%)";
}
function hideImageOverlay4() {
  imageOverlay4.style.display = "none";
  images4.style.filter = "brightness(100%)";
}
const imageOverlay5 = document.getElementById("toastP5");
const images5 = document.getElementById("toastImage5");
function showImageOverlay5() {
  imageOverlay5.style.display = "block";
  images5.style.filter = "brightness(50%)";
}
function hideImageOverlay5() {
  imageOverlay5.style.display = "none";
  images5.style.filter = "brightness(100%)";
}
const imageOverlay6 = document.getElementById("toastP6");
const images6 = document.getElementById("toastImage6");
function showImageOverlay6() {
  imageOverlay6.style.display = "block";
  images6.style.filter = "brightness(50%)";
}
function hideImageOverlay6() {
  imageOverlay6.style.display = "none";
  images6.style.filter = "brightness(100%)";
}
///sandwich builder SCRIPT
var newSandwich = [];
function addItem(itemPrice, item) {
  newSandwich.push(itemPrice);
  document.getElementById("itemDisplay").innerHTML += item + ": ";
  document.getElementById("itemDisplay").innerHTML +=
    itemPrice.toFixed(2) + "<br>";
}
function calculatePrice() {
  var price = 0;
  for (i = 0; i < newSandwich.length; i++) {
    price += newSandwich[i];
  }
  if (price == 0) {
    alert("Go on...add some items to your sandwich!");
  } else {
    document.getElementById("priceDisplay").innerHTML = "€" + price.toFixed(2);
  }
}
function clearSandwich() {
  document.getElementById("itemDisplay").innerHTML = "";
  document.getElementById("priceDisplay").innerHTML = "";
  newSandwich = [];
}
