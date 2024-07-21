var typed = new Typed(".typing", {
    strings: ["Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backdelay: 1000,
    loop: true
})
 
//active navbar//
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);


// sticky navbar ///////////////////////////////////////
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
})


// toggle icon navbar ////////////////////////////////////////////
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("open");
}






