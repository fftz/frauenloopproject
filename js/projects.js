// version 1


let activeNav = document.querySelectorAll("#navbar-nav > .nav-link")

activeNav.forEach(each => {
    each.onclick = function () {
        activeNav.forEach(ss => ss.classList.remove("active")) // removing active from all
        each.classList.add("active") // assigning active to selected
    }
})