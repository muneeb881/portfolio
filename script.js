//===========================
// MOBILE MENU
//===========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

//===========================
// CLOSE MENU AFTER CLICK
//===========================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

//===========================
// STICKY HEADER
//===========================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 80) {

        header.style.background = "#08111f";

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

    }

    else {

        header.style.background = "rgba(15,23,42,.95)";

        header.style.boxShadow = "none";

    }

});

//===========================
// ACTIVE NAV LINK
//===========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

//===========================
// CONTACT BUTTON
//===========================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("✅ Your message has been sent successfully!");

    form.reset();

});
//==============================
// TYPING EFFECT
//==============================

const words = [
    "Frontend Developer",
    "Web Designer",
    "JavaScript Developer",
    "Responsive Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    if(!typing) return;

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);
    }

    else{

        typing.textContent = current.substring(0,charIndex--);

    }

    if(charIndex == current.length + 1){

        deleting = true;

        setTimeout(typeEffect,1200);

        return;

    }

    if(charIndex == 0){

        deleting = false;

        wordIndex++;

        if(wordIndex == words.length){

            wordIndex = 0;

        }

    }

    setTimeout(typeEffect,deleting ? 50 : 100);

}

typeEffect();


//==============================
// SCROLL ANIMATION
//==============================

const reveal = document.querySelectorAll(
".about,.services,.projects,.contact,.skills,.service-card,.project-card,.skill-card,.about-img,.about-content"
);

function revealSection(){

    reveal.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight-120){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealSection);

revealSection();


//==============================
// SKILL BAR ANIMATION
//==============================

const bars=document.querySelectorAll(".progress-bar");

function animateBars(){

bars.forEach(bar=>{

const width=bar.style.width;

bar.style.width="0";

setTimeout(()=>{

bar.style.width=width;

},400);

});

}

window.addEventListener("load",animateBars);
//==========================
// SCROLL TO TOP
//==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const x=e.clientX-this.offsetLeft;

const y=e.clientY-this.offsetTop;

circle.style.left=x+"px";
circle.style.top=y+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});




window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

header.classList.toggle("sticky",window.scrollY>50);

});
const image=document.querySelector(".hero-image img");

image.addEventListener("mousemove",()=>{

image.style.transform="scale(1.05) rotate(2deg)";

});

image.addEventListener("mouseleave",()=>{

image.style.transform="scale(1) rotate(0deg)";

});
function comingSoon(event) {
    event.preventDefault();
    alert("🚀 Coming Soon!");
}