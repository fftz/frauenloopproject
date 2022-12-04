let homePage = document.getElementById("home");
let aboutUs = document.getElementById("aboutus");
let product = document.getElementById("product");
let contact = document.getElementById("contact");

//Home active

// version 1


// let activeNav = document.querySelectorAll("#navbar-nav > .nav-link")

// activeNav.forEach(each => {
//     each.onclick = function () {
//         activeNav.forEach(ss => ss.classList.remove("active")) // removing active from all
//         each.classList.add("active") // assigning active to selected
//     }
// })


//version 2

// var activeNav = document.getElementById("navbar-nav");
// var btns = activeNav.getElementsByClassName("nav-link");
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }


//version 3


const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav-link').forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active');
        console.log(link);
    }
})
