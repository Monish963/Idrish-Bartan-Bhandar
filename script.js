// Header shadow effect

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.4)";
    }
    else{
        header.style.boxShadow = "none";
    }

});



// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({
            behavior:"smooth"
        });

    });

});



// Product animation

const cards = document.querySelectorAll(".product-card");


const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

});



cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="0.6s";

    observer.observe(card);

});



console.log("Idrish Bartan Bhandar Website Ready");
