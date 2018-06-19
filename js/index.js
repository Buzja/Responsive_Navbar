const burger = document.querySelector(".burger_btn");
const nav = document.querySelector(".sero_navbar");
const body_el = document.body;

burger.addEventListener("click", ()=>{
    nav.classList.toggle("active");
    body_el.classList.toggle("mask");
});

document.addEventListener("mouseup", (e)=>
{
    if(!e.target.closest(".sero_navbar")){
        nav.classList.remove("active");
        body_el.classList.remove("mask");
    }
});
