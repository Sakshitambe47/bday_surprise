// Loading Screen

window.onload=()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},2000);

}

// Music

const btn=document.getElementById("startBtn");

const music=document.getElementById("music");


// ===========================
// Open Gift Screen
// ===========================

const home=document.getElementById("home");

const giftPage=document.getElementById("giftPage");

btn.onclick = () => {

    music.currentTime = 17;
    music.play();

    btn.innerHTML = "Enjoy Your Surprise ❤️";

    home.style.display = "none";

    giftPage.style.display = "flex";

}

// ===========================
// Gift Open
// ===========================

const gift=document.getElementById("gift");

const letterPage=document.getElementById("letterPage");

const typingText=document.getElementById("typingText");

const nextBtn=document.getElementById("nextBtn");

const message=`Dear Tejas,

Happy Birthday ❤️

You are not just my best friend...
you are my safe place, my biggest supporter,and the one person who has always stood by me without expecting anything in return.
Thank you for every laugh, every day-night conversation, every piece of advice, and every moment that made life a little brighter.
Thank you for every laugh,every conversation,every memory,and every smile.Never stop smiling.
The world becomes a little brighter because of people like you.
Happy Birthday once again.

— Sakshi ❤️`;

gift.onclick=()=>{

gift.innerHTML="✨";

gift.style.transform="scale(1.8)";

setTimeout(()=>{

giftPage.style.display="none";

letterPage.style.display="flex";

typeWriter();

},1500);

}

function typeWriter() {

    let i = 0;
    typingText.textContent = "";

    const speed = 40;

    function typing() {

        if (i < message.length) {

            typingText.textContent += message.charAt(i);

            i++;

            setTimeout(typing, speed);

        } else {

            // Wait 3 seconds after typing finishes
            setTimeout(() => {

                letterPage.style.display = "none";

                galleryPage.style.display = "block";

            }, 3000);

        }

    }

    typing();

}


// ==========================================
// Gallery
// ==========================================

// ==========================================
// Gallery
// ==========================================

const galleryPage = document.getElementById("galleryPage");
const galleryNext = document.getElementById("galleryNext");

// ======================================
// PHOTO SLIDER
// ======================================

const slides=document.querySelector(".slides");

const images=document.querySelectorAll(".slides img");

const prev=document.getElementById("prev");

const next=document.getElementById("next");

let index=0;

function showSlide(){

slides.style.transform=

`translateX(-${index*360}px)`;

}

next.onclick = () => {

    if (index < images.length - 1) {

        index++;

        showSlide();

    }

    // Show Continue button on last photo
    if (index === images.length - 1) {

        galleryNext.style.display = "block";

    }

}

prev.onclick = () => {

    if (index > 0) {

        index--;

        showSlide();

    }

    // Hide Continue button if user goes back
    if (index < images.length - 1) {

        galleryNext.style.display = "none";

    }

}

// ==========================================
// Gallery Continue
// ==========================================

galleryNext.onclick = () => {

    alert("🎉 Next section is coming!");

}

// ==========================================
// WHY YOU'RE SPECIAL
// ==========================================

const specialPage = document.getElementById("specialPage");
const specialCards = document.querySelectorAll(".specialCard");
const specialNext = document.getElementById("specialNext");

galleryNext.onclick = () => {

    galleryPage.style.display = "none";

    specialPage.style.display = "block";

    specialCards.forEach((card, i) => {

        setTimeout(() => {

            card.classList.add("show");

        }, i * 700);

    });

    setTimeout(() => {

        specialNext.style.display = "block";

    }, specialCards.length * 700 + 500);

};

specialNext.onclick = () => {

    // alert("🎂 Birthday Cake Page Coming Next ❤️");

};

// // ==========================================
// // CAKE PAGE
// // ==========================================

// const cakePage = document.getElementById("cakePage");

// const specialNext = document.getElementById("specialNext");

// specialNext.onclick = () => {

//     specialPage.style.display = "none";

//     cakePage.style.display = "block";

// };

// const flame = document.getElementById("flame");

// const blowBtn = document.getElementById("blowBtn");

// blowBtn.onclick = () => {

//     flame.style.display = "none";

//     blowBtn.innerHTML = "🎉 Wish Granted 🎉";

// }

// ==========================================
// CAKE PAGE
// ==========================================

// const cakePage = document.getElementById("cakePage");
// const specialNext = document.getElementById("specialNext");
// const flame = document.getElementById("flame");
// const blowBtn = document.getElementById("blowBtn");

// if (specialNext) {

//     specialNext.addEventListener("click", () => {

//         specialPage.style.display = "none";
//         cakePage.style.display = "block";

//     });

// }

// if (blowBtn && flame) {

//     blowBtn.addEventListener("click", () => {

//         flame.style.display = "none";
//         blowBtn.innerHTML = "🎉 Wish Granted 🎉";

//     });

// }

// ==========================================
// CAKE PAGE
// ==========================================

// const specialPage = document.getElementById("specialPage");
// const cakePage = document.getElementById("cakePage");
// const specialNext = document.getElementById("specialNext");
// const flame = document.getElementById("flame");
// const blowBtn = document.getElementById("blowBtn");

// if (specialNext && specialPage && cakePage) {

//     specialNext.addEventListener("click", () => {

//         specialPage.style.display = "none";
//         cakePage.style.display = "block";

//     });

// }

// if (blowBtn && flame) {

//     blowBtn.addEventListener("click", () => {

//         flame.style.display = "none";
//         blowBtn.textContent = "🎉 Wish Granted 🎉";

//     });

// }

// ==========================================
// CAKE PAGE
// ==========================================

// ==========================================
// CAKE PAGE
// ==========================================
// ==========================================
// CAKE PAGE
// ==========================================

window.addEventListener("DOMContentLoaded", () => {

    const specialPage = document.getElementById("specialPage");
    const cakePage = document.getElementById("cakePage");
    const specialNext = document.getElementById("specialNext");

    const candle = document.getElementById("candle");
    const flame = document.getElementById("flame");

    const wishOverlay = document.getElementById("wishOverlay");
    const fireworkPage = document.getElementById("fireworkPage");

    // Open Cake Page
    if (specialNext) {

        specialNext.onclick = () => {

            specialPage.style.display = "none";
            cakePage.style.display = "block";

        };

    }

    // Tap Candle
    // Tap Candle
if (candle && flame && wishOverlay && fireworkPage) {

    candle.addEventListener("click", () => {

        // Blow out candle
        flame.style.opacity = "0";

        // Disable second click
        candle.style.pointerEvents = "none";

        // Show birthday message
        setTimeout(() => {

            wishOverlay.classList.add("show");

        }, 1000);

        // Hide overlay
        setTimeout(() => {

            wishOverlay.classList.remove("show");

        }, 3500);

        // Open fireworks
        setTimeout(() => {

            cakePage.style.display = "none";

            fireworkPage.style.display = "block";

        }, 4500);

    });

}

});



const finalPage = document.getElementById("finalPage");

const finalBtn = document.getElementById("finalBtn");

if(finalBtn){

finalBtn.onclick = () => {

    fireworkPage.style.display = "none";

    finalPage.style.display = "flex";

}

}

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-30px";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.animation="floatHeart 6s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

},500);
    