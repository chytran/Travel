/*==================== SHOW MENU =============================*/
const navMenu = document.querySelector(".nav__menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");


/*======== Menu Show ======*/
if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    })
}

/*========== Menu Hidden ===========*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}

/*==================== REMOVE MENU MOBILE ===================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.querySelector(".nav__menu");
    // When we click on each nav__link, it removes the next
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

/*================== CHANGE HEADER BACKGROUND COLOR ON SCROLL =====================*/
function scrollHeader() {
    const header = document.getElementById("header");
    // When scroll is greater than 100, add scroll-header class
    if(this.scrollY >= 100) header.classList.add("scroll-header"); else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader)

/*==================== SWIPER IN DISCOVER ===================*/

/*==================== VIDEO ===================*/
const videoFile = document.getElementById("video-file"),
      videoButton = document.getElementById("video-button"),
      videoIcon = document.getElementById("video-icon")

function playPause() {
    if (videoFile.paused) {
        // Play the video
        videoFile.play();
        // Change the icon
        videoIcon.classList.add("ri-pause-line");
        videoIcon.classList.remove("ri-play-line");
    }
    else {
        // Pause video
        videoFile.pause();
        // We change the icon
        videoIcon.classList.add('ri-play-line');
        videoIcon.classList.remove("ri-pause-line");
     
    }
}

videoButton.addEventListener("click", playPause);

function finalVideo(){
    // Video ends, icon change
    videoIcon.classList.remove("ri-pause-line");
    videoIcon.classList.add("ri-play-line");
}

// Ended, when the video ends
videoFile.addEventListener("ended", finalVideo);