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

var pathname = window.location.pathname;

var abc = document.querySelectorAll("a");
abc.forEach((item)=>{
    // console.log(item)
    if(item.href.includes(pathname)){
        item.classList.add("active-page")
    }
})
//************************************************************ Create Account ****************************************************//


