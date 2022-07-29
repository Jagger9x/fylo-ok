console.log(document.body.scrollWidth);

let body = document.body.scrollWidth;

// function closeNav() {
//   let body = document.body.scrollWidth;
//   let nav = document.querySelector(".nav-list");
//   let ham = document.querySelector(".ham-icon");
//   if (body <= 501) {
//     // nav.style.display = "none";
//     // ham.style.display = "block";
//   }
// }
// function showNav() {
//   let body = document.body.scrollWidth;
//   let nav = document.querySelector(".nav-list");
//   let ham = document.querySelector(".ham-icon");
//   let side = document.querySelector(".side-nav-list");
//   if (body >= 502) {
//     nav.style.display = "fit-content";
//     // ham.style.display = "none";
//     // side.style.display = "none";
//     ham.remove();
//   }
// }
document.querySelector(".close-icon").addEventListener("click", function () {
  document.querySelector(".side-nav-list").style.display = "none";
});
//

document.querySelector(".ham-icon").addEventListener("click", function () {
  //   document.querySelector(".side-nav-list").style.transition = "all";
  document.querySelector(".side-nav-list").style.display = "block";
});

closeNav();
showNav();
