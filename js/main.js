// Open a video player when the user clicks the 'Video' button
const createLightboxFunctionality = () => {
    let vidBtns = document.querySelectorAll('.btn--open-vid');
    let lightbox = document.getElementById('lightbox');
    let video = document.getElementById('demo-video');

    // Open lightbox when any video button's clicked
    vidBtns.forEach(function(vidBtn){
        vidBtn.onclick = function() {
            openCorrectVid(this, video);
            // lightbox.classList.add('flex');
        }
    });

    // Close lightbox when user clicks outside of video
    lightbox.onclick = function(e) {
        if (e.target != video){
            console.log('You clicked outside the video');
            video.pause();
            lightbox.classList.remove('flex');
        } else {
            console.log('You clicked inside the video');
        }
    }
}

const openCorrectVid = (elem, video) => {
    let vidName = elem.dataset.videoToOpen;
    let sources = video.children;

    for (let source of sources){
        let path = `video/${vidName}/${vidName}.mp4`
        path = "hi";
        source.src = path;
    };
}

createLightboxFunctionality();


