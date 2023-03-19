// var navBtn = document.getElementsByClassName("nav-btn")
// for(var i = 0; i<navBtn.length; i++){
//     navBtn[i].addEventListener("click",(e)=>{
//         e.preventDefault();
//         document.getElementsByClassName("nav-btn")[i].classList.add="active"
//         console.log(a)
//     })
// }

// var navBtn = document.getElementsByClassName("nav-btn");
// for (var i = 0; i < navBtn.length; i++) {
//   navBtn[i].addEventListener("click", function() {
//     for (var j = 0; j < navBtn.length; j++) {
//       navBtn[j].classList.remove("active");
//     }
//     this.classList.add("active");
//   });
// }

//************************************************************ Create Account ****************************************************//
const AccountNumber = document.querySelector(".account-number");
const generateAccount = document.querySelector(".generateAccount");
generateAccount.addEventListener("click",(e)=>{
    e.preventDefault();
    let randomNumber = 0;
    let randomNumberArray = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G"];
    let length = randomNumberArray.length;
    for(i=0; i<length; i++){
        let index = Math.floor(Math.random()*length);
        randomNumber=randomNumber+randomNumberArray[index]
    }
    AccountNumber.textContent=randomNumber  
    generateAccount.disabled=true
})