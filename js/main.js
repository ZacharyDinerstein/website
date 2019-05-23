// Open a video player when the user clicks the 'Video' button
const createLightboxFunctionality = () => {
    let vidBtns = document.querySelectorAll('.btn--open-vid');
    let lightbox = document.getElementById('lightbox');
    let video = document.getElementById('demo-video');

    // Open lightbox when button's clicked
    vidBtns.forEach(function(vidBtn){
        vidBtn.onclick = function(e) {
            lightbox.classList.add('flex');
        }
    });

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


