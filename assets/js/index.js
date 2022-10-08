let mainLocation = window.pageYOffset
let $nav = document.querySelector('.header');
const menu = document.querySelector (".header__ham");
const menuSlide = document.querySelector(".ham__bar");
const close = document.querySelector(".close__img");
window.addEventListener('scroll', scrolling);


menu.addEventListener("click" , ()=> {

    if (menuSlide.style.right = "-280px"){

        menuSlide.style.right = "0px"

    } else { alert("no esta pasando nada")}


    

})

close.addEventListener("click" , ()=>{
    menuSlide.style.right = "-280px";

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
