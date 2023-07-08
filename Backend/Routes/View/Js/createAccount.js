var first_Name = document.getElementById("createAcc-fname");
var createAccountBtn = document.getElementById("createAccount-btn");
createAccountBtn.addEventListener("click", (e) => {
  e.preventDefault();
  var checkAlphabet = parseInt(first_Name.value);
  console.log(checkAlphabet);
  if (/\d/.test(first_Name.value)) {
    alert("Please Enter correct alphabet in your Name");
  }
  // if (!isNaN(parseInt(first_Name.value))) {
  // if (parseInt(first_Name.value).includes(Number)) {
  //     alert("Name can't be integer")
  // }
  // else {

  // }
});
