var userName = document.getElementById("username");
var passwordd = document.getElementById("pass");
var maill = document.getElementById("mail");
var phone = document.getElementById("phone");
var invalidName = document.getElementById("p1");
var invalidMail = document.getElementById("p2");
var invalidPassword = document.getElementById("p3");
var invalidPhone = document.getElementById("p4");


var validateName = /^[a-zA-Z ]{4,15}$/;
var validatePhone = /^[0-9]{11}$/;
var validateMail = /^([a-zA-Z0-9_]{3,15})@([a-zA-Z0-9]{2,10})\.([a-z]{2,7})$/;

var name1 = false;
var checkMail = false;
var checkPass = false;
var  checkPhone= false;

function getData(e) {
  e.preventDefault();

  if (userName.value.match(validateName)) {
    invalidName.style.display = "none";

    name1 = true;
  } else {
    invalidName.style.display = "block";
  }

  if (maill.value.match(validateMail)) {
    invalidMail.style.display = "none";
    console.log(userName.value);
    checkMail = true;
  } else {
    invalidMail.style.display = "block";
  }

  if (passwordd.value.length > 8) {
    invalidPassword.style.display = "none";
    console.log(userName.value);
    checkPass = true;
  } else {
    invalidPassword.style.display = "block";
  }

  if (phone.value.match(validatePhone)) {
    invalidPhone.style.display = "none";
    console.log(userName.value);
    checkPhone = true;
  } else {
    invalidPhone.style.display = "block";
  }

  if (
    name1 == true &&
    checkMail == true &&
    checkPass == true &&
    checkPhone == true
  ) {
    userName.value = "";
    passwordd.value = "";
    phone.value = "";
    maill.value = "";

  }
}
