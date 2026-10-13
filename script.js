const burger = document.querySelector(".burgerbutton");
const list = document.querySelector('.burgerlist');

burger.addEventListener('click' , ()=> {
    list.classList.toggle("openburger")
});