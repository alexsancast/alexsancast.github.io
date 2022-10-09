let mainLocation = window.pageYOffset
let $nav = document.querySelector('.header');
const menu = document.querySelector (".header__ham");
const menuSlide = document.querySelector(".ham__bar");
const close = document.querySelector(".close__img");
const opacity = document.querySelector(".opacity");
const logo = document.querySelector(".header__logo");
window.addEventListener('scroll', scrolling);


menu.addEventListener("click" , ()=> {

    if (menuSlide.style.right = "-280px"){
        menuSlide.style.right = "0px";
        opacity.style.display = "block";
        logo.style.display = "none";
        menu.style.display = "none";



    } else { alert("no esta pasando nada")}


    

})

close.addEventListener("click" , ()=>{
    menuSlide.style.right = "-280px";
    opacity.style.display = "none";
    logo.style.display = "block";
    menu.style.display = "block";

})


opacity.addEventListener("click" , ()=>{
    opacity.style.display = "none";
    menuSlide.style.right = "-280px"
    logo.style.display = "block";
    menu.style.display = "block";

})
function scrolling() {
    let locationGet = window.pageYOffset;
 

    if (mainLocation >= locationGet) {
        $nav.style.top = "0px";

    } else {
        $nav.style.top = "-130px";
    }

    mainLocation = locationGet;
}
