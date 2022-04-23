///Script for form validation
function emalValidate() {
  let emailInput = document.getElementById("email").value;
  if (!emailInput.includes("@") || !emailInput.includes(".")) {
    alert("Please enter a valid email address");
    return true;
  }
}
function submitButton() {
  let fNameInput = document.getElementById("fName").value;
  let lNameInput = document.getElementById("lName").value;
  let emailInput = document.getElementById("email").value;
  let phoneInput = document.getElementById("phone").value;
  let messageInput = document.getElementById("message").value;
  //if any of the inputs are empty the function returns false and an alert is shown
  if (
    fNameInput == "" ||
    lNameInput == "" ||
    emailInput == "" ||
    phoneInput == "" ||
    messageInput == ""
  ) {
    alert("Please fill out all the fields in the contact form to proceed!");
    return false;
  }
  //if the phone number contains anything BUT numbers, it will then run the email validation too to check if that's ok
  if (isNaN(phoneInput)) {
    alert("Phone No. can contain only numbers");
    //if the email AND the phone inputs are not valid then return false and show both messages
    if (emalValidate() === true) {
      return false;
    }
    //if just the phone is not valid, still return false with only a notification for the phone
    return false;
  }
  //if just the email is invalid then return false with a message
  if (emalValidate() === true) {
    return false;
  }
  //if all is good then replace the form with a notice to say it's been submittes
  document.getElementById("formFilled").innerHTML =
    "<h2>Thanks, we will be in touch soon...</h2><br><br><br><br><br><br><br><br><br><br>";
}

///Script for image overlay
//1st image
let imageOverlay1 = document.getElementById("toastP1");
let images1 = document.getElementById("toastImage1");
//when the mouse enters the object then the paragraph is visible and the image brightness is rduced
function showImageOverlay1() {
  imageOverlay1.style.display = "block";
  images1.style.filter = "brightness(50%)";
}
//when the mouse exits the object then the paragraph is no longer visible and brightness returns to normal
function hideImageOverlay1() {
  imageOverlay1.style.display = "none";
  images1.style.filter = "brightness(100%)";
}
let imageOverlay2 = document.getElementById("toastP2");
let images2 = document.getElementById("toastImage2");
//2nd image
function showImageOverlay2() {
  imageOverlay2.style.display = "block";
  images2.style.filter = "brightness(50%)";
}
function hideImageOverlay2() {
  imageOverlay2.style.display = "none";
  images2.style.filter = "brightness(100%)";
}
//3rd image
let imageOverlay3 = document.getElementById("toastP3");
let images3 = document.getElementById("toastImage3");
function showImageOverlay3() {
  imageOverlay3.style.display = "block";
  images3.style.filter = "brightness(50%)";
}
function hideImageOverlay3() {
  imageOverlay3.style.display = "none";
  images3.style.filter = "brightness(100%)";
}
//4th image
let imageOverlay4 = document.getElementById("toastP4");
let images4 = document.getElementById("toastImage4");
function showImageOverlay4() {
  imageOverlay4.style.display = "block";
  images4.style.filter = "brightness(50%)";
}
function hideImageOverlay4() {
  imageOverlay4.style.display = "none";
  images4.style.filter = "brightness(100%)";
}
//5th image
let imageOverlay5 = document.getElementById("toastP5");
let images5 = document.getElementById("toastImage5");
function showImageOverlay5() {
  imageOverlay5.style.display = "block";
  images5.style.filter = "brightness(50%)";
}
function hideImageOverlay5() {
  imageOverlay5.style.display = "none";
  images5.style.filter = "brightness(100%)";
}
//6th image
let imageOverlay6 = document.getElementById("toastP6");
let images6 = document.getElementById("toastImage6");
function showImageOverlay6() {
  imageOverlay6.style.display = "block";
  images6.style.filter = "brightness(50%)";
}
function hideImageOverlay6() {
  imageOverlay6.style.display = "none";
  images6.style.filter = "brightness(100%)";
}

///Script for sandwich builder
//create a new array to store the sandwich prices
var newSandwich = [];
//when the user clicks an item two parameters are sent to the function
//1 parameter is for the price and on is for the item name
function addItem(itemPrice, item) {
  //the item price is added to the array
  newSandwich.push(itemPrice);
  //the sandwich can't have more than 10 items so this if statement checks that
  if (newSandwich.length > 10) {
    alert("you can't add more than 10 items to a sandwich");
  } else {
    //if the sandwich does not contain more than 10 items, it will display the item name and price
    document.getElementById("itemDisplay").innerHTML += item + ": ";
    document.getElementById("itemDisplay").innerHTML +=
      itemPrice.toFixed(2) + "<br>";
    //the calculate price function will also be run
    calculatePrice();
  }
}
//this function is used to add the array together and update the price display
function calculatePrice() {
  var price = 0;
  for (i = 0; i < newSandwich.length; i++) {
    price += newSandwich[i];
  }
  document.getElementById("priceDisplay").innerHTML = "€" + price.toFixed(2);
}
//the user can clear their sandwich by clicking a button to run this function
function clearSandwich() {
  //this function clears out all the DOM item and price displays
  document.getElementById("itemDisplay").innerHTML = "";
  document.getElementById("priceDisplay").innerHTML = "";
  //it also empties the array
  newSandwich = [];
}
