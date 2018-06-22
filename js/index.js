const burger = document.querySelector(".burger_btn");
const nav = document.querySelector(".sero_navbar");
const arrows = document.querySelectorAll(".navbar_content__item_trigger");
const body_el = document.body;

// function openElementFunc(e){
//     const elem_to_open = e.target.parentNode.nextElementSibling;
//     console.log(elem_to_open.getAttribute("isopen"));
    
//     if(elem_to_open.getAttribute("isopen") == "true"){
//         elem_to_open.setAttribute("isopen",false);
//         elem_to_open.style.display = "none";
//     }
//     else{
//         elem_to_open.setAttribute("isopen",true);
//         elem_to_open.style.display = "block";
//     }    
// }

function openElementFunc(e){
    const elem_to_open = e.target.parentNode.nextElementSibling;
    elem_to_open.classList.toggle("mobile_active");
}

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

arrows.forEach((arrow)=>{arrow.addEventListener("click", openElementFunc);});