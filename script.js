

// header

async function loadInclude(selector, file){
    const el = document.querySelector(selector);
    if(!el) return;

    try {
        const response = await fetch(file);
        if(!response.ok)throw new Error(`Could not load ${file}`);
        el.innerHTML = await response.text();
    }
    catch(err){
        console.error(err);
    }
}


function initBurger(){
    const burger = document.querySelector(".burgerbutton");
    const list = document.querySelector('.burgerlist');

    burger.addEventListener('click' , ()=> {
        list.classList.toggle("openburger");
        burger.classList.toggle("activate");
    });
}



document.addEventListener("DOMContentLoaded", async () => {
  await loadInclude("#header-placeholder", "header.html");
  initBurger(); // runs only after the header exists
});