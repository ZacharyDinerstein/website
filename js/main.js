// Open a video player when the user clicks the 'Video' button
const createLightboxFunctionality = () => {
    let vidBtn = document.getElementById('1ffc-vid--open');
    let lightbox = document.getElementById('lightbox--1ffc');
    let video = document.getElementById('1ffc-video');

    // Open lightbox when button's clicked
    vidBtn.onclick = function () {
        lightbox.classList.add('flex');
    }

    // Close lightbox when user clicks outside of video
    lightbox.onclick = function (e) {
        if (e.target != video){
            console.log('You clicked outside the video');
            video.pause();
            lightbox.classList.remove('flex');
        } else {
            console.log('You clicked inside the video');
        }
    }
}

createLightboxFunctionality();


